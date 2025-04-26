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

export default function SubmittalsPage() {
  const [submittals, setSubmittals] = useState([
    {id: 1, title: 'Submittal 1', description: 'Description 1'},
    {id: 2, title: 'Submittal 2', description: 'Description 2'},
  ]);

  const handleCreateSubmittal = () => {
    // Navigate to the Submittal form page
    window.location.href = '/engineering/submittals/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Submittals</h1>
        <Button onClick={handleCreateSubmittal}>Create Submittal</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {submittals.map(submittal => (
          <Card key={submittal.id}>
            <CardHeader>
              <CardTitle>{submittal.title}</CardTitle>
              <CardDescription>Submittal</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{submittal.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
