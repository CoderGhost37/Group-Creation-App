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
    role: UserRole
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role
      token.name = existingUser.name

      return token
    },
    async session({ token, session }) {
      if (token.sub && token.role && token.name && session.user) {
        session.user.id = token.sub
        session.user.role = token.role
        session.user.name = token.name
      }
      return session
    },
  },
  secret: process.env.AUTH_SECRET as string,
  session: { strategy: 'jwt' },
  ...authConfig,
})
