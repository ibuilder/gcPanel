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

export default function DatabaseSettingsPage() {
  return (
    <div>
      <h1>Database Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Database Settings</CardTitle>
          <CardDescription>Connect to Supabase DB</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="url">Supabase URL</Label>
              <Input type="text" id="url" placeholder="Enter Supabase URL" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="key">Supabase Key</Label>
              <Input type="text" id="key" placeholder="Enter Supabase Key" />
            </div>
            <Button className="mt-4">Connect</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
