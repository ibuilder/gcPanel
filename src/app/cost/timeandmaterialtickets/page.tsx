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

export default function TimeAndMaterialsTicketsPage() {
  const [tickets, setTickets] = useState([
    {id: 1, title: 'Ticket 1', description: 'Description 1'},
    {id: 2, title: 'Ticket 2', description: 'Description 2'},
  ]);

  const handleCreateTicket = () => {
    // Navigate to the Ticket form page
    window.location.href = '/cost/timeandmaterialtickets/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Time and Materials Tickets</h1>
        <Button onClick={handleCreateTicket}>Create Ticket</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {tickets.map(ticket => (
          <Card key={ticket.id}>
            <CardHeader>
              <CardTitle>{ticket.title}</CardTitle>
              <CardDescription>Time and Materials Ticket</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{ticket.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
