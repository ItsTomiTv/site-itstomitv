import type { Metadata } from 'next'
import Link from 'next/link'
import { Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stream | ItsTomiTv',
  description: 'Assiste à stream ao vivo do ItsTomiTv'
}

export default function StreamPage() {
  const streamStatus = { online: true, game: 'Counter-Strike 2', title: 'RANKED + FUN + BIG PLAYS' }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Ao vivo</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Stream</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="neon-border overflow-hidden rounded-[2rem] bg-[#101010] shadow-card">
          <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.1),transparent_35%),linear-gradient(180deg,#0a0a0a,#101010)]">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                LIVE
              </div>
              <p className="text-2xl font-black text-white">ItsTomiTv está em direto</p>
              <p className="text-sm text-white/60">{streamStatus.game} • {streamStatus.title}</p>
              <a href="https://twitch.tv/ItsTomiTv" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow">
                <Play className="h-4 w-4" />
                ABRIR NA TWITCH
              </a>
            </div>
          </div>
        </div>

        <div className="neon-border rounded-[2rem] bg-[#101010] p-8 shadow-card">
          <p className="text-sm uppercase tracking-[0.25em] text-red-300">Agora em direto</p>
          <h2 className="mt-3 text-3xl font-black text-white">{streamStatus.game}</h2>
          <div className="mt-8 space-y-4 text-sm text-white/70">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">Título</p>
              <p className="mt-1 font-semibold text-white">{streamStatus.title}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50">Estado</p>
              <p className="mt-1 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-300">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                AO VIVO
              </p>
            </div>
          </div>
          <Link href="https://twitch.tv/ItsTomiTv" className="mt-8 inline-flex rounded-full border border-red-500 bg-red-600 px-5 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500">
            VER STREAM
          </Link>
        </div>
      </div>
    </div>
  )
}
