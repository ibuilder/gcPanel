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

export default function ProjectInfoPage() {
  const [projects, setProjects] = useState([
    {id: 1, title: 'Project 1', description: 'Description 1'},
    {id: 2, title: 'Project 2', description: 'Description 2'},
  ]);

  const handleCreateProject = () => {
    // Navigate to the Project form page
    window.location.href = '/settings/projectinfo/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Project Info</h1>
        <Button onClick={handleCreateProject}>Create Project</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {projects.map(project => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>Project</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
