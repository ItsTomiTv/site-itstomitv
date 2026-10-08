import { Match } from '@/lib/types'

let matches: Match[] = [
  {
    id: 'match-001',
    tournament: 'BLAST Premier',
    team1: { name: 'NAVI', logo: '/uploads/teams/navi.svg' },
    team2: { name: 'G2', logo: '/uploads/teams/g2.svg' },
    date: '2026-10-12',
    time: '20:00',
    twitchUrl: 'https://www.twitch.tv/itstomitv',
    status: 'upcoming',
    description: 'Semifinal do BLAST Premier',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'match-002',
    tournament: 'ESL Pro League',
    team1: { name: 'FaZe', logo: '/uploads/teams/faze.svg' },
    team2: { name: 'Vitality', logo: '/uploads/teams/vitality.svg' },
    date: '2026-10-14',
    time: '18:00',
    twitchUrl: 'https://www.twitch.tv/itstomitv',
    status: 'upcoming',
    description: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'match-003',
    tournament: 'IEM',
    team1: { name: 'Team Liquid', logo: '/uploads/teams/liquid.svg' },
    team2: { name: 'Astralis', logo: '/uploads/teams/astralis.svg' },
    date: '2026-09-20',
    time: '19:00',
    twitchUrl: 'https://www.twitch.tv/itstomitv',
    status: 'finished',
    description: 'Jogo anterior',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export function getMatches(): Match[] {
  return [...matches].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`).getTime()
    const dateB = new Date(`${b.date}T${b.time}`).getTime()
    return dateA - dateB
  })
}

export function getUpcomingMatches(): Match[] {
  const now = Date.now()
  return getMatches().filter((match) => {
    const matchTime = new Date(`${match.date}T${match.time}`).getTime()
    return matchTime > now && match.status !== 'finished'
  })
}

export function getFinishedMatches(): Match[] {
  return getMatches().filter((match) => match.status === 'finished')
}

export function getMatchById(id: string): Match | undefined {
  return matches.find((match) => match.id === id)
}

export function createMatch(matchData: Omit<Match, 'id' | 'createdAt' | 'updatedAt'>): Match {
  const newMatch: Match = {
    ...matchData,
    id: `match-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  matches.push(newMatch)
  return newMatch
}

export function updateMatch(id: string, updates: Partial<Match>): Match | undefined {
  const index = matches.findIndex((match) => match.id === id)
  if (index === -1) return undefined

  matches[index] = {
    ...matches[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }

  return matches[index]
}

export function deleteMatch(id: string): boolean {
  const index = matches.findIndex((match) => match.id === id)
  if (index === -1) return false

  matches.splice(index, 1)
  return true
}
