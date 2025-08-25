import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const { data, error } = await supabase.auth.getSession()

  if (data.session) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
