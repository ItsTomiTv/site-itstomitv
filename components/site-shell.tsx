import Link from 'next/link'
import { Menu, Twitch, Youtube, Instagram, Play, X } from 'lucide-react'
import { useState } from 'react'

import { navItems } from '@/data/siteData'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-red-500/50 bg-red-500/10 text-xs font-black text-red-500 shadow-glow">
            IT
          </div>
          <span className="font-display text-2xl tracking-tight text-white">ItsTomiTv</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-white/75 transition hover:text-red-500">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-red-500 bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-red-500 md:inline-flex">
            <Twitch className="mr-2 h-4 w-4" />
            Ligar com a Twitch
          </button>

          <button
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0b0b] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 hover:text-red-500" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <button className="mt-2 inline-flex items-center justify-center rounded-full border border-red-500 bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-glow">
              <Twitch className="mr-2 h-4 w-4" />
              Ligar com a Twitch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 ItsTomiTv. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-white">
          <a href="https://twitch.tv/ItsTomiTv" target="_blank" rel="noreferrer" className="hover:text-red-500"><Twitch className="h-4 w-4" /></a>
          <a href="https://youtube.com/@itstomi_tv" target="_blank" rel="noreferrer" className="hover:text-red-500"><Youtube className="h-4 w-4" /></a>
          <a href="https://instagram.com/itstomitv" target="_blank" rel="noreferrer" className="hover:text-red-500"><Instagram className="h-4 w-4" /></a>
          <a href="https://x.com/ItsTomiTv" target="_blank" rel="noreferrer" className="hover:text-red-500"><X className="h-4 w-4" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="hover:text-red-500"><Play className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  )
}
