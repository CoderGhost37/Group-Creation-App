'use server'

import { db } from '@/lib/prisma'

export async function getUserById(id: string) {
  return await db.user.findFirst({
    where: {
      id,
    },
  })
}
