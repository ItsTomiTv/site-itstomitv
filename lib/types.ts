export type MatchStatus = 'upcoming' | 'live' | 'finished'

export type Match = {
  id: string
  tournament: string
  team1: {
    name: string
    logo: string
  }
  team2: {
    name: string
    logo: string
  }
  date: string
  time: string
  twitchUrl: string
  status: MatchStatus
  description?: string
  createdAt: string
  updatedAt: string
}
