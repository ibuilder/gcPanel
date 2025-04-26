'use client';

import React, {
  useEffect,
  useState,
  forwardRef,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import {
  PanelLeft,
} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {Input} from '@/components/ui/input';
import {Sheet, SheetContent} from '@/components/ui/sheet';
import {TooltipProvider, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import {Skeleton} from '@/components/ui/skeleton';
import {AriaAttributes, DOMAttributes} from 'react';
import {useTheme as useNextTheme} from 'next-themes';
import {cva, type VariantProps} from 'class-variance-authority';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isMobile;
};

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContextType = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

interface SidebarProviderProps extends React.ComponentProps<'div'> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  SidebarProviderProps
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);
    const {theme} = useNextTheme();

    const [_open, _setOpen] = useState(defaultOpen);
    const open = openProp ?? _open;

    const setOpen = useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );

    const toggleSidebar = useCallback(() => {
      return isMobile
        ? setOpenMobile(open => !open)
        : setOpen(open => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleSidebar]);

    const state = open ? 'expanded' : 'collapsed';

    const contextValue: SidebarContextType = useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          style={{
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties}
          className={cn(
            'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);

SidebarProvider.displayName = 'SidebarProvider';

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
    const {isMobile, state, openMobile, setOpenMobile} = useSidebar();

    if (collapsible === 'none') {
      return (
        <div
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

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={{
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties}
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(
            'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
            'group-data-[collapsible=offcanvas]:w-0',
            'group-data-[side=right]:rotate-180',
            variant === 'floating' || variant === 'inset'
              ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
          )}
        />
        <div
          className={cn(
            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
            side === 'left'
              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
            variant === 'floating' || variant === 'inset'
              ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

SidebarComponent.displayName = 'SidebarComponent';

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SidebarTriggerComponent = React.forwardRef<
  HTMLButtonElement,
  SidebarTriggerProps
>(({className, onClick, ...props}, ref) => {
  const {toggleSidebar} = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn('h-7 w-7', className)}
      onClick={event => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft/>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});

SidebarTriggerComponent.displayName = 'SidebarTriggerComponent';

interface SidebarRailProps extends React.ComponentProps<'button'> {}

export const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  SidebarRailProps
>(({className, ...props}, ref) => {
  const {toggleSidebar} = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
        '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className
      )}
      {...props}
    />
  );
});

interface SidebarInsetProps extends React.ComponentProps<'main'> {}

export const SidebarInset = React.forwardRef<
  HTMLDivElement,
  SidebarInsetProps
>(({className, ...props}, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        'relative flex min-h-svh flex-1 flex-col bg-background',
        'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
        className
      )}
      {...props}
    />
  );
});

interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  SidebarInputProps
>(({className, ...props}, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        className
      )}
      {...props}
    />
  );
});

interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  SidebarHeaderProps
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});

interface SidebarFooterProps extends React.ComponentProps<'div'> {}

const SidebarFooterComponent = React.forwardRef<
  HTMLDivElement,
  SidebarFooterProps
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});

SidebarFooterComponent.displayName = 'SidebarFooterComponent';

interface SidebarSeparatorProps extends React.ComponentProps<typeof Separator> {}

export const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  SidebarSeparatorProps
>(({className, ...props}, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn('mx-2 w-auto bg-sidebar-border', className)}
      {...props}
    />
  );
});

interface SidebarContentProps extends React.ComponentProps<'div'> {}

const SidebarContentComponent = React.forwardRef<
  HTMLDivElement,
  SidebarContentProps
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden'
      )}
      {...props}
    />
  );
});

SidebarContentComponent.displayName = 'SidebarContentComponent';

interface SidebarGroupProps extends React.ComponentProps<'div'> {}

const SidebarGroupComponent = React.forwardRef<
  HTMLDivElement,
  SidebarGroupProps
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  );
});

SidebarGroupComponent.displayName = 'SidebarGroupComponent';

interface SidebarGroupLabelProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

