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
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  );
});

SidebarMenuComponent.displayName = 'SidebarMenu';

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

const SidebarMenuButtonComponent = forwardRef<
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

    const button = <Comp
      ref={ref}
      className={cn(sidebarMenuButtonVariants({ variant, size, active }), className)}
      onClick={handleClick}
      {...props}
    >{content}</Comp>

    return (
      <>
        {tooltip && (
          <TooltipTrigger asChild={asChild}>
            {button}
          </TooltipTrigger>
        )}
        {!tooltip && (
          button
        )}
        {tooltip && (
            <TooltipContent side="right" align="center">
              {tooltip}
            </TooltipContent>
        )}
      </>
    );
  }
);

SidebarMenuButtonComponent.displayName = 'SidebarMenuButton';  

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

SidebarMenuSkeletonComponent.displayName = 'SidebarMenuSkeleton';

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

SidebarMenuItemComponent.displayName = 'SidebarMenuItem';

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

SidebarMenuSubComponent.displayName = 'SidebarMenuSub';

interface SidebarMenuSubButtonProps extends React.ComponentProps<'button'> {}

const SidebarMenuSubButtonComponent = forwardRef<
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

SidebarMenuSubButtonComponent.displayName = 'SidebarMenuSubButton';

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

export {SidebarMenuComponent as SidebarMenu, SidebarMenuButtonComponent as SidebarMenuButton, SidebarMenuSkeletonComponent as SidebarMenuSkeleton, SidebarMenuItemComponent as SidebarMenuItem, SidebarMenuSubComponent as SidebarMenuSub, SidebarMenuSubButtonComponent as SidebarMenuSubButton, SidebarMenuSubItemComponent as SidebarMenuSubItem}
