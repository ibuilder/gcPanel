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

const SidebarMenu = forwardRef<
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
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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
        lg: 'h-12 text-sm',
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

export const SidebarMenuSubItemComponent = forwardRef<
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

SidebarMenuSubItemComponent.displayName = 'SidebarMenuSubItemComponent';

export {SidebarMenu, SidebarMenuSkeleton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItemComponent as SidebarMenuSubItem}
