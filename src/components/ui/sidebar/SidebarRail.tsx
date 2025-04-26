'use client';

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "./SidebarProvider";

interface SidebarRailProps extends React.ComponentProps<"button"> {}

const SidebarRail = forwardRef<HTMLButtonElement, SidebarRailProps>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="trigger"
        className={cn(
          "group relative flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/60 outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className
        )}
        onClick={toggleSidebar}
        {...props}
      />
    );
  }
);

SidebarRail.displayName = "SidebarRail";

export { SidebarRail };
