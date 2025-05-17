'use server'

import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas/login'
import { AuthError } from 'next-auth'
import type { z } from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    const validateFields = LoginSchema.safeParse(values)
    if (!validateFields.success) {
      return {
        success: false,
        message: null,
        error: validateFields.error.message,
      }
    }

    const { email, password } = validateFields.data

    await signIn('credentials', {
      type: 'email',
      email,
      password,
      redirect: false,
    })
    return { success: true, message: 'Logged in successfully', error: null }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: null,
      error:
        error instanceof AuthError ? error.message.split('..')[0] : 'An unknown error occurred',
    }
  }
}
