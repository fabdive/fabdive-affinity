'use client'

import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Signup() {
  const [formData, setFormData] = useState({
    pseudo: '',
    genre: '',
    orientation: '',
    taille: '',
    corpulence: '',
    couleurPeau: '',
    localisation: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    console.log('Étape 1 soumise :', formData)
    // Tu peux ici rediriger vers la suite (ex : router.push('/signup/step2'))
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-10"
        style={{ backgroundImage: "url('/fond 1 page inscription.png')" }}
      >
        <div className="w-full max-w-md text-center">
          <Image
            src="/logo-fabdive.png"
            alt="Fabdive Logo"
            width={200}
            height={60}
            className="mx-auto mb-6"
          />
          <h2 className="text-[#fff0b8] text-xl font-bold mb-6">Étape 1 : Infos de base</h2>

          <form className="space-y-4">
            <input
              type="text"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleChange}
              placeholder="Ton prénom ou pseudo"
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] border border-[#e7b95d]"
            />

            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] border border-[#e7b95d]"
            >
              <option value="">Ton genre</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Autre">Autre</option>
            </select>

            <select
              name="orientation"
              value={formData.orientation}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] border border-[#e7b95d]"
            >
              <option value="">Orientation</option>
              <option value="Hétérosexuel(le)">Hétérosexuel(le)</option>
              <option value="Homosexuel(le)">Homosexuel(le)</option>
              <option value="Bisexuel(le)">Bisexuel(le)</option>
              <option value="Asexuel(le)">Asexuel(le)</option>
            </select>

            <input
              type="text"
              name="taille"
              value={formData.taille}
              onChange={handleChange}
              placeholder="Taille (en cm)"
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] border border-[#e7b95d]"
            />

            <select
              name="corpulence"
              value={formData.corpulence}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] border border-[#e7b95d]"
            >
              <option value="">Corpulence</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <select
              name="couleurPeau"
              value={formData.couleurPeau}
              onChange={handleChange}
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] border border-[#e7b95d]"
            >
              <option value="">Couleur de peau</option>
              <option value="Caucasien">Caucasien</option>
              <option value="Africain">Africain</option>
              <option value="Asiatique">Asiatique</option>
              <option value="Métis">Métis</option>
              <option value="Autre">Autre</option>
            </select>

            <input
              type="text"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              placeholder="Ville ou région"
              className="w-full rounded-full px-5 py-3 bg-[#14018d] text-[#fff0b8] placeholder-[#fff0b8] border border-[#e7b95d]"
            />

            <button
              type="button"
              onClick={handleNext}
              className="mt-6 w-full bg-[#e7b95d] text-[#14018d] font-bold py-3 rounded-full transition hover:opacity-90"
            >
              Étape suivante
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
