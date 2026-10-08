'use client'

import { Match } from '@/lib/types'

export function AdminMatchList({
  matches,
  onEdit,
  onDelete
}: {
  matches: Match[]
  onEdit: (match: Match) => void
  onDelete: (id: string) => void
}) {
  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <div key={match.id} className="neon-border flex items-center justify-between gap-4 rounded-[1.5rem] bg-[#101010] p-6">
          <div className="flex-1">
            <p className="font-semibold text-white">{match.tournament}</p>
            <p className="text-sm text-white/60">
              {match.team1.name} vs {match.team2.name} • {match.date} às {match.time}
            </p>
            <p className="mt-1 text-xs text-white/40">
              Status:{' '}
              <span
                className={
                  match.status === 'live'
                    ? 'text-red-400'
                    : match.status === 'finished'
                    ? 'text-white/50'
                    : 'text-yellow-400'
                }
              >
                {match.status === 'upcoming'
                  ? 'Próximo'
                  : match.status === 'live'
                  ? 'Ao vivo'
                  : 'Terminado'}
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(match)}
              className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
            >
              Editar
            </button>

            <button
              onClick={() => {
                if (confirm('Tem a certeza que pretende apagar este jogo?')) {
                  onDelete(match.id)
                }
              }}
              className="rounded-lg border border-red-500/50 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
            >
              Apagar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
