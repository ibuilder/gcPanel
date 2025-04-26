'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from './SidebarProvider';
import { Button } from '@/components/ui/button'; // Assuming Button is imported correctly
import { Menu } from 'lucide-react';

// Extend Button props for better type safety if passing Button-specific props
interface SidebarRailProps extends React.ComponentProps<typeof Button> {}

const SidebarRail = forwardRef<HTMLButtonElement, SidebarRailProps>(
  ({ className, variant = "ghost", size = "icon", ...props }, ref) => { // Default variant/size can be set here or rely on Button's defaults
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        variant={variant} // Use passed or default variant
        size={size}       // Use passed or default size
        aria-label="Toggle Sidebar"
        className={cn(
          // Base styles - consider if Button component already provides some of these
          'group relative flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/60 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring',
          className // Allow overriding/extending classes
        )}
        onClick={toggleSidebar}
        {...props} // Pass remaining props to Button
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);

SidebarRail.displayName = 'SidebarRail';

export { SidebarRail };
