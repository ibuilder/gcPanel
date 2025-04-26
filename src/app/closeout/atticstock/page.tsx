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

export default function AtticStockPage() {
  const [stock, setStock] = useState([
    {id: 1, title: 'Stock 1', description: 'Description 1'},
    {id: 2, title: 'Stock 2', description: 'Description 2'},
  ]);

  const handleCreateStock = () => {
    // Navigate to the Stock form page
    window.location.href = '/closeout/atticstock/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Attic Stock</h1>
        <Button onClick={handleCreateStock}>Create Stock</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {stock.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Attic Stock Item</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
