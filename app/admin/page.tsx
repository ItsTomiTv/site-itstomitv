'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }

    if (session && (session.user as any)?.role !== 'admin') {
      router.push('/')
    }
  }, [status, session, router])

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-white">A carregar...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white sm:text-5xl">ADMIN DASHBOARD</h1>
        <p className="mt-4 text-white/70">Bem-vindo, {(session?.user as any)?.twitchUsername || 'admin'}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <a href="/admin/matches" className="neon-border rounded-[2rem] bg-[#101010] p-8 transition hover:bg-[#151515]">
          <h2 className="text-2xl font-black text-white">JOGOS</h2>
          <p className="mt-2 text-white/60">Criar, editar e apagar jogos</p>
          <p className="mt-4 text-sm font-semibold text-red-400">Ir para Jogos →</p>
        </a>

        <div className="neon-border rounded-[2rem] bg-[#101010]/50 p-8 opacity-60">
          <h2 className="text-2xl font-black text-white">EQUIPAS</h2>
          <p className="mt-2 text-white/60">Em breve</p>
        </div>
      </div>
    </div>
  )
}
