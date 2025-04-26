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
  SidebarTrigger,
  SidebarGroupLabel, // Corrected import
} from "@/components/ui/sidebar";
import {Moon, Sun, LayoutDashboard, FileText, Lightbulb, Folder, ListChecks, ClipboardList, Calendar, Camera, Layers, ShieldCheck, Briefcase, Coins, File, Archive, Factory, MapPin, DivideCircle, PercentCircle, BadgeCheck, Settings, ChartBar } from "lucide-react";
import {useEffect, useState} from "react";
import { Badge } from "@/components/ui/badge";

const DashboardSidebar = () => {
  const theme = 'light';
  const setTheme = (newTheme: string) => {
      console.log(`Theme set to ${newTheme}`);
  };

  return (
    <Sidebar collapsible="icon" className="shadow-md bg-sidebar text-sidebar-foreground">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/">
              <LayoutDashboard className="mr-2 h-4 w-4"/>
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarGroup>
            <SidebarGroupLabel>Engineering</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/rfis">
                <FileText className="mr-2 h-4 w-4"/>
                <span>RFIs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/submittals">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Submittals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/drawings">
                <Layers className="mr-2 h-4 w-4"/>
                <span>Drawings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/specifications">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Specifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/fileexplorer">
                <Folder className="mr-2 h-4 w-4"/>
                <span>File Explorer</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/permitting">
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Permitting</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/meetingagenda">
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Meeting Agenda</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/transmittals">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Transmittals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Field</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/dailyreports">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Daily Reports</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/photolibrary">
                <Camera className="mr-2 h-4 w-4"/>
                <span>Photo Library</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/schedule">
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Schedule</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/checklists">
                <ListChecks className="mr-2 h-4 w-4"/>
                <span>Checklists</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/punchlist">
                <ClipboardList className="mr-2 h-4 w-4"/>
                <span>Punchlist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/pullplanning">
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Pull Planning</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Safety</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/observations">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Observations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/pretaskplans">
                <FileText className="mr-2 h-4 w-4"/>
                <span>PreTask Plans</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/jobhazardanalysis">
                <ShieldCheck className="mr-2 h-4 w-4"/>
                <span>Job Hazard Analysis</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/employeeorientations">
                <Briefcase className="mr-2 h-4 w-4"/>
                <span>Employee Orientations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Contracts</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/primecontract">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Prime Contract</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/subcontracts">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Subcontracts</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/professionalserviceagreement">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Professional Service Agreement</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/lienwaivers">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Lien Waivers</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/certificateofinsurance">
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Certificates of Insurance</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/letterofintent">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Letters of Intent</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Cost</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/budgetandforecast">
                <Coins className="mr-2 h-4 w-4"/>
                <span>Budget and Forecast</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/invoicingaiag702g703">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Invoicing (AIA G702/G703)</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/directcostsinvoicescertifiedpayrollandexpenses">
                <Coins className="mr-2 h-4 w-4"/>
                <span>Direct Costs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/potentialchanges">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Potential Changes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/changeorders">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Change Orders</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/approvallettersdirectives">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Approval Letters &amp; Directives</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/timeandmaterialtickets">
                <FileText className="mr-2 h-4 w-4"/>
                <span>Time and Materials Tickets</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Closeout</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/oandmmanuals">
                <File className="mr-2 h-4 w-4"/>
                <span>O&amp;M Manuals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/warranties">
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Warranties</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/atticstock">
                <Archive className="mr-2 h-4 w-4"/>
                <span>Attic Stock</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Resources</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/locations">
                <MapPin className="mr-2 h-4 w-4"/>
                <span>Locations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/csidivisions">
                <DivideCircle className="mr-2 h-4 w-4"/>
                <span>CSI Divisions</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/costcodes">
                <PercentCircle className="mr-2 h-4 w-4"/>
                <span>Cost Codes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/labourrates">
                <Coins className="mr-2 h-4 w-4"/>
                <span>Labour Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/materialrates">
                <Coins className="mr-2 h-4 w-4"/>
                <span>Material Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/equipmentrates">
                <Factory className="mr-2 h-4 w-4"/>
                <span>Equipment Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/projectinfo">
                <Settings className="mr-2 h-4 w-4"/>
                <span>Project Info</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/companymanagement">
                <Settings className="mr-2 h-4 w-4"/>
                <span>Company Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/usermanagement">
                <Settings className="mr-2 h-4 w-4"/>
                <span>User Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/settings/projecthelp">
                <Settings className="mr-2 h-4 w-4"/>
                <span>Project Help</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/settings/databasesettings">
                <Settings className="mr-2 h-4 w-4"/>
                <span>Database Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

           <SidebarGroup>
            <SidebarGroupLabel>Reports</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/reports/modulestatistics">
                <ChartBar className="mr-2 h-4 w-4"/>
                <span>Module Statistics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
           </SidebarGroup>
          <SidebarMenuItem>
            <SidebarMenuButton href="#">
              <Lightbulb className="mr-2 h-4 w-4"/>
              <span>AI Insights</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <button
            onClick={() => console.log('no function')}
            className="flex items-center gap-2 rounded-md p-2 text-left text-sm outline-none transition-transform hover:bg-accent hover:text-accent-foreground"
          >
            {theme === "light" ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
            <span className="text-sm">{theme === "light" ? "Dark" : "Light"} mode</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
