import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Allow access to API auth routes
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // 2. Allow access to login page
  if (pathname === '/login') {
    return NextResponse.next();
  }

  // 3. Allow access to static assets and images
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/images')
  ) {
    return NextResponse.next();
  }

  // 4. Check for authentication cookie
  const authCookie = request.cookies.get('site-auth');

  if (!authCookie || authCookie.value !== 'true') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
