import { NextAuthOptions } from 'next-auth'
import TwitchProvider from 'next-auth/providers/twitch'

const adminIds = (process.env.ADMIN_TWITCH_IDS || '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean)

export const authOptions: NextAuthOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID || process.env.Twitch_PROVIDER_CLIENT_ID || '',
      clientSecret: process.env.TWITCH_CLIENT_SECRET || process.env.Twitch_PROVIDER_CLIENT_SECRET || ''
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = (profile as any).id
        token.twitchUsername = (profile as any).login
        token.role = adminIds.includes(String((profile as any).id)) ? 'admin' : 'user'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).id = token.id as string
        ;(session.user as any).twitchUsername = token.twitchUsername as string
        ;(session.user as any).role = token.role as 'user' | 'admin'
      }
      return session
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login'
  },
  secret: process.env.NEXTAUTH_SECRET
}
