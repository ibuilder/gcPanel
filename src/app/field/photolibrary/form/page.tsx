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

export default function PhotoFormPage() {
  return (
    <div>
      <h1>Add Photo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Photo Form</CardTitle>
          <CardDescription>Add a new Photo</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Enter photo title" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="file">Choose Photo</Label>
              <Input type="file" id="file" />
            </div>
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
