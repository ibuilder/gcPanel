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

export default function TransmittalsPage() {
  const [transmittals, setTransmittals] = useState([
    {id: 1, title: 'Transmittal 1', description: 'Description 1'},
    {id: 2, title: 'Transmittal 2', description: 'Description 2'},
  ]);

  const handleCreateTransmittal = () => {
    // Navigate to the Transmittal form page
    window.location.href = '/engineering/transmittals/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Transmittals</h1>
        <Button onClick={handleCreateTransmittal}>Create Transmittal</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {transmittals.map(transmittal => (
          <Card key={transmittal.id}>
            <CardHeader>
              <CardTitle>{transmittal.title}</CardTitle>
              <CardDescription>Transmittal</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{transmittal.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
