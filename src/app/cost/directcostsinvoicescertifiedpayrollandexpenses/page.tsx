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

export default function DirectCostsPage() {
  const [costs, setCosts] = useState([
    {id: 1, title: 'Cost 1', description: 'Description 1'},
    {id: 2, title: 'Cost 2', description: 'Description 2'},
  ]);

  const handleCreateCost = () => {
    // Navigate to the Cost form page
    window.location.href = '/cost/directcostsinvoicescertifiedpayrollandexpenses/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Direct Costs</h1>
        <Button onClick={handleCreateCost}>Create Cost</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {costs.map(cost => (
          <Card key={cost.id}>
            <CardHeader>
              <CardTitle>{cost.title}</CardTitle>
              <CardDescription>Direct Cost</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{cost.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
