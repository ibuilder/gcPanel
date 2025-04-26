'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {useState} from 'react';

export default function ModuleStatisticsPage() {
  const [statistics, setStatistics] = useState([
    {module: 'RFIs', count: 10},
    {module: 'Submittals', count: 5},
  ]);

  const handleExportPDF = () => {
    // Implement PDF export logic
    console.log('Exporting to PDF');
  };

  const handleExportCSV = () => {
    // Implement CSV export logic
    console.log('Exporting to CSV');
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Module Statistics</h1>
        <div>
          <Button onClick={handleExportPDF}>Export PDF</Button>
          <Button onClick={handleExportCSV}>Export CSV</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {statistics.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{stat.module}</CardTitle>
              <CardDescription>Module Statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Count: {stat.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
