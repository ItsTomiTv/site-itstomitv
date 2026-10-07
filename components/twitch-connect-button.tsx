'use client'

import { useState } from 'react'
import { Twitch, User, LogOut, ChevronDown } from 'lucide-react'

export function TwitchConnectButton() {
  const [connected, setConnected] = useState(false)
  const [open, setOpen] = useState(false)

  const user = {
    name: 'ItstomiTv',
    avatar: 'IT'
  }

  return (
    <div className="relative">
      <button
        onClick={() => (!connected ? setConnected(true) : setOpen((v) => !v))}
        className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition md:px-5 ${
          connected
            ? 'border border-green-500/60 bg-green-600/15 text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
            : 'border border-red-500/70 bg-red-600 text-white red-glow hover:bg-red-500'
        }`}
      >
        {connected ? (
          <>
            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">
              {user.avatar}
            </span>
            <span>@{user.name}</span>
            <ChevronDown className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            <Twitch className="mr-2 h-4 w-4" />
            Ligar com a Twitch
          </>
        )}
      </button>

      {connected && open && (
        <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-card backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-300">
              {user.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{user.name}</p>
              <p className="text-xs text-white/50">Perfil Twitch</p>
            </div>
          </div>

          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/5">
            <User className="h-4 w-4" />
            Perfil Twitch
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/5">
            <Twitch className="h-4 w-4" />
            Canal
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-300 transition hover:bg-white/5" onClick={() => { setConnected(false); setOpen(false) }}>
            <LogOut className="h-4 w-4" />
            Desligar conta
          </button>
        </div>
      )}
    </div>
  )
}
