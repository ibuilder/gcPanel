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

export default function OandMManualsPage() {
  const [manuals, setManuals] = useState([
    {id: 1, title: 'Manual 1', description: 'Description 1'},
    {id: 2, title: 'Manual 2', description: 'Description 2'},
  ]);

  const handleCreateManual = () => {
    // Navigate to the Manual form page
    window.location.href = '/closeout/oandmmanuals/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>O&amp;M Manuals</h1>
        <Button onClick={handleCreateManual}>Create Manual</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {manuals.map(manual => (
          <Card key={manual.id}>
            <CardHeader>
              <CardTitle>{manual.title}</CardTitle>
              <CardDescription>O&amp;M Manual</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{manual.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
