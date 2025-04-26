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

export default function PhotoLibraryPage() {
  const [photos, setPhotos] = useState([
    {id: 1, title: 'Photo 1', description: 'Description 1'},
    {id: 2, title: 'Photo 2', description: 'Description 2'},
  ]);

  const handleCreatePhoto = () => {
    // Navigate to the Photo form page
    window.location.href = '/field/photolibrary/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Photo Library</h1>
        <Button onClick={handleCreatePhoto}>Add Photo</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {photos.map(photo => (
          <Card key={photo.id}>
            <CardHeader>
              <CardTitle>{photo.title}</CardTitle>
              <CardDescription>Photo</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{photo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
