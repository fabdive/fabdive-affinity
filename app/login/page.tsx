'use client'

import { useState } from 'react'
import { supabase } from '@lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [withPassword, setWithPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMagicLinkLogin = async () => {
    setLoading(true)
    setMessage('')
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setMessage(`Erreur : ${error.message}`)
    } else {
      setMessage('Un lien magique a été envoyé à ton email.')
    }
    setLoading(false)
  }

  const handlePasswordLogin = async () => {
    setLoading(true)
    setMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(`Erreur : ${error.message}`)
    } else {
      setMessage('Connexion réussie !')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14018d] text-[#fff0b8] px-4">
      <div className="w-full max-w-md space-y-6">

        <h1 className="text-2xl font-bold text-center">Connexion</h1>

        <input
          type="email"
          placeholder="Ton email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-[#e7b95d] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
        />

        {withPassword && (
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-[#e7b95d] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
          />
        )}

        {!withPassword ? (
          <button
            onClick={handleMagicLinkLogin}
            disabled={loading}
            className="w-full px-4 py-2 rounded-full bg-[#e7b95d] text-[#14018d] font-bold"
          >
            {loading ? 'Envoi...' : 'Recevoir un lien magique'}
          </button>
        ) : (
          <button
            onClick={handlePasswordLogin}
            disabled={loading}
            className="w-full px-4 py-2 rounded-full bg-[#e7b95d] text-[#14018d] font-bold"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        )}

        <div className="text-center">
          <button
            onClick={() => setWithPassword(!withPassword)}
            className="text-sm underline mt-2"
          >
            {withPassword ? "Utiliser le lien magique" : "J'ai déjà un mot de passe"}
          </button>
        </div>

        {message && (
          <p className="text-center text-sm mt-4">{message}</p>
        )}
      </div>
    </div>
  )
}
