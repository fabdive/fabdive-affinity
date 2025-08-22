// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Fabdive Affinity',
  description: 'Application de rencontre affinitaire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-now">{children}</body>
    </html>
  )
}
