tsx
import React from 'react';

export default function SettingsSection() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">Settings</h1>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col border-2 border-solid border-gray-300 p-4">
            <h2 className="text-2xl font-bold">Company Management</h2>
            <p>Manage your company settings.</p>
            <a href="/settings/companymanagement" className="mt-2 text-blue-500">Go to Company Management</a>
          </div>
          <div className="flex flex-col border-2 border-solid border-gray-300 p-4">
            <h2 className="text-2xl font-bold">User Management</h2>
            <p>Manage the users in your project.</p>
            <a href="/settings/usermanagement" className="mt-2 text-blue-500">Go to User Management</a>
          </div>
          <div className="flex flex-col border-2 border-solid border-gray-300 p-4">
            <h2 className="text-2xl font-bold">Project Info</h2>
            <p>View and edit the project info.</p>
            <a href="/settings/projectinfo" className="mt-2 text-blue-500">Go to Project Info</a>
          </div>
          <div className="flex flex-col border-2 border-solid border-gray-300 p-4">
            <h2 className="text-2xl font-bold">Database Settings</h2>
            <p>Change the database settings.</p>
            <a href="/settings/databasesettings" className="mt-2 text-blue-500">Go to Database Settings</a>
          </div>
          <div className="flex flex-col border-2 border-solid border-gray-300 p-4">
            <h2 className="text-2xl font-bold">Project Help</h2>
            <p>Get help with your project.</p>
            <a href="/settings/projecthelp" className="mt-2 text-blue-500">Go to Project Help</a>
          </div>
        </div>
      </div>
    </main>
  );
}