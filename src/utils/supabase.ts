import {
  createBrowserClient as createSupabaseBrowserClient,
  createServerClient as createSupabaseServerClient,
  type CookieOptions,
} from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Sécurise les variables d’environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Les variables NEXT_PUBLIC_SUPABASE_URL et ANON_KEY sont requises.')
}

// ✅ Client navigateur
export const supabase = createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey)

// ✅ Client côté navigateur (ex: pour `useEffect`, formulaire)
export const createBrowserClient = () =>
  createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey)

// ✅ Client côté serveur (Server Components, Server Actions)
export const createServerClient = () => {
  const cookieStore = cookies()
  return createSupabaseServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (name: string) => cookieStore.get(name)?.value,
      set(name, value, options) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch {}
      },
      remove(name, options) {
        try {
          cookieStore.set({ name, value: '', ...options })
        } catch {}
      },
    },
  })
}

// ✅ Client middleware.ts
export const createMiddlewareClient = (request: NextRequest) => {
  const response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createSupabaseServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (name: string) => request.cookies.get(name)?.value,
      set(name, value, options) {
        request.cookies.set({ name, value, ...options })
        response.cookies.set({ name, value, ...options })
      },
      remove(name, options) {
        request.cookies.set({ name, value: '', ...options })
        response.cookies.set({ name, value: '', ...options })
      },
    },
  })

  return { supabase, response }
}
