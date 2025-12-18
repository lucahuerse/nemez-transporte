import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const sitePassword = process.env.SITE_PASSWORD;

    if (password === sitePassword) {
      const response = NextResponse.json({ success: true });
      
      // Set a secure session cookie
      (await cookies()).set('site-auth', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Falsches Passwort' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Ein Fehler ist aufgetreten' }, { status: 500 });
  }
}
