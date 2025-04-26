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

export default function FileExplorerPage() {
  const [files, setFiles] = useState([
    {id: 1, name: 'File 1', type: 'Document'},
    {id: 2, name: 'File 2', type: 'Image'},
  ]);

  const handleCreateFile = () => {
    // Navigate to the File form page
    window.location.href = '/engineering/fileexplorer/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>File Explorer</h1>
        <Button onClick={handleCreateFile}>Upload File</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {files.map(file => (
          <Card key={file.id}>
            <CardHeader>
              <CardTitle>{file.name}</CardTitle>
              <CardDescription>File</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Type: {file.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
