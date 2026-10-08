'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { Match } from '@/lib/types'

export function MatchCard({ match }: { match: Match }) {
  const dateText = new Date(`${match.date}T${match.time}`).toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="neon-border group overflow-hidden rounded-[2rem] bg-[#101010] p-6 transition hover:bg-[#151515] sm:p-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">{match.tournament}</p>
      </div>

      <div className="mb-8 flex items-center justify-between gap-4 sm:gap-6">
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:h-20 sm:w-20">
            <Image
              src={match.team1.logo}
              alt={match.team1.name}
              fill
              className="object-contain p-2"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = '/placeholder-logo.svg'
              }}
            />
          </div>
          <p className="text-center text-sm font-bold text-white sm:text-base">{match.team1.name}</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xl font-black text-red-500 sm:text-2xl">VS</p>
        </div>

        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:h-20 sm:w-20">
            <Image
              src={match.team2.logo}
              alt={match.team2.name}
              fill
              className="object-contain p-2"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = '/placeholder-logo.svg'
              }}
            />
          </div>
          <p className="text-center text-sm font-bold text-white sm:text-base">{match.team2.name}</p>
        </div>
      </div>

      <div className="mb-6 text-center">
        <p className="text-sm text-white/60">{dateText}</p>
        <p className="text-lg font-bold text-white">{match.time}</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        {match.status === 'live' && (
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-red-300">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            AO VIVO
          </div>
        )}

        {match.status === 'finished' && (
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">JOGO TERMINADO</div>
        )}

        {!match.status || match.status !== 'finished' ? (
          <Link
            href={match.twitchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500"
          >
            <Play className="h-4 w-4" />
            VER NA TWITCH
          </Link>
        ) : null}
      </div>

      {match.description && (
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-center text-xs text-white/60">{match.description}</p>
        </div>
      )}
    </div>
  )
}
