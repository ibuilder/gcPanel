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

export default function PreTaskPlansPage() {
  const [plans, setPlans] = useState([
    {id: 1, title: 'Plan 1', description: 'Description 1'},
    {id: 2, title: 'Plan 2', description: 'Description 2'},
  ]);

  const handleCreatePlan = () => {
    // Navigate to the Plan form page
    window.location.href = '/safety/pretaskplans/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Pre-Task Plans (PTPs)</h1>
        <Button onClick={handleCreatePlan}>Create Plan</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {plans.map(plan => (
          <Card key={plan.id}>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>Pre-Task Plan</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{plan.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
