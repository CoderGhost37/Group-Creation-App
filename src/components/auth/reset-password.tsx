'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { resetPassword } from '@/actions/auth/reset-password'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormError } from '@/components/ui/error'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { PasswordInput } from '@/components/ui/password-input'
import { FormSuccess } from '@/components/ui/success'

const formSchema = z.object({
  password: z
    .string()
    .min(6, {
      message:
        'Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special case character.',
    })
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/,
      'Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special case character.'
    ),
  confirmPassword: z.string().min(6, {
    message: 'This field has to be filled.',
  }),
})

export function ResetPasswordForm({ id }: { id: string }) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<string | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function validatePassword(password: string) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/
    if (regex.test(password)) {
      return true
    }
    return false
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSuccess(null)
    setError(null)

    const { password, confirmPassword } = values

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    startTransition(() => {
      resetPassword(id, password).then(async (data) => {
        if (data.success) {
          setSuccess(data.message as string)

          router.push('/login')
        }
        setError(data.error as string)
      })
    })
  }

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-[350px]">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
              <CardDescription>Create a new password for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <>
                        <PasswordInput placeholder="Password" {...field} />
                        {!validatePassword(field.value) && (
                          <p className="mt-2 text-sm text-gray-600">
                            Please enter a password that meets the below criteria.
                          </p>
                        )}
                        <ul className="">
                          <li
                            className={`text-sm ${
                              field.value.length >= 6 ? 'text-green-500' : 'text-gray-500'
                            }`}
                          >
                            {field.value.length >= 6 ? '✓' : '✕'} At least 6 characters
                          </li>
                          <li
                            className={`text-sm ${
                              /[a-z]/.test(field.value) ? 'text-green-500' : 'text-gray-500'
                            }`}
                          >
                            {/[a-z]/.test(field.value) ? '✓' : '✕'} Contains a lowercase letter
                          </li>
                          <li
                            className={`text-sm ${
                              /[A-Z]/.test(field.value) ? 'text-green-500' : 'text-gray-500'
                            }`}
                          >
                            {/[A-Z]/.test(field.value) ? '✓' : '✕'} Contains an uppercase letter
                          </li>
                          <li
                            className={`text-sm ${
                              /\d/.test(field.value) ? 'text-green-500' : 'text-gray-500'
                            }`}
                          >
                            {/\d/.test(field.value) ? '✓' : '✕'} Contains a number
                          </li>
                          <li
                            className={`text-sm ${
                              /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(field.value)
                                ? 'text-green-500'
                                : 'text-gray-500'
                            }`}
                          >
                            {/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(field.value) ? '✓' : '✕'}{' '}
                            Contains a special character
                          </li>
                        </ul>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Confirm Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormError message={error} />
              <FormSuccess message={success} />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" loading={isPending} className="w-full">
                Reset password
              </Button>
              <div className="text-center text-sm">
                Remember your password?{' '}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  )
}
