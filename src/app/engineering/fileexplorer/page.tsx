'use client';

import {Button} from '@/components/ui/button';
import {useState, useEffect} from 'react';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Define a type for your files
type File = {
  id: number;
  name: string;
  type: string;
  size: string;
  lastModified: string;
};

export default function FileExplorerPage() {
  const [files, setFiles] = useState<File[]>([
    {
      id: 1,
      name: 'Document1.pdf',
      type: 'PDF Document',
      size: '2.5 MB',
      lastModified: '2024-07-29',
    },
    {
      id: 2,
      name: 'Image2.jpg',
      type: 'JPEG Image',
      size: '1.2 MB',
      lastModified: '2024-07-28',
    },
    {
      id: 3,
      name: 'Spreadsheet3.xlsx',
      type: 'Excel Spreadsheet',
      size: '3.1 MB',
      lastModified: '2024-07-27',
    },
    {
      id: 4,
      name: 'Presentation4.pptx',
      type: 'PowerPoint Presentation',
      size: '4.2 MB',
      lastModified: '2024-07-26',
    },
    {
      id: 5,
      name: 'TextFile5.txt',
      type: 'Text File',
      size: '5 KB',
      lastModified: '2024-07-25',
    },
  ]);

  const handleCreateFile = () => {
    window.location.href = '/engineering/fileexplorer/form';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>File Explorer</h1>
        <Button onClick={handleCreateFile}>Upload File</Button>
      </div>

      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Last Modified</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map(file => (
            <TableRow key={file.id}>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.lastModified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
