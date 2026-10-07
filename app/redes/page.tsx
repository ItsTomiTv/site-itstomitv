import { socialLinks } from '@/data/siteData'

export const metadata = {
  title: 'Redes Sociais | ItsTomiTv',
  description: 'Segue ItsTomiTv em todas as redes sociais'
}

export default function RedesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Comunidade</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Redes Sociais</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">Segue-me em qualquer lugar. A comunidade cresce todos os dias.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="group neon-border rounded-[2rem] bg-[#101010] p-8 transition hover:bg-[#151515]">
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl font-black text-white ${social.accent}`}>
              {social.name.slice(0, 2).toUpperCase()}
            </div>
            <h2 className="text-2xl font-black text-white">{social.name}</h2>
            <p className="mt-2 text-white/60">{social.handle}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-red-400 transition group-hover:text-red-300">Seguir →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
