// app/layout.tsx

import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Fabdive Affinity',
  description: 'Application de rencontre affinitaire',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
       <body className="font-now">{children}</body>
    </html>
  )
}
