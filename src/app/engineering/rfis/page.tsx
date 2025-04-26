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

export default function RFIsPage() {
  const [rfis, setRFIs] = useState([
    {id: 1, title: 'RFI 1', description: 'Description 1'},
    {id: 2, title: 'RFI 2', description: 'Description 2'},
  ]);

  const handleCreateRFI = () => {
    // Navigate to the RFI form page
    window.location.href = '/engineering/rfis/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Request for Information (RFIs)</h1>
        <Button onClick={handleCreateRFI}>Create RFI</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {rfis.map(rfi => (
          <Card key={rfi.id}>
            <CardHeader>
              <CardTitle>{rfi.title}</CardTitle>
              <CardDescription>Request for Information</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{rfi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
