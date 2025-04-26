tsx
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SidebarContentProps extends React.ComponentProps<'div'> {}

const SidebarContentComponent = forwardRef<
  HTMLDivElement,
  SidebarContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...props}
    />
  );
});

SidebarContentComponent.displayName = 'SidebarContentComponent';

export { SidebarContentComponent as SidebarContent };