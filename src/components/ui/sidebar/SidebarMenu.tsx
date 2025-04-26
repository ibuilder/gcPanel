'use client';

import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react';

import {cn} from '@/lib/utils';
import {TooltipProvider, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import {Skeleton} from '@/components/ui/skeleton';
import {cva, type VariantProps} from 'class-variance-authority';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

interface SidebarMenuProps extends React.ComponentProps<'ul'> {}

export const SidebarMenu = forwardRef<
  HTMLUListElement,
  SidebarMenuProps
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  );
});

SidebarMenu.displayName = 'SidebarMenu';

export const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-foreground',
        outline:
          'border border-input bg-background hover:bg-sidebar-accent hover:text-sidebar-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
      },
      active: {
        true: 'bg-sidebar-accent text-sidebar-foreground'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface SidebarMenuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ReactNode;
  href?: string;
  description?: string;
}

export const SidebarMenuButton = forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      asChild = false,
      variant = 'default',
      size = 'default',
      tooltip,
      className,
      href,
      children,
      description,
      active,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Link : 'button';
    const router = useRouter();

    const handleClick = useCallback(() => {
      if (href) {
        router.push(href);
      }
    }, [href, router]);

    const content = (
      <>
      {children}
      {description && (
         <span className="text-xs text-muted-foreground">{description}</span>
      )}
      </>
    );

    return (
      <TooltipProvider>
        <TooltipTrigger asChild>
          <Comp
            ref={ref}
            className={cn(sidebarMenuButtonVariants({variant, size, active}), className)}
            onClick={handleClick}
            {...props}
          >
            {content}
          </Comp>
        </TooltipTrigger>
        {tooltip ? (
          <TooltipContent side="right" align="center">
            {tooltip}
          </TooltipContent>
        ) : null}
      </TooltipProvider>
    );
  }
);

SidebarMenuButton.displayName = 'SidebarMenuButton';

interface SidebarMenuSkeletonProps extends React.ComponentProps<'li'> {}

const SidebarMenuSkeleton = forwardRef<
  HTMLLIElement,
  SidebarMenuSkeletonProps
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn('flex items-center', className)}
      {...props}
    >
      <Skeleton className="h-8 w-full rounded-md" />
    </li>
  );
});

SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton';

interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

export const SidebarMenuItem = forwardRef<
  HTMLLIElement,
  SidebarMenuItemProps
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn('relative', className)}
      {...props}
    />
  );
});

SidebarMenuItem.displayName = 'SidebarMenuItem';

interface SidebarMenuSubProps extends React.ComponentProps<'ul'> {}

const SidebarMenuSub = forwardRef<
  HTMLUListElement,
  SidebarMenuSubProps
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn('flex flex-col pl-4', className)}
      {...props}
    />
  );
});

SidebarMenuSub.displayName = 'SidebarMenuSub';

interface SidebarMenuActionProps extends React.ComponentProps<'span'> {}

const SidebarMenuAction = forwardRef<
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

SidebarMenuAction.displayName = 'SidebarMenuAction';

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

interface SidebarMenuSubButtonProps extends React.ComponentProps<'button'> {}

const SidebarMenuSubButton = forwardRef<
  HTMLButtonElement,
  SidebarMenuSubButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      data-sidebar="menu-sub-button"
      className={cn('flex items-center w-full gap-2 p-2 rounded-md hover:bg-accent hover:text-foreground', className)}
      {...props}
    />
  );
});

SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';

interface SidebarMenuSubItemProps extends React.ComponentProps<'li'> {}

export const SidebarMenuSubItem = forwardRef<
  HTMLLIElement,
  SidebarMenuSubItemProps
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      data-sidebar="menu-sub-item"
      className={cn('', className)}
      {...props}
    />
  );
});

SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';
