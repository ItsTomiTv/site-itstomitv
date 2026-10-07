import { partners } from '@/data/siteData'

export const metadata = {
  title: 'Parcerias | ItsTomiTv',
  description: 'Marcas e empresas parceiras de ItsTomiTv'
}

export default function ParceriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">Partnerships</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Parcerias</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">Confiança, qualidade e profissionalismo. Conheça os meus parceiros.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="neon-border group rounded-[2rem] bg-[#101010] p-8 transition hover:bg-[#151515]">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/40 bg-red-500/10 font-black text-red-300">
              {partner.logo}
            </div>
            <h2 className="text-2xl font-black text-white">{partner.name}</h2>
            <p className="mt-3 text-white/70">{partner.description}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-red-400 transition group-hover:text-red-300">Ver mais →</span>
          </a>
        ))}
      </div>

      <div className="mt-20 overflow-hidden rounded-[2rem] border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5 p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">Oportunidade</p>
        <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Queres ser meu parceiro?</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Se representas uma marca, equipa ou projeto com alinhamento no universo gaming, entra em contacto. Procuro parcerias estratégicas, autênticas e de impacto.
        </p>
        <a href="mailto:hello@itstomitv.com" className="mt-8 inline-flex rounded-full border border-red-500 bg-red-600 px-6 py-3 text-sm font-semibold text-white red-glow transition hover:bg-red-500">
          ENTRAR EM CONTACTO
        </a>
      </div>
    </div>
  )
}
