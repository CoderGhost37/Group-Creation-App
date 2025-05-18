'use server'

import { auth } from '@/auth'
import { SessionSchema } from '@/schemas/session'

export async function getUser() {
  const session = await auth()

  if (!session) {
    return null
  }

  const parsedUser = SessionSchema.safeParse(session.user)

  if (!parsedUser.success) {
    return null
  }

  return parsedUser.data
}
