import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AuroraStream',
  description: 'HD video streaming platform blueprint web experience'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100">
      <body className="min-h-screen antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
          <header className="flex items-center justify-between border-b border-slate-800 pb-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-primary-300">AuroraStream</h1>
              <p className="mt-2 text-sm text-slate-300">
                Next-generation HD video streaming and creator engagement platform.
              </p>
            </div>
            <nav className="flex gap-4 text-sm font-medium text-slate-300">
              <a className="hover:text-primary-300" href="#features">
                Features
              </a>
              <a className="hover:text-primary-300" href="#architecture">
                Architecture
              </a>
              <a className="hover:text-primary-300" href="#team">
                Team
              </a>
            </nav>
          </header>
          <main className="flex-1 py-10">{children}</main>
          <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} AuroraStream Initiative. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
