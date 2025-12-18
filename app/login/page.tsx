'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.refresh();
        router.replace('/');
      } else {
        const data = await res.json();
        setError(data.message || 'Falsches Passwort');
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md space-y-8 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo-white.webp"
            alt="Nemez Transporte"
            height={80}
            width={200}
            className="h-16 w-auto mb-8"
          />
          <h2 className="text-2xl font-bold text-white text-center">
            Website unter Aufbau
          </h2>
          <p className="mt-2 text-sm text-zinc-400 text-center">
            Bitte geben Sie das Passwort ein, um die Seite zu betreten.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" title="Passwort" className="sr-only">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none relative block w-full px-3 py-4 border border-zinc-700 placeholder-zinc-500 text-white rounded-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent sm:text-sm"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Wird geprüft...
                </span>
              ) : (
                'Anmelden'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Nemez Transporte. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  );
}
