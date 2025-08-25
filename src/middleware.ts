import { createMiddlewareClient } from '@/utils/supabase'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const { supabase, response } = createMiddlewareClient(req)
  const { data } = await supabase.auth.getSession()

  const isAuth = !!data.session
  const isAuthPage = req.nextUrl.pathname.startsWith('/login')

  if (isAuthPage && isAuth) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!isAuth && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return response
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/profile/:path*'],
}
