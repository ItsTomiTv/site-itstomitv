import Image from 'next/image'
import Link from 'next/link'

import { games, socialLinks, streamStatus } from '@/data/siteData'
import { TwitchConnectButton } from '@/components/twitch-connect-button'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
              <span className={`h-2.5 w-2.5 rounded-full ${streamStatus.online ? 'bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.9)]' : 'bg-gray-500'}`} />
              {streamStatus.online ? 'AO VIVO' : 'OFFLINE'}
            </div>

            <h1 className="font-display text-5xl uppercase tracking-[-0.06em] text-white sm:text-7xl lg:text-[10rem]">
              ItsTomiTv
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75 sm:text-xl">
              Gaming, intensidade e presença premium. Onde a comunidade vive cada momento.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/stream"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-red-500"
              >
                ASSISTIR À STREAM
              </Link>
              <TwitchConnectButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010]/80 p-6 shadow-card sm:p-8">
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
            <article key={game.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101010] shadow-card">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={game.image} alt={game.title} fill className="object-cover grayscale-[0.2]" />
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
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <span className="text-lg font-black">{social.name.slice(0, 2).toUpperCase()}</span>
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
