import { NextRequest, NextResponse } from 'next/server'

const USER = process.env.BASIC_AUTH_USER ?? 'admin'
const PASS = process.env.BASIC_AUTH_PASSWORD ?? 'nss2026'

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')

  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded)
      const [user, pass] = decoded.split(':')
      if (user === USER && pass === PASS) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

export const config = {
  matcher: [
    '/((?!_next|images|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico|css|js|mjs|map|woff|woff2|ttf|otf|txt|xml)).*)',
  ],
}
