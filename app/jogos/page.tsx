'use client'

import { MatchList } from '@/components/match-list'
import { getFinishedMatches, getUpcomingMatches } from '@/data/matches'

export default function JogosPage() {
  const upcomingMatches = getUpcomingMatches()
  const finishedMatches = getFinishedMatches()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Conteúdo</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Jogos</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">Acompanha aqui os próximos jogos de CS2 que vou relatar.</p>
      </div>

      <div className="mb-16">
        <MatchList matches={upcomingMatches} title="PRÓXIMOS JOGOS" emptyMessage="Nenhum jogo marcado no momento." />
      </div>

      {finishedMatches.length > 0 && (
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white">JOGOS ANTERIORES</h2>
          </div>

          <MatchList matches={finishedMatches} title="" emptyMessage="Nenhum jogo terminado." />
        </div>
      )}
    </div>
  )
}
