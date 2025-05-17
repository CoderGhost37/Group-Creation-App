import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { type DefaultSession } from 'next-auth'
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { JWT } from 'next-auth/jwt'

import { getUserById } from '@/actions/auth/getUserById'
import authConfig from '@/auth.config'
import { db } from '@/lib/prisma'
import type { UserRole } from './generated/prisma'

type ExtendedUser = DefaultSession['user'] & {
  name: string
  image: string | null
  role: UserRole
}

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    name: string
    image: string | null
    role: UserRole
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token, trigger, session }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role
      token.name = existingUser.name
      token.image = existingUser.avatar

      if (trigger === 'update' && session?.image) {
        token.image = session.image
      }

      if (trigger === 'update' && session?.name) {
        token.name = session.name
      }

      return token
    },
    async session({ token, session }) {
      if (token.sub && token.role && token.name && session.user) {
        session.user.id = token.sub
        session.user.role = token.role
        session.user.name = token.name
        session.user.image = token.image
      }
      return session
    },
  },
  secret: process.env.AUTH_SECRET as string,
  session: { strategy: 'jwt' },
  ...authConfig,
})
