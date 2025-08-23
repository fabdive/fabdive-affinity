import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  // Cette ligne permet d’échanger le "code" du lien magique contre une session active
  await supabase.auth.exchangeCodeForSession(
    new URL(request.url).searchParams.get('code') || ''
  )

  return NextResponse.redirect(new URL('/', request.url))
}
