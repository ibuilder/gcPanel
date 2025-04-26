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

const SidebarMenuComponent = forwardRef<
  HTMLUListElement,
  SidebarMenuProps
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1')}
      {...props}
    />
  );
});

SidebarMenuComponent.displayName = 'SidebarMenuComponent';

export const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'border border-input bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
      },
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
}

const SidebarMenuButtonComponent = forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = 'default',
      size = 'default',
      tooltip,
      className,
      href,
      children,
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
      <Comp
        ref={ref}
        className={cn(sidebarMenuButtonVariants({variant, size}), className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Comp>
    );

    return (
      <TooltipProvider>
        <TooltipTrigger asChild>
          {content}
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

SidebarMenuButtonComponent.displayName = 'SidebarMenuButtonComponent';

interface SidebarMenuSkeletonProps extends React.ComponentProps<'li'> {}

const SidebarMenuSkeletonComponent = forwardRef<
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

SidebarMenuSkeletonComponent.displayName = 'SidebarMenuSkeletonComponent';

interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

const SidebarMenuItemComponent = forwardRef<
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

SidebarMenuItemComponent.displayName = 'SidebarMenuItemComponent';

interface SidebarMenuSubProps extends React.ComponentProps<'ul'> {}

const SidebarMenuSubComponent = forwardRef<
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

SidebarMenuSubComponent.displayName = 'SidebarMenuSubComponent';

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

SidebarMenuActionComponent.displayName = 'SidebarMenuActionComponent';

interface SidebarMenuBadgeProps extends React.ComponentProps<'span'> {}

const SidebarMenuBadgeComponent = forwardRef<
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

SidebarMenuBadgeComponent.displayName = 'SidebarMenuBadgeComponent';

interface SidebarMenuSubButtonProps extends React.ComponentProps<'button'> {}

const SidebarMenuSubButtonComponent = forwardRef<
  HTMLButtonElement,
  SidebarMenuSubButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      data-sidebar="menu-sub-button"
      className={cn('flex items-center w-full gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground', className)}
      {...props}
    />
  );
});

SidebarMenuSubButtonComponent.displayName = 'SidebarMenuSubButtonComponent';

interface SidebarMenuSubItemProps extends React.ComponentProps<'li'> {}

const SidebarMenuSubItemComponent = forwardRef<
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

export {
  SidebarMenuComponent as SidebarMenu,
  SidebarMenuActionComponent as SidebarMenuAction,
  SidebarMenuBadgeComponent as SidebarMenuBadge,
  SidebarMenuButtonComponent as SidebarMenuButton,
  SidebarMenuItemComponent as SidebarMenuItem,
  SidebarMenuSkeletonComponent as SidebarMenuSkeleton,
  SidebarMenuSubComponent as SidebarMenuSub,
  SidebarMenuSubButtonComponent as SidebarMenuSubButton,
  SidebarMenuSubItemComponent as SidebarMenuSubItem,
};
