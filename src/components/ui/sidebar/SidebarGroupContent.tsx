'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SidebarGroupContentProps extends React.ComponentProps<'div'> {}

const SidebarGroupContentComponent = forwardRef<
  HTMLDivElement,
  SidebarGroupContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn('flex flex-col py-1 space-y-1', className)}
      {...props}
    />
  );
});

SidebarGroupContentComponent.displayName = 'SidebarGroupContentComponent';

export { SidebarGroupContentComponent as SidebarGroupContent };
