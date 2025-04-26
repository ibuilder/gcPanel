'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface PunchList {
  id: number;
  name: string;
  description: string;
  status: string;
}

const data: PunchList[] = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for item 1',
    status: 'Open',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for item 2',
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description for item 3',
    status: 'Closed',
  },
];

export default function PunchListSection() {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Punch List</h1>
        <Link href={'/field/punchlist/form'}>
          <Button>Add Item</Button>
        </Link>
      </div>
      <div className="my-4">
        <Input type="search" placeholder="Search..." />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-right">{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}