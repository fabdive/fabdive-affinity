// app/signup/page.tsx
'use client';

import { useState } from 'react';

export default function SignupPage() {
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
    // À remplacer plus tard par navigation vers étape 2
    alert('Étape suivante avec : ' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Étape 1 : Infos de base</h1>

      <input
        type="text"
        name="pseudo"
        placeholder="Ton pseudo"
        value={formData.pseudo}
        onChange={handleChange}
        className="w-full border p-2 mb-3"
      />

      <select name="genre" value={formData.genre} onChange={handleChange} className="w-full border p-2 mb-3">
        <option value="">Genre</option>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
        <option value="autre">Autre</option>
      </select>

      <select name="orientation" value={formData.orientation} onChange={handleChange} className="w-full border p-2 mb-3">
        <option value="">Orientation</option>
        <option value="hétéro">Hétéro</option>
        <option value="homo">Homo</option>
        <option value="bi">Bi</option>
        <option value="pan">Pan</option>
      </select>

      {/* Ajoute d’autres champs ici : taille, morphologie, etc. */}

      <button onClick={handleNext} className="bg-fuchsia-600 text-white px-4 py-2 rounded mt-4">
        Étape suivante
      </button>
    </div>
  );
}
