'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function Signup() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)
  const [ageConfirmed, setAgeConfirmed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!ageConfirmed) {
      setError('Tu dois confirmer avoir plus de 18 ans.')
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/login') // Rediriger après inscription
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/1-inscription.png')" }}>
      
      {/* Bandeau indigo */}
      <div className="bg-[#14018d] w-full py-3 flex justify-center">
        <Image
          src="/logo-fabdive.png"
          alt="Logo Fabdive"
          width={300}
          height={100}
          className="h-auto"
        />
      </div>

      {/* Formulaire */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-[#fff0b8] text-xl mb-6 text-center font-comfortaa">
          Allons-y, crée ton profil
        </h1>

        <form onSubmit={handleSignup} className="space-y-4 w-full max-w-md font-comfortaa">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <input
            type="email"
            placeholder="Ton email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
            required
          />

          <input
            type="text"
            placeholder="Ton prénom ou pseudo préféré"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
            required
          />

          {/* Icône Caméra */}
          <div className="flex justify-center mt-4">
            <label htmlFor="photo-upload">
              <Image
                src="/camera-icon.png"
                alt="Camera"
                width={64}
                height={64}
                className="cursor-pointer"
              />
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={e => setPhoto(e.target.files?.[0] || null)}
              className="hidden"
            />
          </div>

          {/* Checkbox +18 ans */}
          <div className="flex items-center gap-2 mt-4 text-[#fff0b8]">
            <input
              type="checkbox"
              id="age-confirm"
              checked={ageConfirmed}
              onChange={() => setAgeConfirmed(!ageConfirmed)}
              className="accent-[#e7b95d]"
            />
            <label htmlFor="age-confirm" className="text-sm">Je confirme avoir plus de 18 ans</label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-full bg-[#e7b95d] text-[#14018d] font-bold mt-6"
          >
            Continuer
          </button>
        </form>
      </div>
    </div>
  )
}
