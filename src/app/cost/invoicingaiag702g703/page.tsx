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

export default function InvoicingPage() {
  const [invoices, setInvoices] = useState([
    {id: 1, title: 'Invoice 1', description: 'Description 1'},
    {id: 2, title: 'Invoice 2', description: 'Description 2'},
  ]);

  const handleCreateInvoice = () => {
    // Navigate to the Invoice form page
    window.location.href = '/cost/invoicingaiag702g703/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Invoicing (AIA G702/G703)</h1>
        <Button onClick={handleCreateInvoice}>Create Invoice</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {invoices.map(invoice => (
          <Card key={invoice.id}>
            <CardHeader>
              <CardTitle>{invoice.title}</CardTitle>
              <CardDescription>Invoice</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{invoice.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
