'use client'

import { useState } from 'react'
import { createBrowserClient } from '@/utils/supabase'

export default function LoginPage() {
  const supabase = createBrowserClient()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      {sent ? (
        <p className="text-green-400">Vérifie ta boîte mail ✉️</p>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ton adresse email"
            className="p-2 rounded bg-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 px-4 py-2 rounded"
          >
            Envoyer le lien magique
          </button>
        </form>
      )}
      {error && <p className="text-red-400 mt-2">Erreur : {error}</p>}
    </div>
  )
}
