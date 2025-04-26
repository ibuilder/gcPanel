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

export default function CSIDivisionsPage() {
  const [divisions, setDivisions] = useState([
    {id: 1, title: 'Division 1', description: 'Description 1'},
    {id: 2, title: 'Division 2', description: 'Description 2'},
  ]);

  const handleCreateDivision = () => {
    // Navigate to the Division form page
    window.location.href = '/resources/csidivisions/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>CSI Divisions</h1>
        <Button onClick={handleCreateDivision}>Create Division</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {divisions.map(division => (
          <Card key={division.id}>
            <CardHeader>
              <CardTitle>{division.title}</CardTitle>
              <CardDescription>CSI Division</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{division.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
