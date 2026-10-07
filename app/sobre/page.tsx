import { about } from '@/data/siteData'

export const metadata = {
  title: 'Sobre | ItsTomiTv',
  description: 'Conheça o streamer ItsTomiTv'
}

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex justify-center lg:sticky lg:top-24">
          <div className="relative flex h-[380px] w-[380px] items-center justify-center overflow-hidden rounded-full border-4 border-red-500 bg-[radial-gradient(circle,_rgba(255,0,0,0.15),transparent_60%)]">
            <div className="absolute inset-6 rounded-full border border-red-500/40" />
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-red-500/30 to-red-900/50 text-6xl font-black text-white red-glow">
              IT
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Apresentação</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{about.name}</h1>
          <p className="mt-2 text-xl text-red-300">{about.nickname}</p>

          <p className="mt-8 text-lg leading-relaxed text-white/75">{about.bio}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="neon-border rounded-2xl bg-[#101010] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tipo de conteúdo</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.content.map((item) => (
                  <span key={item} className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="neon-border rounded-2xl bg-[#101010] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Objetivo</p>
              <p className="mt-4 text-white/75">{about.goals}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
