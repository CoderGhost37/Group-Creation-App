'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { getCohortsIdAndName } from '@/actions/cohorts/getCohortsIdAndName'
import { createUsersFromCSV } from '@/actions/users/createUsersFromCSV'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UploadStudentsSchema } from '@/schemas/students'
import { toast } from 'sonner'

interface ImportUsersFromCSVProps {
  isOpen: boolean
  onClose: () => void
}

export function ImportUsersFromCSV({ isOpen, onClose }: ImportUsersFromCSVProps) {
  const [cohorts, setCohorts] = React.useState<{ id: string; name: string }[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isPending, startTransition] = React.useTransition()
  const form = useForm<z.infer<typeof UploadStudentsSchema>>({
    resolver: zodResolver(UploadStudentsSchema),
    defaultValues: {
      cohortId: '',
      file: undefined,
    },
  })

  React.useEffect(() => {
    getCohortsIdAndName()
      .then((data) => setCohorts(data))
      .catch((error) => {
        toast.error('Failed!', error)
      })
      .finally(() => setIsLoading(false))
  }, [])

  function onSubmit(values: z.infer<typeof UploadStudentsSchema>) {
    startTransition(async () => {
      createUsersFromCSV(values).then((data) => {
        if (data.success) {
          toast.success(data.message)
          onClose()
        } else {
          toast.error(data.message)
        }
      })
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Upload Users CSV</DialogTitle>
              <DialogDescription>
                Upload a CSV file with user data to bulk create user accounts. The CSV should
                include name and email columns.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="cohortId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cohort Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        {isLoading ? (
                          <SelectTrigger className="w-full flex gap-2 items-center">
                            <Loader2 size={8} className="animate-spin" />
                            <SelectValue placeholder="Loading cohorts..." />
                          </SelectTrigger>
                        ) : (
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a cohort" />
                          </SelectTrigger>
                        )}
                      </FormControl>
                      <SelectContent>
                        {cohorts.map((cohort) => (
                          <SelectItem key={cohort.id} value={cohort.id}>
                            {cohort.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CSV File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".csv"
                        onChange={(e) => {
                          field.onChange(e.target.files?.[0])
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Users will be created with random passwords that they can reset.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" loading={isPending}>
                Upload and Create Users
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
