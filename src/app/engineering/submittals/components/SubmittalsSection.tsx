'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SubmittalsSectionProps {}

export default function SubmittalsSection({}: SubmittalsSectionProps) {
  const tableData = [
    {
      id: '1',
      name: 'Submittal 1',
      date: '2023-01-01',
    },
    {
      id: '2',
      name: 'Submittal 2',
      date: '2023-01-02',
    },
    {
      id: '3',
      name: 'Submittal 3',
      date: '2023-01-03',
    },
  ];

  return (
    <Card className={cn('col-span-1 row-span-1 flex flex-col')}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Submittals</CardTitle>
          <Button asChild size="sm">
            <Link href="/engineering/submittals/form">
              <Plus className="mr-2 size-4" />
              Add
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.id} className="hover:cursor-pointer">
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="flex justify-end">
                  <Link
                    href={`/engineering/submittals/form?id=${item.id}`}
                    className="hover:underline"
                  >
                    <ChevronRight className="size-4" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}