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

export default function EquipmentRatesPage() {
  const [rates, setRates] = useState([
    {id: 1, title: 'Rate 1', description: 'Description 1'},
    {id: 2, title: 'Rate 2', description: 'Description 2'},
  ]);

  const handleCreateRate = () => {
    // Navigate to the Rate form page
    window.location.href = '/resources/equipmentrates/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Equipment Rates</h1>
        <Button onClick={handleCreateRate}>Create Rate</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {rates.map(rate => (
          <Card key={rate.id}>
            <CardHeader>
              <CardTitle>{rate.title}</CardTitle>
              <CardDescription>Equipment Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{rate.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
