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

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    {id: 1, title: 'User 1', description: 'Description 1'},
    {id: 2, title: 'User 2', description: 'Description 2'},
  ]);

  const handleCreateUser = () => {
    // Navigate to the User form page
    window.location.href = '/settings/usermanagement/form';
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>User Management</h1>
        <Button onClick={handleCreateUser}>Create User</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {users.map(user => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.title}</CardTitle>
              <CardDescription>User</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{user.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
