import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

export const supabase = createServerClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      get(name: string) {
        const cookie = cookies().get(name)
        return cookie?.value // <- on retourne bien une string
      },
    },
    headers: {
      get(name: string) {
        return headers().get(name)
      },
    },
  }
)
