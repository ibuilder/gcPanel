'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarProvider';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface SidebarRailProps extends React.ComponentProps<'button'> {}

const SidebarRail = forwardRef<HTMLButtonElement, SidebarRailProps>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        aria-label="Toggle Sidebar"
        className={cn(
          'group relative flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/60 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring',
          className
        )}
        onClick={toggleSidebar}
        {...props}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);

SidebarRail.displayName = 'SidebarRail';

export { SidebarRail };
