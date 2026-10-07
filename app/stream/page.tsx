import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ItsTomiTv | Stream',
  description: 'Página oficial da stream do ItsTomiTv'
}

export default function StreamPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Stream</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">AO VIVO</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-card">
          <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.2),transparent_35%),linear-gradient(180deg,#060606,#101010)] p-4">
            <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-red-500/30 bg-black/60 text-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  LIVE
                </div>
                <p className="text-2xl font-black text-white">ItsTomiTv está em direto</p>
                <p className="mt-3 text-sm text-white/60">Counter-Strike 2 • RANKED + FUN + BIG PLAYS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-card">
          <p className="text-sm uppercase tracking-[0.2em] text-red-300">Canal</p>
          <h2 className="mt-3 text-2xl font-black text-white">ItsTomiTv</h2>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p>Jogo: <span className="font-semibold text-white">Counter-Strike 2</span></p>
            <p>Título: <span className="font-semibold text-white">RANKED + FUN + BIG PLAYS</span></p>
            <p>Estado: <span className="font-semibold text-red-300">AO VIVO</span></p>
          </div>
          <a href="https://twitch.tv/ItsTomiTv" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full border border-red-500 bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-glow">
            ABRIR NA TWITCH
          </a>
        </div>
      </div>
    </div>
  )
}
