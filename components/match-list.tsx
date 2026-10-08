'use client'

import { Match } from '@/lib/types'
import { MatchCard } from './match-card'

export function MatchList({ matches, title, emptyMessage }: { matches: Match[]; title?: string; emptyMessage?: string }) {
  if (!matches.length) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[#101010]/50 p-8 text-center">
        <p className="text-white/60">{emptyMessage || 'Nenhum jogo disponível.'}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {title && (
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">{title}</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}
