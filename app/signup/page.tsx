'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Signup() {
  const [photo, setPhoto] = useState<File | null>(null)

  return (

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
        <h1 className="text-[#fff0b8] text-xl font-bold mb-6 text-center">
          Allons-y, crée ton profil
        </h1>

        <form className="space-y-4 w-full max-w-md font-now">
          <input
            type="email"
            placeholder="Ton email"
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
          />

          <button
            type="button"
            className="w-full px-4 py-2 rounded-full bg-[#14018d] border border-[#fff0b8] text-[#fff0b8] flex items-center justify-center gap-2"
          >
            <Image src="/google-icon.png" alt="Google" width={20} height={20} />
            Connecte toi avec ton compte
          </button>

          <input
            type="text"
            placeholder="Ton prénom ou pseudo préféré"
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-full border border-[#fff0b8] bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] focus:outline-none"
          />

          {/* Icône Caméra (plus grande) */}
          <div className="flex justify-center mt-4">
            <Image
              src="/camera-icon.png"
              alt="Camera"
              width={48}
              height={48}
              className="cursor-pointer"
            />
          </div>

          {/* Checkbox +18 ans */}
          <div className="flex items-center gap-2 mt-4 text-[#fff0b8]">
            <input type="checkbox" id="age-confirm" className="accent-[#e7b95d]" />
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
