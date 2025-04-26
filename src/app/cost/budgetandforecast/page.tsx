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

export default function BudgetAndForecastPage() {
  const [budgets, setBudgets] = useState([
    {id: 1, title: 'Budget 1', description: 'Description 1'},
    {id: 2, title: 'Budget 2', description: 'Description 2'},
  ]);

  const handleCreateBudget = () => {
    // Navigate to the Budget form page
    window.location.href = '/cost/budgetandforecast/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Budget and Forecast</h1>
        <Button onClick={handleCreateBudget}>Create Budget</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {budgets.map(budget => (
          <Card key={budget.id}>
            <CardHeader>
              <CardTitle>{budget.title}</CardTitle>
              <CardDescription>Budget and Forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{budget.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
