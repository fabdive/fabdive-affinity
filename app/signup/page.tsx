'use client'

import React from 'react'
import { useState } from 'react'

export default function SignupStep1() {
  const [email, setEmail] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [password, setPassword] = useState('')
  const [isOver18, setIsOver18] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center text-[#fff0b8] font-sans"
      style={{ backgroundImage: "url('/fond-profil.png')" }}
    >
      {/* Bandeau Fabdive */}
      <div className="bg-[#14018d] py-4 flex justify-center items-center">
        <img src="/logo-fabdive.png" alt="Logo Fabdive" className="h-10" />
      </div>

      {/* Contenu */}
      <div className="flex flex-col items-center justify-center px-6 pt-6 pb-10 max-w-md mx-auto">

        <h1 className="text-xl font-bold mb-6 text-center">
          Allons-y, crée ton profil
        </h1>

        {/* Email */}
        <input
          type="email"
          placeholder="Ton email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-full bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />

        {/* Connexion Google */}
        <button className="w-full p-3 mb-4 rounded-full bg-[#14018d] text-white flex items-center justify-center gap-2 text-sm border border-white border-opacity-30">
          <img src="/google-icon.png" alt="Google" className="h-5 w-5" />
          Connecte toi avec ton compte
        </button>

        {/* Pseudo */}
        <input
          type="text"
          placeholder="Ton prénom ou pseudo préféré"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="w-full p-3 mb-4 rounded-full bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-full bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
        />

        {/* Âge minimum */}
        <label className="flex items-center text-sm mb-6">
          <input
            type="checkbox"
            checked={isOver18}
            onChange={() => setIsOver18(!isOver18)}
            className="mr-2 accent-[#e7b95d]"
          />
          Confirmes que tu as plus de 18 ans
        </label>

        {/* Upload photo (non fonctionnel pour l’instant) */}
        <div className="w-20 h-20 rounded-full border border-dashed border-white flex items-center justify-center mb-6">
          <img src="/camera-icon.png" alt="Camera" className="w-8 h-8 opacity-80" />
        </div>

        {/* Bouton continuer */}
        <button
          className="bg-[#e7b95d] text-[#14018d] font-bold px-6 py-3 rounded-full w-full text-center"
        >
          Continuer
        </button>

        {/* Message confidentialité */}
        <p className="text-xs mt-6 text-center leading-relaxed text-white">
          Toutes tes informations sont confidentielles.<br />
          Tu dévoiles ou pas ta photo quand tu le veux,<br />
          avant ou après les matchs.
        </p>
      </div>
    </div>
  )
}
