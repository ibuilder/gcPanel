import React, {forwardRef} from 'react';
import {cn} from "@/lib/utils";
import {useSidebar} from "./SidebarProvider";
import {Button} from "@/components/ui/button";
import {PanelLeft} from "lucide-react";

interface SidebarTriggerProps extends React.ComponentProps<typeof Button> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SidebarTriggerComponent = forwardRef<
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

export {SidebarTriggerComponent as SidebarTrigger}