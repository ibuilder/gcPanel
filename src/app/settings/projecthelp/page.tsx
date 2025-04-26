'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectHelpPage() {
  return (
    <div>
      <h1>Project Help</h1>
      <Card>
        <CardHeader>
          <CardTitle>Project Help</CardTitle>
          <CardDescription>Project Help and Documentation</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This section provides help and documentation for the project.</p>
        </CardContent>
      </Card>
    </div>
  );
}
