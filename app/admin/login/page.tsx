'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Twitch } from 'lucide-react'

export default function AdminLoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/admin')
    }
  }, [session, router])

  if (status === 'loading') {
    return <div className="flex min-h-screen items-center justify-center text-white">A carregar...</div>
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.17),transparent_30%),linear-gradient(180deg,#050505,#0b0b0b_35%,#0a0a0a)]">
      <div className="neon-border w-full max-w-md rounded-[2rem] bg-[#101010] p-8">
        <h1 className="mb-2 text-center text-3xl font-black text-white">ADMIN</h1>
        <p className="mb-8 text-center text-white/60">Faça login para gerir os jogos</p>

        <button
          onClick={() => signIn('twitch', { callbackUrl: '/admin' })}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9146ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7930db]"
        >
          <Twitch className="h-5 w-5" />
          Entrar com Twitch
        </button>

        <p className="mt-8 text-center text-xs text-white/50">Apenas contas com acesso admin podem entrar.</p>
      </div>
    </div>
  )
}
