import Image from 'next/image'
import Link from 'next/link'

import { games, socialLinks, streamStatus } from '@/data/siteData'
import { TwitchConnectButton } from '@/components/twitch-connect-button'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.18),transparent_32%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0a0a0a]/80 px-4 py-10 shadow-card sm:px-8 lg:px-12 lg:py-16">
            <div className="absolute inset-0 opacity-90" aria-hidden="true">
              <div className="absolute -left-10 top-8 h-72 w-72 rotate-45 rounded-full border border-red-500/30 bg-red-500/10 blur-3xl" />
              <div className="absolute right-4 top-0 h-80 w-80 rounded-full border border-red-500/20 bg-red-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl text-center">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-red-300">
                <span className={`h-2.5 w-2.5 rounded-full ${streamStatus.online ? 'bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.9)]' : 'bg-gray-500'}`} />
                {streamStatus.online ? 'AO VIVO' : 'OFFLINE'}
              </div>

              <h1 className="font-black uppercase tracking-[-0.08em] text-[3.3rem] leading-none text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.12)] sm:text-[5rem] lg:text-[10rem]">
                ItsTomiTv
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-xl">
                Gaming, intensidade e presença premium. Onde a comunidade vive cada momento.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/stream"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500 sm:text-base"
                >
                  ASSISTIR À STREAM
                </Link>
                <TwitchConnectButton />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {[
                  { name: 'Twitch', handle: '/ItsTomiTv' },
                  { name: 'Instagram', handle: '/itstomitv' },
                  { name: 'YouTube', handle: '/itstomi_tv' }
                ].map((item) => (
                  <div key={item.name} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="ml-2 text-white/60">{item.handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="neon-border rounded-[2rem] bg-[#101010]/80 p-6 shadow-card sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Estado da stream</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                {streamStatus.online ? 'ItsTomiTv está em direto' : 'A stream está atualmente offline'}
              </h2>
              <p className="mt-4 text-white/70">
                {streamStatus.online
                  ? `${streamStatus.game} • ${streamStatus.title}`
                  : 'A próxima transmissão está marcada e a comunidade está pronta para voltar.'}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm uppercase tracking-[0.2em] text-red-300">Live</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-2.5 py-1 text-xs text-red-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  {streamStatus.viewers} viewers
                </span>
              </div>
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <p>Jogo atual: <span className="font-semibold text-white">{streamStatus.game}</span></p>
                <p>Título: <span className="font-semibold text-white">{streamStatus.title}</span></p>
                <p>Próxima transmissão: <span className="font-semibold text-white">{streamStatus.nextStream}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Jogos</p>
            <h2 className="mt-2 text-3xl font-black text-white">Jogos atuais</h2>
          </div>
          <Link href="/jogos" className="text-sm font-semibold text-red-400 hover:text-red-300">Ver todos</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <article key={game.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101010] shadow-card transition hover:-translate-y-1 hover:border-red-500/40">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={game.image} alt={game.title} fill className="object-cover grayscale-[0.2] transition duration-500 hover:scale-105" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{game.title}</h3>
                  <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-1 text-[10px] font-bold uppercase text-red-300">
                    {game.status}
                  </span>
                </div>
                <p className="text-sm text-white/70">{game.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Redes</p>
            <h2 className="mt-2 text-3xl font-black text-white">Acompanhe-me</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {socialLinks.slice(0, 6).map((social) => (
            <a href={social.href} target="_blank" rel="noreferrer" key={social.name} className="rounded-2xl border border-white/10 bg-[#101010] p-5 transition hover:border-red-500/60 hover:shadow-glow">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${social.accent} text-lg font-black text-white`}>
                {social.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-xl font-bold text-white">{social.name}</h3>
              <p className="mt-2 text-sm text-white/60">{social.handle}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}








































































