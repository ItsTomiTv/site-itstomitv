import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { deleteMatch, updateMatch } from '@/data/matches'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  try {
    const body = await req.json()
    const updated = updateMatch(params.id, {
      tournament: body.tournament,
      team1: { name: body.team1.name, logo: body.team1.logo },
      team2: { name: body.team2.name, logo: body.team2.logo },
      date: body.date,
      time: body.time,
      twitchUrl: body.twitchUrl,
      status: body.status,
      description: body.description
    })

    if (!updated) {
      return NextResponse.json({ error: 'Jogo não encontrado' }, { status: 404 })
    }

    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar jogo' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)

  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  const deleted = deleteMatch(params.id)

  if (!deleted) {
    return NextResponse.json({ error: 'Jogo não encontrado' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
