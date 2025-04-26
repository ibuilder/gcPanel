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

export default function InvoiceFormPage() {
  return (
    <div>
      <h1>Create Invoice</h1>
      <Card>
        <CardHeader>
          <CardTitle>Invoice Form</CardTitle>
          <CardDescription>Create a new Invoice</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Enter invoice title" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                placeholder="Enter invoice description"
              />
            </div>
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
