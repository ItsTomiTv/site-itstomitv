import Image from 'next/image'
import Link from 'next/link'
import { upcomingGames } from '@/data/siteData'

export const metadata = {
  title: 'Jogos | ItsTomiTv',
  description: 'Jogos atuais e futuros que ItsTomiTv está a jogar'
}

export default function JogosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Conteúdo</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Jogos</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">Descobre os títulos em destaque e os que vêm por aí.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Counter-Strike 2',
            status: 'Jogo atual',
            badge: 'red',
            desc: 'Competitivo e focado em high pressure, precisão e clutches.'
          },
          {
            title: 'Valorant',
            status: 'Em breve',
            badge: 'yellow',
            desc: 'Ajustes táticos, momentos intensos e rounds de alto nível.'
          },
          {
            title: 'Apex Legends',
            status: 'Planeado',
            badge: 'blue',
            desc: 'Jornadas rápidas de alto ritmo e teamwork em ação.'
          }
        ].map((game) => (
          <div key={game.title} className="neon-border group rounded-[2rem] bg-[#101010] p-6 transition hover:bg-[#151515]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black text-white">{game.title}</h2>
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${
                game.badge === 'red'
                  ? 'border border-red-500/50 bg-red-500/10 text-red-300'
                  : game.badge === 'yellow'
                    ? 'border border-yellow-500/50 bg-yellow-500/10 text-yellow-300'
                    : 'border border-blue-500/50 bg-blue-500/10 text-blue-300'
              }`}>
                {game.status}
              </span>
            </div>
            <p className="text-white/70">{game.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Próximos</p>
          <h2 className="mt-4 text-4xl font-black text-white">Em breve</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingGames.map((game) => (
            <div key={game.title} className="neon-border rounded-[2rem] bg-[#101010] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">{game.date}</span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-bold uppercase text-white/75">
                  {game.status}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{game.title}</h3>
              <p className="mt-3 text-white/70">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
