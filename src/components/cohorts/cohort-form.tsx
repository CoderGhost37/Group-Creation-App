'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import React from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { createCohort } from '@/actions/cohorts/createCohort'
import { updateCohort } from '@/actions/cohorts/updateCohort'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { CohortSchema } from '@/schemas/cohort'
import { CalendarIcon } from 'lucide-react'
import { toast } from 'sonner'
import type { Cohort } from './cohort.type'

interface CohortFormProps {
  cohort?: Cohort
  isOpen: boolean
  onClose: () => void
}

export function CohortForm({ cohort, isOpen, onClose }: CohortFormProps) {
  const [isPending, startTransition] = React.useTransition()
  const form = useForm<z.infer<typeof CohortSchema>>({
    resolver: zodResolver(CohortSchema),
    defaultValues: {
      name: cohort?.name || '',
      description: cohort?.description || '',
      startDate: cohort?.startDate || undefined,
    },
  })

  function onSubmit(values: z.infer<typeof CohortSchema>) {
    if (cohort) {
      startTransition(async () => {
        updateCohort(cohort.id, values).then((data) => {
          if (data.success) {
            toast.success(data.message)
            onClose()
          } else {
            toast.error(data.message)
          }
        })
      })
    } else {
      startTransition(async () => {
        createCohort(values).then((data) => {
          if (data.success) {
            toast.success(data.message)
            onClose()
          } else {
            toast.error(data.message)
          }
        })
      })
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create Cohort</DialogTitle>
              <DialogDescription>Add a new cohort to the platform.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cohort Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Cohort Name" {...field} />
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
                      <Textarea placeholder="Enter Cohort Description..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, 'PPP') : 'Select a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
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
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
