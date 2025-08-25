'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase' // ✅ bon chemin

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/profil') // ✅ à ajuster selon ta route réelle
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#14018d] text-[#fff0b8] flex flex-col items-center justify-center px-4 font-comfortaa">
      <h1 className="text-xl mb-6">Connexion</h1>
      <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-transparent placeholder-[#fff0b8] focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-transparent placeholder-[#fff0b8] focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 rounded-full bg-[#e7b95d] text-[#14018d] font-bold mt-6"
        >
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}
