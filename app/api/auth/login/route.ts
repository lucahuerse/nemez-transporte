import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const sitePassword = process.env.SITE_PASSWORD;

    if (password === sitePassword) {
      const response = NextResponse.json({ success: true });

      // Trigger n8n webhook
      try {
        await fetch('https://primary-production-9b9b0.up.railway.app/webhook/b57bf065-d58b-4db0-b553-253c49bda791', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'login_success',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error('Failed to trigger login webhook:', webhookError);
        // Continue with login even if webhook fails
      }
      
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
