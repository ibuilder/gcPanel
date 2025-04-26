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

export default function SchedulePage() {
  const [schedules, setSchedules] = useState([
    {id: 1, title: 'Schedule 1', description: 'Description 1'},
    {id: 2, title: 'Schedule 2', description: 'Description 2'},
  ]);

  const handleCreateSchedule = () => {
    // Navigate to the Schedule form page
    window.location.href = '/field/schedule/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Schedule</h1>
        <Button onClick={handleCreateSchedule}>Create Schedule</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {schedules.map(schedule => (
          <Card key={schedule.id}>
            <CardHeader>
              <CardTitle>{schedule.title}</CardTitle>
              <CardDescription>Schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{schedule.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
