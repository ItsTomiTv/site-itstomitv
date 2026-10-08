'use client'

import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.17),transparent_30%),linear-gradient(180deg,#050505,#0b0b0b_35%,#0a0a0a)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="font-black uppercase tracking-[-0.08em] text-xl text-white">
            ADMIN
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">{(session?.user as any)?.twitchUsername || 'admin'}</span>
            <a
              href="/api/auth/signout"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </a>
          </div>
        </div>
      </header>

      {children}
    </div>
  )
}
