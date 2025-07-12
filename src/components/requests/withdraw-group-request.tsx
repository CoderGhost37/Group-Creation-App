'use client'
import { withdrawJoinGroupRequest } from '@/actions/request/withdrawJoinGroupRequest'
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
import React from 'react'
import { toast } from 'sonner'

export function WithdrawGroupRequestForm({ requestId }: { requestId: string }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  function handleClick() {
    startTransition(() => {
      withdrawJoinGroupRequest(requestId).then((data) => {
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
        <Button variant="outline" className="w-full" onClick={() => setIsOpen(true)}>
          Withdraw Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Withdraw Group Join Request</DialogTitle>
          <DialogDescription>
            Are you sure you want to withdraw your request to join this group?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleClick} loading={isPending}>
            Withdraw Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
