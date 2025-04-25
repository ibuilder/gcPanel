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
import {useState, useEffect} from "react";
import { Badge } from "@/components/ui/badge";

const DashboardSidebar = () => {
  const {theme, setTheme} = useTheme();
  const [issueCount, setIssueCount] = useState(75);
  const [showBadge, setShowBadge] = useState(true);

  useEffect(() => {
    // Simulate issue processing, clear badge after a delay
    const timer = setTimeout(() => {
      setShowBadge(false);
    }, 5000); // Clear after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Sidebar collapsible="icon" className="shadow-md bg-sidebar text-sidebar-foreground">
      <SidebarHeader>
        <SidebarTrigger />
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
        <div className="flex items-center justify-between p-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center gap-2 rounded-md p-2 text-left text-sm outline-none transition-transform hover:bg-accent hover:text-accent-foreground"
          >
            {theme === "light" ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
            <span className="text-sm">{theme === "light" ? "Dark" : "Light"} mode</span>
          </button>
          {showBadge && (
            <Badge variant="destructive">
              {issueCount} Issues
            </Badge>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
