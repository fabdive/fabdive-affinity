'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/1-inscription.png')" }}
    >
      {/* Bande logo en haut */}
      <div className="w-full bg-[#14018d] py-6 px-8 flex justify-center">
        <Image
          src="/logo-fabdive.png"
          alt="Fabdive"
          width={120}
          height={40}
          className="h-auto"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full max-w-md mt-10 px-6 py-8 rounded-xl text-center font-now">
        <h1 className="text-[#fff0b8] text-2xl font-bold mb-6">
          Allons-y, crée ton profil
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Ton email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 bg-[#ffffff14] text-[#fff0b8] placeholder-[#fff0b8]/60 rounded-xl border border-[#fff0b8]/20 focus:ring-2 focus:ring-[#e7b95d] outline-none"
          />

          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#14018d] text-[#fff0b8] font-semibold rounded-xl py-3 px-4 w-full hover:bg-[#1800a0] transition"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Connecte toi avec ton compte
          </button>

          <input
            type="text"
            placeholder="Ton prénom ou pseudo préféré"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-3 px-4 bg-[#ffffff14] text-[#fff0b8] placeholder-[#fff0b8]/60 rounded-xl border border-[#fff0b8]/20 focus:ring-2 focus:ring-[#e7b95d] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3 px-4 bg-[#ffffff14] text-[#fff0b8] placeholder-[#fff0b8]/60 rounded-xl border border-[#fff0b8]/20 focus:ring-2 focus:ring-[#e7b95d] outline-none"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-[#e7b95d] text-[#14018d] font-bold py-3 rounded-xl hover:bg-[#f3cb79] transition"
          >
            Créer mon compte
          </button>
        </form>

        <p className="text-[#fff0b8]/70 text-sm mt-6">
          Tu as déjà un compte ?{' '}
          <Link href="/login" className="underline text-[#fff0b8]">
            Connecte-toi
          </Link>
        </p>
      </div>
    </div>
  )
}
