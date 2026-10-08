'use client'

import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Twitch, ChevronDown, LogOut } from 'lucide-react'

export function TwitchConnectButton() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)

  if (status === 'loading') {
    return <div className="h-10 w-28 animate-pulse rounded-full bg-white/5" />
  }

  return (
    <div className="relative">
      <button
        onClick={() => (!session ? signIn('twitch') : setOpen((v) => !v))}
        className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition md:px-5 ${
          session
            ? 'border border-green-500/60 bg-green-600/15 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
            : 'border border-red-500/70 bg-red-600 text-white red-glow hover:bg-red-500'
        }`}
      >
        {session ? (
          <>
            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">
              {(session.user?.name || 'TW').slice(0, 2).toUpperCase()}
            </span>
            <span>{session.user?.name || 'Twitch'}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            <Twitch className="mr-2 h-4 w-4" />
            Ligar com a Twitch
          </>
        )}
      </button>

      {session && open && (
        <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-card backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-300">
              {(session.user?.name || 'TW').slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{session.user?.name}</p>
              <p className="text-xs text-white/50">Perfil Twitch</p>
            </div>
          </div>

          <button
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-300 transition hover:bg-white/5"
            onClick={() => {
              signOut()
              setOpen(false)
            }}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      )}
    </div>
  )
}
