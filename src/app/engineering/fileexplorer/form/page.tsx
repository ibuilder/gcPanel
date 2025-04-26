
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
import {useForm} from 'react-hook-form';

export default function FileFormPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log('Form submitted:', data);
    console.log('Selected file:', selectedFile);
    // Here you would typically handle the form submission,
    // such as sending the data to an API endpoint, including the file.
  };

  const handleFileChange = e => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setValue('file', file); // Set the file in the form

      // Generate a preview URL for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewURL(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewURL(null);
      }
    }
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
              <Input
                type="file"
                id="file"
                onChange={handleFileChange}
                {...register('file')}
              />
            </div>
            {previewURL && (
              <div>
                <Label>Preview:</Label>
                <img
                  src={previewURL}
                  alt="File Preview"
                  className="w-64 h-auto rounded-md"
                />
              </div>
            )}
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
