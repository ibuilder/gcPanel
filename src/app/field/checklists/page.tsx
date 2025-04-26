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

export default function ChecklistsPage() {
  const [checklists, setChecklists] = useState([
    {id: 1, title: 'Checklist 1', description: 'Description 1'},
    {id: 2, title: 'Checklist 2', description: 'Description 2'},
  ]);

  const handleCreateChecklist = () => {
    // Navigate to the Checklist form page
    window.location.href = '/field/checklists/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Checklists</h1>
        <Button onClick={handleCreateChecklist}>Create Checklist</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {checklists.map(checklist => (
          <Card key={checklist.id}>
            <CardHeader>
              <CardTitle>{checklist.title}</CardTitle>
              <CardDescription>Checklist</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{checklist.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
