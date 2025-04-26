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

export default function ProfessionalServiceAgreementsPage() {
  const [agreements, setAgreements] = useState([
    {id: 1, title: 'Agreement 1', description: 'Description 1'},
    {id: 2, title: 'Agreement 2', description: 'Description 2'},
  ]);

  const handleCreateAgreement = () => {
    // Navigate to the Agreement form page
    window.location.href = '/contracts/professionalserviceagreement/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Professional Service Agreements</h1>
        <Button onClick={handleCreateAgreement}>Create Agreement</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {agreements.map(agreement => (
          <Card key={agreement.id}>
            <CardHeader>
              <CardTitle>{agreement.title}</CardTitle>
              <CardDescription>Professional Service Agreement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{agreement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
