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

export default function DailyReportsPage() {
  const [reports, setReports] = useState([
    {id: 1, title: 'Report 1', description: 'Description 1'},
    {id: 2, title: 'Report 2', description: 'Description 2'},
  ]);

  const handleCreateReport = () => {
    // Navigate to the Report form page
    window.location.href = '/field/dailyreports/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Daily Reports</h1>
        <Button onClick={handleCreateReport}>Create Report</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {reports.map(report => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>Daily Report</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{report.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
