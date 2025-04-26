tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { SidebarGroup, SidebarGroupLabel, SidebarGroupAction } from '@/components/ui/sidebar';
import { PlusIcon, PencilIcon, TrashIcon } from '@radix-ui/react-icons';

export default function PermittingSection() {
  return (
    <div className="flex h-full flex-col p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Permitting</h1>
      </div>
      <div className="flex w-full items-center justify-center p-4">
        <div className="w-full">
          <SidebarGroup>
            <SidebarGroupLabel>Actions</SidebarGroupLabel>
            <SidebarGroupAction href="./form" className="justify-start">
              <PlusIcon className="mr-2 h-4 w-4" />
              Add
            </SidebarGroupAction>
          </SidebarGroup>
        </div>
      </div>
    </div>
  );
}