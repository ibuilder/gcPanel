'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

export const SidebarHeader = forwardRef<
  HTMLDivElement,
  SidebarHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});

SidebarHeader.displayName = 'SidebarHeader';
