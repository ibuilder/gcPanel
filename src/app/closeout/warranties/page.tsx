'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useState} from 'react';

export default function WarrantiesPage() {
  const [warranties, setWarranties] = useState([
    {id: 1, title: 'Warranty 1', description: 'Description 1'},
    {id: 2, title: 'Warranty 2', description: 'Description 2'},
  ]);

  const handleCreateWarranty = () => {
    // Navigate to the Warranty form page
    window.location.href = '/closeout/warranties/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Warranties</h1>
        <Button onClick={handleCreateWarranty}>Create Warranty</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {warranties.map(warranty => (
          <Card key={warranty.id}>
            <CardHeader>
              <CardTitle>{warranty.title}</CardTitle>
              <CardDescription>Warranty</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{warranty.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
