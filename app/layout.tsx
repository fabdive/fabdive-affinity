import './globals.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-comfortaa',
  display: 'swap',
})

export const metadata = {
  title: 'Fabdive Affinity',
  description: 'Application de rencontre affinitaire originale',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={comfortaa.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
