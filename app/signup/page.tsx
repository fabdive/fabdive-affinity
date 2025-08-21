// app/signup/page.tsx
'use client';

import { useState } from 'react';

export default function SignupStep1() {
  const [formData, setFormData] = useState({
    pseudo: '',
    genre: '',
    orientation: '',
    taille: '',
    morphologie: '',
    couleurPeau: '',
    localisation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    alert('Données actuelles :\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-violet-900 to-black text-white">
      <div className="w-full max-w-md bg-white text-black p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Étape 1 : Infos de base</h1>

        <input
          type="text"
          name="pseudo"
          placeholder="Ton pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded"
        />

        <select name="genre" value={formData.genre} onChange={handleChange} className="w-full border p-2 mb-4 rounded">
          <option value="">Genre</option>
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
          <option value="autre">Autre</option>
        </select>

        <select name="orientation" value={formData.orientation} onChange={handleChange} className="w-full border p-2 mb-4 rounded">
          <option value="">Orientation</option>
          <option value="hétéro">Hétérosexuel(le)</option>
          <option value="homo">Homosexuel(le)</option>
          <option value="bi">Bisexuel(le)</option>
          <option value="pan">Pansexuel(le)</option>
        </select>

        <input
          type="text"
          name="taille"
          placeholder="Taille (en cm)"
          value={formData.taille}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <select name="morphologie" value={formData.morphologie} onChange={handleChange} className="w-full border p-2 mb-4 rounded">
          <option value="">Morphologie</option>
          <option value="S">Fine (S)</option>
          <option value="M">Moyenne (M)</option>
          <option value="L">Formes (L)</option>
          <option value="XL">Voluptueuse (XL)</option>
        </select>

        <select name="couleurPeau" value={formData.couleurPeau} onChange={handleChange} className="w-full border p-2 mb-4 rounded">
          <option value="">Couleur de peau</option>
          <option value="caucasien">Caucasien</option>
          <option value="africain">Africain</option>
          <option value="asiatique">Asiatique</option>
          <option value="métisse">Métisse</option>
          <option value="autre">Autre</option>
        </select>

        <input
          type="text"
          name="localisation"
          placeholder="Région / Ville"
          value={formData.localisation}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded"
        />

        <button
          onClick={handleNext}
          className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Étape suivante
        </button>
      </div>
    </div>
  );
}
