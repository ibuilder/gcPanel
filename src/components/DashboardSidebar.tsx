"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {useTheme} from "@/components/ThemeProvider";

const DashboardSidebar = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarTrigger/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>Document Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>AI Insights</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 rounded-md p-2 text-left text-sm outline-none transition-transform hover:bg-accent hover:text-accent-foreground"
          >
            {theme === "light" ? <Moon className="w-4 h-4"/> : <Sun className="w-4 h-4"/>}
            <span className="text-sm">{theme === "light" ? "Dark" : "Light"} mode</span>
          </button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default DashboardSidebar;
