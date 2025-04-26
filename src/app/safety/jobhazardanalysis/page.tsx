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

export default function JobHazardAnalysisPage() {
  const [jhas, setJhas] = useState([
    {id: 1, title: 'JHA 1', description: 'Description 1'},
    {id: 2, title: 'JHA 2', description: 'Description 2'},
  ]);

  const handleCreateJHA = () => {
    // Navigate to the JHA form page
    window.location.href = '/safety/jobhazardanalysis/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Job Hazard Analysis (JHAs)</h1>
        <Button onClick={handleCreateJHA}>Create JHA</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {jhas.map(jha => (
          <Card key={jha.id}>
            <CardHeader>
              <CardTitle>{jha.title}</CardTitle>
              <CardDescription>Job Hazard Analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{jha.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
