'use client'

import { format } from 'date-fns'
import { MoreHorizontal, Plus, Search } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CohortForm } from './cohort-form'
import type { Cohort } from './cohort.type'
import { DeleteCohortForm } from './delete-cohort-form'

export function Cohorts({ cohorts }: { cohorts: Cohort[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedCohort, setSelectedCohort] = useState<any>(null)

  // Filter cohorts based on search query
  const filteredCohorts = cohorts.filter(
    (cohort) =>
      cohort.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cohort.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEdit = (cohort: Cohort) => {
    setSelectedCohort(cohort)
    setIsEditDialogOpen(true)
  }

  const handleDelete = (cohort: Cohort) => {
    setSelectedCohort(cohort)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Cohorts</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Cohort
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search cohorts..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead className="w-[60px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCohorts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No cohorts found.
                </TableCell>
              </TableRow>
            ) : (
              filteredCohorts.map((cohort) => (
                <TableRow key={cohort.id}>
                  <TableCell className="font-medium">{cohort.name}</TableCell>
                  <TableCell className="hidden max-w-xs truncate md:table-cell">
                    {cohort.description}
                  </TableCell>
                  <TableCell>{format(cohort.startDate, 'MMM d, yyyy')}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(cohort)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(cohort)}>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create Cohort Dialog */}
      {isCreateDialogOpen && (
        <CohortForm isOpen={isCreateDialogOpen} onClose={() => setIsCreateDialogOpen(false)} />
      )}

      {/* Edit Cohort Dialog */}
      {isEditDialogOpen && (
        <CohortForm
          cohort={selectedCohort}
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
        />
      )}

      {/* Delete Cohort Dialog */}
      {isDeleteDialogOpen && (
        <DeleteCohortForm
          isOpen={isDeleteDialogOpen}
          cohort={selectedCohort}
          onClose={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </div>
  )
}
