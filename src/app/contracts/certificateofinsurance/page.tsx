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

export default function CertificatesOfInsurancePage() {
  const [certificates, setCertificates] = useState([
    {id: 1, title: 'Certificate 1', description: 'Description 1'},
    {id: 2, title: 'Certificate 2', description: 'Description 2'},
  ]);

  const handleCreateCertificate = () => {
    // Navigate to the Certificate form page
    window.location.href = '/contracts/certificateofinsurance/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Certificates of Insurance</h1>
        <Button onClick={handleCreateCertificate}>Create Certificate</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {certificates.map(certificate => (
          <Card key={certificate.id}>
            <CardHeader>
              <CardTitle>{certificate.title}</CardTitle>
              <CardDescription>Certificate of Insurance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{certificate.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
