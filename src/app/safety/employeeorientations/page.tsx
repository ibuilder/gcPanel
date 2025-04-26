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

export default function EmployeeOrientationsPage() {
  const [orientations, setOrientations] = useState([
    {id: 1, title: 'Orientation 1', description: 'Description 1'},
    {id: 2, title: 'Orientation 2', description: 'Description 2'},
  ]);

  const handleCreateOrientation = () => {
    // Navigate to the Orientation form page
    window.location.href = '/safety/employeeorientations/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Employee Orientations</h1>
        <Button onClick={handleCreateOrientation}>Create Orientation</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {orientations.map(orientation => (
          <Card key={orientation.id}>
            <CardHeader>
              <CardTitle>{orientation.title}</CardTitle>
              <CardDescription>Employee Orientation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{orientation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
