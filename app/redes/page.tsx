import { socialLinks } from '@/data/siteData'

export default function RedesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Redes sociais</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Segues-me no mundo inteiro</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {socialLinks.map((social) => (
          <div key={social.name} className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${social.accent} text-lg font-black text-white`}>
                {social.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">{social.name}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{social.name}</h2>
            <p className="mt-3 text-sm text-white/65">{social.handle}</p>
            <a href={social.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-red-500 bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-glow">
              Visitar
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
