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

export default function PunchlistPage() {
  const [punchlistItems, setPunchlistItems] = useState([
    {id: 1, title: 'Item 1', description: 'Description 1'},
    {id: 2, title: 'Item 2', description: 'Description 2'},
  ]);

  const handleCreatePunchlistItem = () => {
    // Navigate to the Punchlist Item form page
    window.location.href = '/field/punchlist/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Punchlist</h1>
        <Button onClick={handleCreatePunchlistItem}>Create Item</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {punchlistItems.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Punchlist Item</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
