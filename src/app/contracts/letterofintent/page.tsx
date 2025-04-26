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

export default function LettersOfIntentPage() {
  const [letters, setLetters] = useState([
    {id: 1, title: 'Letter 1', description: 'Description 1'},
    {id: 2, title: 'Letter 2', description: 'Description 2'},
  ]);

  const handleCreateLetter = () => {
    // Navigate to the Letter form page
    window.location.href = '/contracts/letterofintent/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Letters of Intent</h1>
        <Button onClick={handleCreateLetter}>Create Letter</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {letters.map(letter => (
          <Card key={letter.id}>
            <CardHeader>
              <CardTitle>{letter.title}</CardTitle>
              <CardDescription>Letter of Intent</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{letter.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
