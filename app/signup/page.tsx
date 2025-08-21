// app/signup/page.tsx
'use client'

import { useState } from 'react'

const steps = [
  'Infos de base',
  'Préférences recherchées',
  'Intention',
  'Auto-définition',
  'Visibilité',
  'Crush secret',
  'Profil intuitif',
]

export default function SignupPage() {
  const [step, setStep] = useState(0)

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Étape {step + 1} : {steps[step]}</h1>

      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {/* ICI TU INSÈRES LE FORMULAIRE POUR CHAQUE ÉTAPE */}
        <p>Contenu pour : <strong>{steps[step]}</strong></p>
      </div>

      <div className="flex justify-between w-full max-w-md mt-6">
        <button
          onClick={back}
          disabled={step === 0}
          className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
        >
          Retour
        </button>
        <button
          onClick={next}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded"
        >
          {step === steps.length - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </div>
  )
}
