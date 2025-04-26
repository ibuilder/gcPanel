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

export default function ProjectInfoFormPage() {
  return (
    <div>
      <h1>Create Project</h1>
      <Card>
        <CardHeader>
          <CardTitle>Project Form</CardTitle>
          <CardDescription>Create a new Project</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" placeholder="Enter project title" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                placeholder="Enter project description"
              />
            </div>
            <Button className="mt-4">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
