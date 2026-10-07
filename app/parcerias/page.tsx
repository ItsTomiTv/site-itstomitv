import { partners } from '@/data/siteData'

export default function ParceriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Parcerias</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">A quem confio</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner.name} className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-6 shadow-card">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/50 bg-red-500/10 text-lg font-black text-red-300">
              {partner.logo}
            </div>
            <h2 className="text-2xl font-bold text-white">{partner.name}</h2>
            <p className="mt-3 text-sm text-white/70">{partner.description}</p>
            <a href={partner.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-red-400 hover:text-red-300">
              Visitar marca →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] border border-red-500/30 bg-red-500/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Parcerias</p>
        <h2 className="mt-3 text-3xl font-black text-white">Queres ser meu parceiro?</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Se representas uma marca, equipa ou projeto com alinhamento no universo gaming, entra em contacto para criar uma parceria estratégica.
        </p>
        <a href="mailto:hello@itstomitv.com" className="mt-6 inline-flex rounded-full border border-red-500 bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-glow">
          ENTRAR EM CONTACTO
        </a>
      </div>
    </div>
  )
}
