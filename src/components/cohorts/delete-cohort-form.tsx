'use client'

import React from 'react'

import { deleteCohort } from '@/actions/cohorts/deleteCohort'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import type { Cohort } from './cohort.type'

interface DeleteCohortFormProps {
  cohort: Cohort
  isOpen: boolean
  onClose: () => void
}

export default function DeleteCohortForm({ isOpen, cohort, onClose }: DeleteCohortFormProps) {
  const [isPending, startTransition] = React.useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      deleteCohort(cohort.id).then((data) => {
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
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Cohort</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this cohort? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 border rounded">
          <p className="font-medium">{cohort.name}</p>
          <p className="text-sm text-muted-foreground">{cohort.description}</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="text-white"
            onClick={handleDelete}
            loading={isPending}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
