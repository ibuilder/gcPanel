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

export default function ChangeOrdersPage() {
  const [orders, setOrders] = useState([
    {id: 1, title: 'Order 1', description: 'Description 1'},
    {id: 2, title: 'Order 2', description: 'Description 2'},
  ]);

  const handleCreateOrder = () => {
    // Navigate to the Order form page
    window.location.href = '/cost/changeorders/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Change Orders</h1>
        <Button onClick={handleCreateOrder}>Create Order</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {orders.map(order => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>{order.title}</CardTitle>
              <CardDescription>Change Order</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{order.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
