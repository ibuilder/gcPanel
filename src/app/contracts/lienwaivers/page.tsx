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

export default function LienWaiversPage() {
  const [waivers, setWaivers] = useState([
    {id: 1, title: 'Waiver 1', description: 'Description 1'},
    {id: 2, title: 'Waiver 2', description: 'Description 2'},
  ]);

  const handleCreateWaiver = () => {
    // Navigate to the Waiver form page
    window.location.href = '/contracts/lienwaivers/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Lien Waivers</h1>
        <Button onClick={handleCreateWaiver}>Create Waiver</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {waivers.map(waiver => (
          <Card key={waiver.id}>
            <CardHeader>
              <CardTitle>{waiver.title}</CardTitle>
              <CardDescription>Lien Waiver</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{waiver.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
