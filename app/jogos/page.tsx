import Link from 'next/link'

import { games, partners, upcomingGames } from '@/data/siteData'

export default function JogosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Jogos</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Jogos atuais</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {games.map((game) => (
          <div key={game.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101010]">
            <div className="h-56 bg-gradient-to-br from-red-500/30 to-transparent" />
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-white">{game.title}</h2>
                <span className="rounded-full border border-red-500/50 bg-red-500/10 px-2 py-1 text-[10px] font-bold uppercase text-red-300">
                  {game.status}
                </span>
              </div>
              <p className="text-sm text-white/70">{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Próximos</p>
          <h2 className="mt-3 text-4xl font-black text-white">Jogos em breve</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {upcomingGames.map((game) => (
            <div key={game.title} className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-red-300">{game.date}</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase text-white/75">
                  {game.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{game.title}</h3>
              <p className="mt-3 text-sm text-white/70">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
