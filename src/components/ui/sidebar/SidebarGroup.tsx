'use client';
import React from 'react';
import { cn } from '@/lib/utils';


interface SidebarGroupProps extends React.ComponentProps<'div'> {}

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  SidebarGroupProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  );
});

SidebarGroup.displayName = 'SidebarGroup';

interface SidebarGroupLabelProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

export const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>((props, ref) => {
  const { asChild = false, className, ...rest } = props;
  const Comp = asChild ? React.Fragment : 'div';

  return (
    <Comp
      ref={ref}
      className={cn(
        'duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className
      )}
      {...rest}
    />
  );
});

SidebarGroupLabel.displayName = 'SidebarGroupLabel';

interface SidebarGroupActionProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  showOnHover?: boolean;
}

export const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  SidebarGroupActionProps
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : 'button';
  return (
    <Comp ref={ref} className={cn("group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:-mt-8 duration-200 relative flex w-full cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-medium text-sidebar-foreground/80 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 hover:bg-sidebar-accent hover:text-sidebar-foreground",showOnHover && "group-hover/sidebar-wrapper:opacity-100", className)} {...props} />
  );
});

SidebarGroupAction.displayName = "SidebarGroupAction";
