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
import {Moon, Sun, LayoutDashboard, FileText, Lightbulb } from "lucide-react";
import {useTheme} from "@/components/ThemeProvider";

const DashboardSidebar = () => {
  const {theme, setTheme} = useTheme();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="shadow-md">
        <SidebarHeader>
          <SidebarTrigger/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutDashboard className="mr-2 h-4 w-4"/>
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Documents</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Lightbulb className="mr-2 h-4 w-4"/>
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
            {theme === "light" ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
            <span className="text-sm">{theme === "light" ? "Dark" : "Light"} mode</span>
          </button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default DashboardSidebar;

