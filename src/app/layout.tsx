// src/app/layout.tsx
import './globals.css'
import { Comfortaa } from 'next/font/google'
import ThemeProvider from '../providers/ThemeProvider'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactQueryProvider from '../providers/ReactQueryProvider'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Fabdive Affinity',
  description: 'Application de rencontre affinitaire originale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={comfortaa.className} style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <NextTopLoader showSpinner={false} height={2} color="#e7b95d" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ReactQueryProvider>
            <main className="flex min-h-screen flex-col items-center">
              {children}
              <Analytics />
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
