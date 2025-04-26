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
import {useForm} from 'react-hook-form';

export default function FileFormPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log('Form submitted:', data);
    // Here you would typically handle the form submission,
    // such as sending the data to an API endpoint.
  };

  return (
    <div>
      <h1>Upload File</h1>
      <Card>
        <CardHeader>
          <CardTitle>File Upload Form</CardTitle>
          <CardDescription>Upload a new File</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">File Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter file name"
                {...register('name', {required: 'Name is required'})}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file">Choose File</Label>
              <Input type="file" id="file" {...register('file')} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
