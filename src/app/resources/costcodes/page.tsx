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

export default function CostCodesPage() {
  const [codes, setCodes] = useState([
    {id: 1, title: 'Code 1', description: 'Description 1'},
    {id: 2, title: 'Code 2', description: 'Description 2'},
  ]);

  const handleCreateCode = () => {
    // Navigate to the Code form page
    window.location.href = '/resources/costcodes/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Cost Codes</h1>
        <Button onClick={handleCreateCode}>Create Code</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {codes.map(code => (
          <Card key={code.id}>
            <CardHeader>
              <CardTitle>{code.title}</CardTitle>
              <CardDescription>Cost Code</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{code.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
