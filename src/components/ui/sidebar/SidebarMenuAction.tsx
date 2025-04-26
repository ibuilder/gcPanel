'use client';

import React, {forwardRef} from 'react';
import {cn} from '@/lib/utils';

interface SidebarMenuActionProps extends React.ComponentProps<'span'> {}

const SidebarMenuActionComponent = forwardRef<
  HTMLSpanElement,
  SidebarMenuActionProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      data-sidebar="menu-action"
      className={cn('absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100', className)}
      {...props}
    />
  );
});

SidebarMenuActionComponent.displayName = 'SidebarMenuAction';

export {SidebarMenuActionComponent as SidebarMenuAction};
