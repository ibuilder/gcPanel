"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButtonComponent as SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarGroupLabelComponent as SidebarGroupLabel, // Corrected import
} from "@/components/ui/sidebar";
import {Moon, Sun, LayoutDashboard, FileText, Lightbulb, Folder, ListChecks, ClipboardList, Calendar, Camera, Layers, ShieldCheck, Briefcase, Coins, File, Archive, Factory, MapPin, DivideCircle, PercentCircle, BadgeCheck, Settings, ChartBar } from "lucide-react";
import {useEffect} from "react";
import {useTheme} from "@/components/ThemeProvider";
import {useRouter} from "next/navigation";

const DashboardSidebar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();


  return (
    <Sidebar collapsible="icon" className="shadow-md bg-sidebar text-sidebar-foreground">
      <SidebarTrigger />
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" asChild>
              <LayoutDashboard className="mr-2 h-4 w-4"/>
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarGroup>
            <SidebarGroupLabel>Engineering</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/rfis" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>RFIs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/submittals" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Submittals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/drawings" asChild>
                <Layers className="mr-2 h-4 w-4"/>
                <span>Drawings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/specifications" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Specifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/fileexplorer" asChild>
                <Folder className="mr-2 h-4 w-4"/>
                <span>File Explorer</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/permitting" asChild>
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Permitting</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/meetingagenda" asChild>
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Meeting Agenda</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/engineering/transmittals" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Transmittals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Field</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/dailyreports" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Daily Reports</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/photolibrary" asChild>
                <Camera className="mr-2 h-4 w-4"/>
                <span>Photo Library</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/schedule" asChild>
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Schedule</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/checklists" asChild>
                <ListChecks className="mr-2 h-4 w-4"/>
                <span>Checklists</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/punchlist" asChild>
                <ClipboardList className="mr-2 h-4 w-4"/>
                <span>Punchlist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/field/pullplanning" asChild>
                <Calendar className="mr-2 h-4 w-4"/>
                <span>Pull Planning</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Safety</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/observations" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Observations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/pretaskplans" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>PreTask Plans</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/jobhazardanalysis" asChild>
                <ShieldCheck className="mr-2 h-4 w-4"/>
                <span>Job Hazard Analysis</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/safety/employeeorientations" asChild>
                <Briefcase className="mr-2 h-4 w-4"/>
                <span>Employee Orientations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Contracts</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/primecontract" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Prime Contract</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/subcontracts" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Subcontracts</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/professionalserviceagreement" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Professional Service Agreement</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/lienwaivers" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Lien Waivers</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/certificateofinsurance" asChild>
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Certificates of Insurance</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/contracts/letterofintent" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Letters of Intent</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Cost</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/budgetandforecast" asChild>
                <Coins className="mr-2 h-4 w-4"/>
                <span>Budget and Forecast</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/invoicingaiag702g703" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Invoicing (AIA G702/G703)</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/directcostsinvoicescertifiedpayrollandexpenses" asChild>
                <Coins className="mr-2 h-4 w-4"/>
                <span>Direct Costs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/potentialchanges" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Potential Changes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/changeorders" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Change Orders</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/approvallettersdirectives" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Approval Letters &amp; Directives</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/cost/timeandmaterialtickets" asChild>
                <FileText className="mr-2 h-4 w-4"/>
                <span>Time and Materials Tickets</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Closeout</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/oandmmanuals" asChild>
                <File className="mr-2 h-4 w-4"/>
                <span>O&amp;M Manuals</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/warranties" asChild>
                <BadgeCheck className="mr-2 h-4 w-4"/>
                <span>Warranties</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/closeout/atticstock" asChild>
                <Archive className="mr-2 h-4 w-4"/>
                <span>Attic Stock</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Resources</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/locations" asChild>
                <MapPin className="mr-2 h-4 w-4"/>
                <span>Locations</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/csidivisions" asChild>
                <DivideCircle className="mr-2 h-4 w-4"/>
                <span>CSI Divisions</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/costcodes" asChild>
                <PercentCircle className="mr-2 h-4 w-4"/>
                <span>Cost Codes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/labourrates" asChild>
                <Coins className="mr-2 h-4 w-4"/>
                <span>Labour Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/materialrates" asChild>
                <Coins className="mr-2 h-4 w-4"/>
                <span>Material Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/resources/equipmentrates" asChild>
                <Factory className="mr-2 h-4 w-4"/>
                <span>Equipment Rates</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/projectinfo" asChild>
                <Settings className="mr-2 h-4 w-4"/>
                <span>Project Info</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/companymanagement" asChild>
                <Settings className="mr-2 h-4 w-4"/>
                <span>Company Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/settings/usermanagement" asChild>
                <Settings className="mr-2 h-4 w-4"/>
                <span>User Management</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/settings/projecthelp" asChild>
                <Settings className="mr-2 h-4 w-4"/>
                <span>Project Help</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/settings/databasesettings" asChild>
                <Settings className="mr-2 h-4 w-4"/>
                <span>Database Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroup>

           <SidebarGroup>
            <SidebarGroupLabel>Reports</SidebarGroupLabel>
            <SidebarMenuItem>
              <SidebarMenuButton href="/reports/modulestatistics" asChild>
                <ChartBar className="mr-2 h-4 w-4"/>
                <span>Module Statistics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
           </SidebarGroup>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" asChild>
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
            <span className="text-sm">{theme === "light" ? "Light" : "Dark"} mode</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
