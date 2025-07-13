import { getToken } from 'next-auth/jwt'
import { type NextRequest, NextResponse } from 'next/server'

const authRoutes = ['/login', '/forgot-password', '/reset-password']

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const user = await getToken({
    req,
    secret: process.env.AUTH_SECRET as string,
    secureCookie: process.env.NODE_ENV === 'production',
    salt:
      process.env.NODE_ENV === 'production'
        ? '__Secure-authjs.session-token'
        : 'authjs.session-token',
  })

  const isApiAuthRoute = nextUrl.pathname.startsWith('/api')
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  if (isAuthRoute) {
    if (user) {
      if (user.role === 'ADMIN') {
        return NextResponse.redirect(new URL('/admin/dashboard/cohorts', nextUrl.toString()))
      }
      return NextResponse.redirect(new URL('/dashboard/cohorts', nextUrl.toString()))
    }
    return NextResponse.next()
  }

  if (user) {
    if (
      user.role === 'ADMIN' &&
      (nextUrl.pathname === '/' || nextUrl.pathname.startsWith('/dashboard'))
    ) {
      return NextResponse.redirect(new URL('/admin/dashboard/cohorts', nextUrl.toString()))
    }
    if (
      user.role === 'USER' &&
      (nextUrl.pathname === '/' || nextUrl.pathname.startsWith('/admin'))
    ) {
      return NextResponse.redirect(new URL('/dashboard/cohorts', nextUrl.toString()))
    }
  }

  if (!user) {
    return NextResponse.redirect(new URL('/login', nextUrl.toString()))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}
