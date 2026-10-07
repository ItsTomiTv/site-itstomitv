import { about } from '@/data/siteData'

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex justify-center">
          <div className="relative flex h-[420px] w-[420px] items-center justify-center overflow-hidden rounded-full border-[6px] border-red-500/80 bg-[radial-gradient(circle,_rgba(255,0,0,0.15),transparent_60%)] shadow-[0_0_60px_rgba(255,0,0,0.35)]">
            <div className="absolute inset-8 rounded-full border border-red-500/40" />
            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-red-500/30 to-red-900/60 text-7xl font-black text-white shadow-glow">
              IT
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Sobre</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{about.name}</h1>
          <p className="mt-2 text-lg text-red-300">{about.nickname}</p>

          <p className="mt-6 text-lg text-white/75">{about.bio}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#101010] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Tipo de conteúdo</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.content.map((item) => (
                  <span key={item} className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-sm text-red-200">{item}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101010] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Objetivos</p>
              <p className="mt-4 text-sm text-white/75">{about.goals}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
