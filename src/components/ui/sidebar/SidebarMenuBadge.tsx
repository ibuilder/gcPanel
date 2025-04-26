'use client';

import React, {forwardRef} from 'react';
import {cn} from '@/lib/utils';

interface SidebarMenuBadgeProps extends React.ComponentProps<'span'> {}

const SidebarMenuBadge = forwardRef<
  HTMLSpanElement,
  SidebarMenuBadgeProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      data-sidebar="menu-badge"
      className={cn('ml-auto', className)}
      {...props}
    />
  );
});

SidebarMenuBadge.displayName = 'SidebarMenuBadge';

export {SidebarMenuBadge};
