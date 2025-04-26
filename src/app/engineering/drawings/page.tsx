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

export default function DrawingsPage() {
  const [drawings, setDrawings] = useState([
    {id: 1, title: 'Drawing 1', description: 'Description 1'},
    {id: 2, title: 'Drawing 2', description: 'Description 2'},
  ]);

  const handleCreateDrawing = () => {
    // Navigate to the Drawing form page
    window.location.href = '/engineering/drawings/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Drawings</h1>
        <Button onClick={handleCreateDrawing}>Create Drawing</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {drawings.map(drawing => (
          <Card key={drawing.id}>
            <CardHeader>
              <CardTitle>{drawing.title}</CardTitle>
              <CardDescription>Drawing</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{drawing.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
