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

export default function SpecificationsPage() {
  const [specifications, setSpecifications] = useState([
    {id: 1, title: 'Specification 1', description: 'Description 1'},
    {id: 2, title: 'Specification 2', description: 'Description 2'},
  ]);

  const handleCreateSpecification = () => {
    // Navigate to the Specification form page
    window.location.href = '/engineering/specifications/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Specifications</h1>
        <Button onClick={handleCreateSpecification}>Create Specification</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {specifications.map(specification => (
          <Card key={specification.id}>
            <CardHeader>
              <CardTitle>{specification.title}</CardTitle>
              <CardDescription>Specification</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{specification.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
