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

export default function PermittingPage() {
  const [permits, setPermits] = useState([
    {id: 1, title: 'Permit 1', description: 'Description 1'},
    {id: 2, title: 'Permit 2', description: 'Description 2'},
  ]);

  const handleCreatePermit = () => {
    // Navigate to the Permit form page
    window.location.href = '/engineering/permitting/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Permitting</h1>
        <Button onClick={handleCreatePermit}>Create Permit</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {permits.map(permit => (
          <Card key={permit.id}>
            <CardHeader>
              <CardTitle>{permit.title}</CardTitle>
              <CardDescription>Permit</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{permit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
