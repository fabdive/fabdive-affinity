// app/signup/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function SignupPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start pt-8 px-4"
      style={{ backgroundImage: "url('/1-inscription.png')" }}
    >
      {/* Bandeau avec logo */}
      <div className="w-full bg-[#14018d] py-4 px-6 flex justify-center items-center">
        <Image src="/logo-fabdive.png" alt="Fabdive Logo" width={160} height={40} />
      </div>

      {/* Titre */}
      <h1 className="text-[#fff0b8] text-xl font-bold mt-8 mb-4 text-center">
        Allons-y, crée ton profil
      </h1>

      {/* Email */}
      <input
        type="email"
        placeholder="Ton email"
        className="w-full max-w-md px-6 py-3 rounded-full text-[#14018d] placeholder-[#14018d] bg-white mb-3 text-center"
      />

      {/* Google login */}
      <div className="w-full max-w-md flex items-center justify-center mb-3">
        <button className="w-full px-6 py-3 flex items-center justify-center bg-[#14018d] text-[#fff0b8] rounded-full font-medium gap-2">
          <Image src="/google-icon.png" alt="Google" width={20} height={20} />
          Connecte toi avec ton compte
        </button>
      </div>

      {/* Pseudo */}
      <input
        type="text"
        placeholder="Ton prénom ou pseudo préféré"
        className="w-full max-w-md px-6 py-3 rounded-full text-[#14018d] placeholder-[#14018d] bg-white mb-3 text-center"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-md px-6 py-3 rounded-full text-[#14018d] placeholder-[#14018d] bg-white mb-4 text-center"
      />

      {/* Checkbox */}
      <label className="flex items-center mb-4 text-[#fff0b8] text-sm">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Confirmes que tu as plus de 18 ans
      </label>

      {/* Photo Upload */}
      <div className="w-20 h-20 rounded-full border border-dashed border-[#e7b95d] flex items-center justify-center mb-4">
        <Image src="/camera-icon.png" alt="Upload" width={30} height={30} />
      </div>

      {/* Confidentialité */}
      <p className="text-center text-[#fff0b8] text-sm px-4 mb-2 leading-snug">
        Toutes tes informations sont confidentielles.
        <br />
        Tu dévoiles ou pas ta photo quand tu le veux,
        <br />
        avant ou après les matchs.
      </p>

      {/* Bouton continuer */}
      <button
        className="mt-4 bg-[#14018d] text-[#fff0b8] px-6 py-3 rounded-full shadow-lg font-bold"
      >
        Continuer
      </button>
    </div>
  );
}

