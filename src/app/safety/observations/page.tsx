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

export default function ObservationsPage() {
  const [observations, setObservations] = useState([
    {id: 1, title: 'Observation 1', description: 'Description 1'},
    {id: 2, title: 'Observation 2', description: 'Description 2'},
  ]);

  const handleCreateObservation = () => {
    // Navigate to the Observation form page
    window.location.href = '/safety/observations/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Observations</h1>
        <Button onClick={handleCreateObservation}>Create Observation</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {observations.map(observation => (
          <Card key={observation.id}>
            <CardHeader>
              <CardTitle>{observation.title}</CardTitle>
              <CardDescription>Observation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{observation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
