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

export default function SubcontractsPage() {
  const [contracts, setContracts] = useState([
    {id: 1, title: 'Contract 1', description: 'Description 1'},
    {id: 2, title: 'Contract 2', description: 'Description 2'},
  ]);

  const handleCreateContract = () => {
    // Navigate to the Contract form page
    window.location.href = '/contracts/subcontracts/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Subcontracts</h1>
        <Button onClick={handleCreateContract}>Create Contract</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {contracts.map(contract => (
          <Card key={contract.id}>
            <CardHeader>
              <CardTitle>{contract.title}</CardTitle>
              <CardDescription>Subcontract</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{contract.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
