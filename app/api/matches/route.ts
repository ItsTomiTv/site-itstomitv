import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createMatch, getMatches } from '@/data/matches'

export async function GET() {
  return NextResponse.json(getMatches())
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Acesso negado' }, { status: 403 })
  }

  try {
    const body = await req.json()

    const newMatch = createMatch({
      tournament: body.tournament,
      team1: { name: body.team1.name, logo: body.team1.logo },
      team2: { name: body.team2.name, logo: body.team2.logo },
      date: body.date,
      time: body.time,
      twitchUrl: body.twitchUrl,
      status: body.status,
      description: body.description
    })

    return NextResponse.json(newMatch, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar jogo' }, { status: 500 })
  }
}
