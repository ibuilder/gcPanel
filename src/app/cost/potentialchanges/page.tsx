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

export default function PotentialChangesPage() {
  const [changes, setChanges] = useState([
    {id: 1, title: 'Change 1', description: 'Description 1'},
    {id: 2, title: 'Change 2', description: 'Description 2'},
  ]);

  const handleCreateChange = () => {
    // Navigate to the Change form page
    window.location.href = '/cost/potentialchanges/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Potential Changes</h1>
        <Button onClick={handleCreateChange}>Create Change</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {changes.map(change => (
          <Card key={change.id}>
            <CardHeader>
              <CardTitle>{change.title}</CardTitle>
              <CardDescription>Potential Change</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{change.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
