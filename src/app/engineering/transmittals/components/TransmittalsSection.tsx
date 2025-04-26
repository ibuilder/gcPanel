tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { TransmittalsData } from './data';
import { Typography } from '@/components/ui/typography';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface TransmittalsSectionProps extends React.ComponentProps<'div'> {}

const TransmittalsSection = React.forwardRef<HTMLDivElement, TransmittalsSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Transmittals</CardTitle>
          <CardDescription>List of all Transmittals</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <Typography variant="h4">Transmittals</Typography>
            <Link href="transmittals/form">
              <Button>Add Transmittal</Button>
            </Link>
          </div>
          <Separator />
          <div className="mt-4">
            <DataTable columns={columns} data={TransmittalsData} />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button variant="link" size="sm">
            View All
          </Button>
        </CardFooter>
      </Card>
    );
  }
);

TransmittalsSection.displayName = 'TransmittalsSection';

export default TransmittalsSection;