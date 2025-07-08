'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { createGroup } from '@/actions/groups/createGroup'
import { getUserCohortInfo } from '@/actions/profile/getUserCohortsInfo'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
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
import { Textarea } from '@/components/ui/textarea'
import { GroupSchema } from '@/schemas/group'
import type { Cohort } from '../cohorts/cohort.type'

interface CreateGroupFormProps {
  userId: string
}

export function CreateGroupForm({ userId }: CreateGroupFormProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()
  const [fetchingCohorts, setFetchingCohorts] = React.useState(false)
  const [cohorts, setCohorts] = React.useState<Cohort[]>([])
  const form = useForm<z.infer<typeof GroupSchema>>({
    resolver: zodResolver(GroupSchema),
    defaultValues: {
      name: '',
      description: '',
      cohortId: '',
    },
  })

  React.useEffect(() => {
    setFetchingCohorts(true)
    getUserCohortInfo(userId)
      .then((res) => {
        if (res.success && res.data) {
          setCohorts(res.data)
        } else {
          toast.error('Failed to fetch cohorts')
        }
      })
      .catch(() => {
        toast.error('Error fetching cohorts')
      })
      .finally(() => {
        setFetchingCohorts(false)
      })
  }, [])

  function onSubmit(values: z.infer<typeof GroupSchema>) {
    startTransition(() => {
      createGroup(values).then((data) => {
        if (data.success) {
          toast.success(data.message)
          setIsOpen(false)
        } else {
          toast.error(data.message)
        }
      })
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Create Group</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create Group</DialogTitle>
              <DialogDescription>Create a new group for collaboration.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Group Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter Group Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cohortId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cohort</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        {fetchingCohorts ? (
                          <SelectTrigger className="w-full" disabled>
                            <SelectValue placeholder="Loading cohorts..." />
                          </SelectTrigger>
                        ) : (
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a cohort" />
                          </SelectTrigger>
                        )}
                        <SelectContent>
                          {cohorts.length === 0 ? (
                            <SelectItem disabled value="none">
                              No cohorts available
                            </SelectItem>
                          ) : (
                            cohorts.map((cohort) => (
                              <SelectItem key={cohort.id} value={cohort.id}>
                                {cohort.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" loading={isPending}>
                Create Group
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
