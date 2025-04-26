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

export default function CompanyManagementPage() {
  const [companies, setCompanies] = useState([
    {id: 1, title: 'Company 1', description: 'Description 1'},
    {id: 2, title: 'Company 2', description: 'Description 2'},
  ]);

  const handleCreateCompany = () => {
    // Navigate to the Company form page
    window.location.href = '/settings/companymanagement/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Company Management</h1>
        <Button onClick={handleCreateCompany}>Create Company</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {companies.map(company => (
          <Card key={company.id}>
            <CardHeader>
              <CardTitle>{company.title}</CardTitle>
              <CardDescription>Company</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{company.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
