tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

const data = [
  {
    id: 'm5gr84i9',
    name: 'Construction',
    division: 'General Conditions',
    description: 'This is a test cost code.',
  },
  {
    id: '3u1reuv4',
    name: 'Labor',
    division: 'Concrete',
    description: 'This is a test cost code.',
  },
  {
    id: 'derv1ws0',
    name: 'Materials',
    division: 'Masonry',
    description: 'This is a test cost code.',
  },
  {
    id: 'o8hyj2yo',
    name: 'Equipment',
    division: 'Metals',
    description: 'This is a test cost code.',
  },
  {
    id: '091g06a0',
    name: 'Subcontracts',
    division: 'Wood and Plastics',
    description: 'This is a test cost code.',
  },
  {
    id: 'w4az9x6s',
    name: 'Contingency',
    division: 'Thermal and Moisture Protection',
    description: 'This is a test cost code.',
  },
  {
    id: 'f2g7e3n1',
    name: 'Overhead',
    division: 'Doors and Windows',
    description: 'This is a test cost code.',
  },
  {
    id: 'r9u3c2p5',
    name: 'Profit',
    division: 'Finishes',
    description: 'This is a test cost code.',
  },
  {
    id: 'l7b1k8x2',
    name: 'Insurance',
    division: 'Specialties',
    description: 'This is a test cost code.',
  },
];

interface CostCodesSectionProps extends React.ComponentProps<'div'> {}

const CostCodesSection = React.forwardRef<
  HTMLDivElement,
  CostCodesSectionProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('space-y-6 p-4', className)}
      {...props}
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-medium">Cost Codes</h4>
        <Button size="sm" className="gap-2">
          <Plus className="size-4" />
          New
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
});

CostCodesSection.displayName = 'CostCodesSection';

export default CostCodesSection;