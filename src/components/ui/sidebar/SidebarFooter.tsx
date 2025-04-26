tsx
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SidebarFooterProps extends React.ComponentProps<'div'> {}

const SidebarFooterComponent = forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});

SidebarFooterComponent.displayName = 'SidebarFooterComponent';

export { SidebarFooterComponent as SidebarFooter };