const SidebarGroupLabelComponent = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>((props, ref) => {
  const {asChild = false, className, ...rest} = props;
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

SidebarGroupLabelComponent.displayName = 'SidebarGroupLabelComponent';

interface SidebarGroupActionProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  showOnHover?: boolean;
}

export const SidebarGroupActionComponent = React.forwardRef<
  HTMLButtonElement,
  SidebarGroupActionProps
>(({className, asChild = false, showOnHover = false, ...props}, ref) => {
  const Comp = asChild ? React.Fragment : 'button';

  return (
    <button
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        'after:absolute after:-inset-2 after:md:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        className
      )}
      {...props}
    />
  );
});

interface SidebarGroupContentProps extends React.ComponentProps<'div'> {}

export const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  SidebarGroupContentProps
>(({className, ...props}, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  );
});

interface SidebarMenuProps extends React.ComponentProps<'ul'> {}

const SidebarMenuComponent = React.forwardRef<
  HTMLUListElement,
  SidebarMenuProps
>((props, ref) => {
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

const SidebarMenuButtonComponent = React.forwardRef<
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

    return (
      <TooltipProvider>
        <TooltipTrigger asChild>
          <Comp
            ref={ref}
            data-sidebar="menu-button"
            className={cn(sidebarMenuButtonVariants({variant, size}), className)}
            onClick={handleClick}
            {...props}
          >
            {children}
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

SidebarMenuButtonComponent.displayName = 'SidebarMenuButtonComponent';

interface SidebarMenuActionProps extends React.ComponentProps<'button'> {
  asChild?: boolean;
  showOnHover?: boolean;
}

export const SidebarMenuActionComponent = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuActionProps
>(({className, asChild = false, showOnHover = false, ...props}, ref) => {
  const Comp = asChild ? React.Fragment : 'button';

  return (
    <button
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        'after:absolute after:-inset-2 after:md:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        className
      )}
      {...props}
    />
  );
});

interface SidebarMenuBadgeProps extends React.ComponentProps<'div'> {}

export const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  SidebarMenuBadgeProps
>(({className, ...props}, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none',
      'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
      className
    )}
    {...props}
  />
));

interface SidebarMenuSkeletonProps extends React.ComponentProps<'div'> {
  showIcon?: boolean;
}

export const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  SidebarMenuSkeletonProps
>(({className, showIcon = false, ...props}, ref) => {
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn('rounded-md h-8 flex gap-2 px-2 items-center', className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={{
          '--skeleton-width': width,
        } as React.CSSProperties}
      />
    </div>
  );
});

interface SidebarMenuSubProps extends React.ComponentProps<'ul'> {}

export const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  SidebarMenuSubProps
>(({className, ...props}, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      'mx-3.5 flex min-w-0 -translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className
    )}
    {...props}
  />
));

interface SidebarMenuItemProps extends React.ComponentProps<'li'> {}

export const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  SidebarMenuItemProps
>((props, ref) => <li ref={ref} {...props} />);



interface SidebarMenuSubButtonProps extends React.ComponentProps<'a'> {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
}

const SidebarMenuSubButtonComponent = React.forwardRef<
  HTMLAnchorElement,
  SidebarMenuSubButtonProps
>(({ asChild = false, size = 'md', isActive, className, ...props }, ref) => {
  const Comp = asChild ? Link : 'a';

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  );
});

SidebarMenuSubButtonComponent.displayName = 'SidebarMenuSubButtonComponent';

interface SidebarMenuSubItemProps extends React.ComponentProps<'li'> {}

export const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  SidebarMenuSubItemProps
>((props, ref) => <li ref={ref} {...props} />);

export {
  SidebarComponent as Sidebar,
  SidebarContentComponent as SidebarContent,
  SidebarFooterComponent as SidebarFooter,
  SidebarGroupComponent as SidebarGroup,
  SidebarGroupActionComponent as SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabelComponent as SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenuComponent as SidebarMenu,
  SidebarMenuActionComponent as SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButtonComponent as SidebarMenuButton,
  SidebarMenuItem as SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButtonComponent as SidebarMenuSubButton,
  SidebarMenuSubItem as SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTriggerComponent as SidebarTrigger,
  useSidebar,
};

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-active'?: boolean;
  }
}
