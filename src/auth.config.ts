import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import { AuthError } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getUserByEmail } from '@/actions/auth/getUserByEmail'
import { AUTH_ERRORS } from '@/constants/auth-errors'
import { LoginSchema } from '@/schemas/login'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials)

        if (!validateFields.success) {
          throw new AuthError(AUTH_ERRORS.INVALID_CREDENTIALS)
        }

        const { email, password } = validateFields.data

        const user = await getUserByEmail(email)

        if (!user) {
          throw new AuthError(AUTH_ERRORS.EMAIL_NOT_FOUND)
        }

        if (user.status !== 'ACTIVE') {
          throw new AuthError(AUTH_ERRORS.INACTIVE_ACCOUNT)
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
          throw new AuthError(AUTH_ERRORS.INCORRECT_PASSWORD)
        }

        if (passwordMatch) {
          return user
        }
        return null
      },
    }),
  ],
} satisfies NextAuthConfig
