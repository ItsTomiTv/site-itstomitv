'use client'

import { useState } from 'react'
import { Match } from '@/lib/types'
import { X } from 'lucide-react'

type AdminFormData = {
  tournament: string
  team1Name: string
  team1Logo: string
  team2Name: string
  team2Logo: string
  date: string
  time: string
  twitchUrl: string
  status: 'upcoming' | 'live' | 'finished'
  description: string
}

export function AdminMatchForm({
  match,
  onSubmit,
  onCancel,
  isLoading
}: {
  match?: Match
  onSubmit: (data: any) => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}) {
  const [formData, setFormData] = useState<AdminFormData>({
    tournament: match?.tournament || '',
    team1Name: match?.team1.name || '',
    team1Logo: match?.team1.logo || '',
    team2Name: match?.team2.name || '',
    team2Logo: match?.team2.logo || '',
    date: match?.date || '',
    time: match?.time || '',
    twitchUrl: match?.twitchUrl || '',
    status: match?.status || 'upcoming',
    description: match?.description || ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await onSubmit({
      tournament: formData.tournament,
      team1: { name: formData.team1Name, logo: formData.team1Logo },
      team2: { name: formData.team2Name, logo: formData.team2Logo },
      date: formData.date,
      time: formData.time,
      twitchUrl: formData.twitchUrl,
      status: formData.status,
      description: formData.description
    })
  }

  return (
    <form onSubmit={handleSubmit} className="neon-border rounded-[2rem] bg-[#101010] p-8 space-y-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-black text-white">{match ? 'Editar Jogo' : 'Novo Jogo'}</h2>
        <button type="button" onClick={onCancel} className="rounded-full p-2 text-white/60 hover:bg-white/10">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-white">Nome do Torneio</label>
        <input
          type="text"
          name="tournament"
          value={formData.tournament}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Equipa 1</label>
          <input
            type="text"
            name="team1Name"
            value={formData.team1Name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Logo Equipa 1</label>
          <input
            type="text"
            name="team1Logo"
            value={formData.team1Logo}
            onChange={handleChange}
            placeholder="/uploads/teams/navi.svg"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Equipa 2</label>
          <input
            type="text"
            name="team2Name"
            value={formData.team2Name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Logo Equipa 2</label>
          <input
            type="text"
            name="team2Logo"
            value={formData.team2Logo}
            onChange={handleChange}
            placeholder="/uploads/teams/g2.svg"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Data</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-white">Link da Twitch</label>
        <input
          type="url"
          name="twitchUrl"
          value={formData.twitchUrl}
          onChange={handleChange}
          placeholder="https://www.twitch.tv/itstomitv"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-white">Estado</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-red-500 focus:outline-none"
        >
          <option value="upcoming">Próximo</option>
          <option value="live">Ao vivo</option>
          <option value="finished">Terminado</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-white">Descrição</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-red-500 focus:outline-none"
        />
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500 disabled:opacity-50"
        >
          {isLoading ? 'A Guardar...' : match ? 'Guardar Alterações' : 'Guardar Jogo'}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
