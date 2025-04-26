'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useSidebar, SIDEBAR_WIDTH_MOBILE, SIDEBAR_WIDTH_ICON } from './SidebarProvider';

interface SidebarProps extends React.ComponentProps<'div'> {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
}

const SidebarComponent = React.forwardRef<
  HTMLDivElement,
  SidebarProps
>(
  (
    {
      side = 'left',
      variant = 'sidebar',
      collapsible = 'offcanvas',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    // --- Non-collapsible Sidebar ---
    if (collapsible === 'none') {
      return (
        <div
          // Assumes --sidebar-width is set globally or via parent
          className={cn(
            'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    // --- Mobile Sidebar (using Sheet) ---
    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={{
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE, // Set width for mobile sheet
            } as React.CSSProperties}
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    // --- Desktop Collapsible Sidebar ---
    return (
      // Outer container managing state and variants via data attributes
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state} // 'expanded' or 'collapsed'
        data-collapsible={state === 'collapsed' ? collapsible : ''} // 'offcanvas' or 'icon' when collapsed
        data-variant={variant} // 'sidebar', 'floating', 'inset'
        data-side={side} // 'left' or 'right'
      >
        {/* Spacer div to push content when sidebar is visible */}
        <div
          className={cn(
            'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
            // Collapse width for offcanvas
            'group-data-[collapsible=offcanvas]:w-0',
            // Adjust rotation for right-side (visual trick for transitions/icons)
            'group-data-[side=right]:rotate-180',
            // Adjust collapsed width based on variant
            variant === 'floating' || variant === 'inset'
              ? `group-data-[collapsible=icon]:w-[calc(${SIDEBAR_WIDTH_ICON}_+_theme(spacing.4))]` // Icon + padding
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]' // Icon only width
          )}
        />
        {/* Actual Sidebar content container */}
        <div
          className={cn(
            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
            // Positioning and transition for offcanvas based on side
            side === 'left'
              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
            // Adjust width and padding/border for icon collapse based on variant
            variant === 'floating' || variant === 'inset'
              ? `p-2 group-data-[collapsible=icon]:w-[calc(${SIDEBAR_WIDTH_ICON}_+_theme(spacing.4)_+2px)]` // Icon + padding + border adjustment?
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l', // Icon width + border
            className // Allow external classes
          )}
        >
          {/* Inner container for background, border, shadow */}
          <div
            data-sidebar="sidebar"
            className={cn(
              'flex h-full w-full flex-col bg-sidebar',
              // Apply floating styles
              'group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

SidebarComponent.displayName = 'SidebarComponent';

export { SidebarComponent as Sidebar };