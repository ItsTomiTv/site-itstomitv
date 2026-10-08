'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Plus } from 'lucide-react'

import { AdminMatchForm } from '@/components/admin-match-form'
import { AdminMatchList } from '@/components/admin-match-list'
import { Match } from '@/lib/types'

export default function AdminMatchesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingMatch, setEditingMatch] = useState<Match | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
    if (session && (session.user as any)?.role !== 'admin') {
      router.push('/')
    }
  }, [status, session, router])

  useEffect(() => {
    async function fetchMatches() {
      const res = await fetch('/api/matches')
      const data = await res.json()
      setMatches(data)
      setLoading(false)
    }

    fetchMatches()
  }, [])

  const handleSave = async (data: any) => {
    try {
      const method = editingMatch ? 'PUT' : 'POST'
      const url = editingMatch ? `/api/matches/${editingMatch.id}` : '/api/matches'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error('Erro ao guardar')

      const saved = await res.json()
      setMatches((prev) => {
        if (editingMatch) {
          return prev.map((m) => (m.id === editingMatch.id ? saved : m))
        }
        return [...prev, saved]
      })

      setShowForm(false)
      setEditingMatch(null)
    } catch (error) {
      console.error(error)
      alert('Erro ao guardar o jogo.')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/matches/${id}`, { method: 'DELETE' })

      if (!res.ok) throw new Error('Erro ao apagar')

      setMatches((prev) => prev.filter((match) => match.id !== id))
    } catch (error) {
      console.error(error)
      alert('Erro ao apagar o jogo.')
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-white">A carregar...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white sm:text-5xl">JOGOS</h1>
      </div>

      {showForm ? (
        <AdminMatchForm
          match={editingMatch || undefined}
          onSubmit={handleSave}
          onCancel={() => {
            setShowForm(false)
            setEditingMatch(null)
          }}
          isLoading={loading}
        />
      ) : (
        <>
          <button
            onClick={() => setShowForm(true)}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500"
          >
            <Plus className="h-4 w-4" />
            + ADICIONAR JOGO
          </button>

          <AdminMatchList
            matches={matches}
            onEdit={(match) => {
              setEditingMatch(match)
              setShowForm(true)
            }}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  )
}
