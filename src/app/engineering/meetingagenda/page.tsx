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

export default function MeetingAgendaPage() {
  const [meetings, setMeetings] = useState([
    {id: 1, title: 'Meeting 1', description: 'Description 1'},
    {id: 2, title: 'Meeting 2', description: 'Description 2'},
  ]);

  const handleCreateMeeting = () => {
    // Navigate to the Meeting form page
    window.location.href = '/engineering/meetingagenda/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Meeting Agenda/Minutes</h1>
        <Button onClick={handleCreateMeeting}>Create Meeting</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {meetings.map(meeting => (
          <Card key={meeting.id}>
            <CardHeader>
              <CardTitle>{meeting.title}</CardTitle>
              <CardDescription>Meeting</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{meeting.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
