'use client'

import { useState } from 'react'
import { createBrowserClient } from '@/utils/supabase'

export default function LoginPage() {
  const supabase = createBrowserClient()

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 text-white bg-[#1c1c3c] rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Connexion par lien magique</h1>

      {submitted ? (
        <p className="text-green-400 text-center">
          ✔️ Lien envoyé à {email}. Vérifie ta boîte mail 📬
        </p>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Entre ton adresse email"
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded"
          >
            Envoyer le lien magique
          </button>

          {error && <p className="text-red-400 text-sm">{error}</p>}
        </form>
      )}
    </div>
  )
}
