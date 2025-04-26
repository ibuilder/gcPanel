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

export default function EmployeeOrientationFormPage() {
  return (
    <div>
      <h1>Create Employee Orientation</h1>
      <Card>
        <CardHeader>
          <CardTitle>Employee Orientation Form</CardTitle>
          <CardDescription>Create a new Employee Orientation</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Enter orientation title" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                placeholder="Enter orientation description"
              />
            </div>
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
