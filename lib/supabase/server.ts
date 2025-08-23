import { createServerClient } from '@supabase/ssr'
import { cookies, headers } from 'next/headers'

export const createServerSupabaseClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: cookies(),  // ✅ ici on appelle la fonction
      headers: headers(),
    }
  )
}
