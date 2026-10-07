import type { Metadata } from 'next'
import './globals.css'

import { Header } from '@/components/site-shell'
import { Footer } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'ItsTomiTv | Oficial',
  description: 'Site oficial do streamer ItsTomiTv com stream, jogos, parcerias e redes sociais.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="bg-bg text-text antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,0,0,0.17),transparent_30%),linear-gradient(180deg,#050505,#0b0b0b_35%,#0a0a0a)]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
