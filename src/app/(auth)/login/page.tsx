'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@/utils/supabase'

export default function SignupPage() {
  const router = useRouter()
  const supabase = createBrowserClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/profil') // ✅ redirige vers la page de profil
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 text-white bg-[#1c1c3c] rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Créer un compte</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 placeholder-gray-400"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Mot de passe"
          className="w-full p-3 rounded bg-gray-800 placeholder-gray-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#14018d] font-semibold py-2 px-4 rounded"
        >
          {loading ? 'Création...' : 'Créer mon compte'}
        </button>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
      </form>
    </div>
  )
}
