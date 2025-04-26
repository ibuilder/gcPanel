'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { data } from './data';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function SpecificationsSection() {
  return (
    <div className="flex h-full w-full flex-col px-4 py-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex w-full items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Specifications
          </h1>
          <Link href={'/engineering/specifications/form'}>
            <Button size={'sm'}>
              <Plus className="mr-2 h-4 w-4" />
              Add new
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="mb-4" />
      <div className="flex w-full flex-col">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Division</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  {item.division}
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size={'sm'}>
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit</DialogTitle>
                          <DialogDescription>
                            Make changes to your specifications here. Click
                            save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="division"
                              className="text-right"
                            >
                              Division
                            </Label>
                            <Select>
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a division" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="light">
                                  Division 1
                                </SelectItem>
                                <SelectItem value="dark">
                                  Division 2
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="title"
                              className="text-right"
                            >
                              Title
                            </Label>
                            <Input
                              id="title"
                              value={item.title}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                              htmlFor="description"
                              className="text-right"
                            >
                              Description
                            </Label>
                            <Textarea
                              id="description"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant={'destructive'} size={'sm'}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to 10 of 100 entries
        </div>
        <div className="flex items-center gap-2">
          <Button size={'icon'} variant={'outline'}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size={'icon'} variant={'outline'}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}