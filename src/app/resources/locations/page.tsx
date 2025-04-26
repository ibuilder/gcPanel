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

export default function LocationsPage() {
  const [locations, setLocations] = useState([
    {id: 1, title: 'Location 1', description: 'Description 1'},
    {id: 2, title: 'Location 2', description: 'Description 2'},
  ]);

  const handleCreateLocation = () => {
    // Navigate to the Location form page
    window.location.href = '/resources/locations/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Locations</h1>
        <Button onClick={handleCreateLocation}>Create Location</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {locations.map(location => (
          <Card key={location.id}>
            <CardHeader>
              <CardTitle>{location.title}</CardTitle>
              <CardDescription>Location</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{location.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
