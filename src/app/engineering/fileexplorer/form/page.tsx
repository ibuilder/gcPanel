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

export default function FileFormPage() {
  return (
    <div>
      <h1>Upload File</h1>
      <Card>
        <CardHeader>
          <CardTitle>File Upload Form</CardTitle>
          <CardDescription>Upload a new File</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">File Name</Label>
              <Input type="text" id="name" placeholder="Enter file name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="file">Choose File</Label>
              <Input type="file" id="file" />
            </div>
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
