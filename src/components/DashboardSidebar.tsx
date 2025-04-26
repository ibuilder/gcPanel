'use client';

import {
  SidebarComponent,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Moon,
  Sun,
  LayoutDashboard,
  FileText,
  Lightbulb,
  Folder,
  ListChecks,
  ClipboardList,
  Calendar,
  Camera,
  Layers,
  ShieldCheck,
  Briefcase,
  Coins,
  File,
  Archive,
  Factory,
  MapPin,
  DivideCircle,
  PercentCircle,
  BadgeCheck,
  Settings,
  ChartBar,
} from 'lucide-react';
import {useTheme} from '@/components/ThemeProvider';
import {useRouter} from 'next/navigation';

// Define types for props to enhance readability and maintainability.
interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({title, children}: SidebarSectionProps) => (
  <SidebarGroup>
    <SidebarGroupLabel>{title}</SidebarGroupLabel>
    {children}
  </SidebarGroup>
);

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const SidebarLink = ({href, children, icon}: SidebarLinkProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton href={href} asChild>
        {icon}
        <span>{children}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const DashboardSidebar = () => {
  const {theme, setTheme} = useTheme();
  const router = useRouter();

  return (
    <SidebarComponent collapsible="icon" className="shadow-md bg-sidebar text-sidebar-foreground">
      <SidebarTrigger />
      <SidebarContent>
        <SidebarMenu>
          <SidebarLink href="/" icon={<LayoutDashboard className="mr-2 h-4 w-4" />}>
            Dashboard
          </SidebarLink>

          <SidebarSection title="Engineering">
            <SidebarLink href="/engineering/rfis" icon={<FileText className="mr-2 h-4 w-4" />}>
              RFIs
            </SidebarLink>
            <SidebarLink href="/engineering/submittals" icon={<FileText className="mr-2 h-4 w-4" />}>
              Submittals
            </SidebarLink>
            <SidebarLink href="/engineering/drawings" icon={<Layers className="mr-2 h-4 w-4" />}>
              Drawings
            </SidebarLink>
            <SidebarLink href="/engineering/specifications" icon={<FileText className="mr-2 h-4 w-4" />}>
              Specifications
            </SidebarLink>
            <SidebarLink href="/engineering/fileexplorer" icon={<Folder className="mr-2 h-4 w-4" />}>
              File Explorer
            </SidebarLink>
            <SidebarLink href="/engineering/permitting" icon={<BadgeCheck className="mr-2 h-4 w-4" />}>
              Permitting
            </SidebarLink>
            <SidebarLink href="/engineering/meetingagenda" icon={<Calendar className="mr-2 h-4 w-4" />}>
              Meeting Agenda
            </SidebarLink>
            <SidebarLink href="/engineering/transmittals" icon={<FileText className="mr-2 h-4 w-4" />}>
              Transmittals
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Field">
            <SidebarLink href="/field/dailyreports" icon={<FileText className="mr-2 h-4 w-4" />}>
              Daily Reports
            </SidebarLink>
            <SidebarLink href="/field/photolibrary" icon={<Camera className="mr-2 h-4 w-4" />}>
              Photo Library
            </SidebarLink>
            <SidebarLink href="/field/schedule" icon={<Calendar className="mr-2 h-4 w-4" />}>
              Schedule
            </SidebarLink>
            <SidebarLink href="/field/checklists" icon={<ListChecks className="mr-2 h-4 w-4" />}>
              Checklists
            </SidebarLink>
            <SidebarLink href="/field/punchlist" icon={<ClipboardList className="mr-2 h-4 w-4" />}>
              Punchlist
            </SidebarLink>
            <SidebarLink href="/field/pullplanning" icon={<Calendar className="mr-2 h-4 w-4" />}>
              Pull Planning
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Safety">
            <SidebarLink href="/safety/observations" icon={<FileText className="mr-2 h-4 w-4" />}>
              Observations
            </SidebarLink>
            <SidebarLink href="/safety/pretaskplans" icon={<FileText className="mr-2 h-4 w-4" />}>
              PreTask Plans
            </SidebarLink>
            <SidebarLink href="/safety/jobhazardanalysis" icon={<ShieldCheck className="mr-2 h-4 w-4" />}>
              Job Hazard Analysis
            </SidebarLink>
            <SidebarLink href="/safety/employeeorientations" icon={<Briefcase className="mr-2 h-4 w-4" />}>
              Employee Orientations
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Contracts">
            <SidebarLink href="/contracts/primecontract" icon={<FileText className="mr-2 h-4 w-4" />}>
              Prime Contract
            </SidebarLink>
            <SidebarLink href="/contracts/subcontracts" icon={<FileText className="mr-2 h-4 w-4" />}>
              Subcontracts
            </SidebarLink>
            <SidebarLink href="/contracts/professionalserviceagreement" icon={<FileText className="mr-2 h-4 w-4" />}>
              Professional Service Agreement
            </SidebarLink>
            <SidebarLink href="/contracts/lienwaivers" icon={<FileText className="mr-2 h-4 w-4" />}>
              Lien Waivers
            </SidebarLink>
            <SidebarLink href="/contracts/certificateofinsurance" icon={<BadgeCheck className="mr-2 h-4 w-4" />}>
              Certificates of Insurance
            </SidebarLink>
            <SidebarLink href="/contracts/letterofintent" icon={<FileText className="mr-2 h-4 w-4" />}>
              Letters of Intent
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Cost">
            <SidebarLink href="/cost/budgetandforecast" icon={<Coins className="mr-2 h-4 w-4" />}>
              Budget and Forecast
            </SidebarLink>
            <SidebarLink href="/cost/invoicingaiag702g703" icon={<FileText className="mr-2 h-4 w-4" />}>
              Invoicing (AIA G702/G703)
            </SidebarLink>
            <SidebarLink href="/cost/directcostsinvoicescertifiedpayrollandexpenses" icon={<Coins className="mr-2 h-4 w-4" />}>
              Direct Costs
            </SidebarLink>
            <SidebarLink href="/cost/potentialchanges" icon={<FileText className="mr-2 h-4 w-4" />}>
              Potential Changes
            </SidebarLink>
            <SidebarLink href="/cost/changeorders" icon={<FileText className="mr-2 h-4 w-4" />}>
              Change Orders
            </SidebarLink>
            <SidebarLink href="/cost/approvallettersdirectives" icon={<FileText className="mr-2 h-4 w-4" />}>
              Approval Letters &amp; Directives
            </SidebarLink>
            <SidebarLink href="/cost/timeandmaterialtickets" icon={<FileText className="mr-2 h-4 w-4" />}>
              Time and Materials Tickets
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Closeout">
            <SidebarLink href="/closeout/oandmmanuals" icon={<File className="mr-2 h-4 w-4" />}>
              O&amp;M Manuals
            </SidebarLink>
            <SidebarLink href="/closeout/warranties" icon={<BadgeCheck className="mr-2 h-4 w-4" />}>
              Warranties
            </SidebarLink>
            <SidebarLink href="/closeout/atticstock" icon={<Archive className="mr-2 h-4 w-4" />}>
              Attic Stock
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Resources">
            <SidebarLink href="/resources/locations" icon={<MapPin className="mr-2 h-4 w-4" />}>
              Locations
            </SidebarLink>
            <SidebarLink href="/resources/csidivisions" icon={<DivideCircle className="mr-2 h-4 w-4" />}>
              CSI Divisions
            </SidebarLink>
            <SidebarLink href="/resources/costcodes" icon={<PercentCircle className="mr-2 h-4 w-4" />}>
              Cost Codes
            </SidebarLink>
            <SidebarLink href="/resources/labourrates" icon={<Coins className="mr-2 h-4 w-4" />}>
              Labour Rates
            </SidebarLink>
            <SidebarLink href="/resources/materialrates" icon={<Coins className="mr-2 h-4 w-4" />}>
              Material Rates
            </SidebarLink>
            <SidebarLink href="/resources/equipmentrates" icon={<Factory className="mr-2 h-4 w-4" />}>
              Equipment Rates
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Settings">
            <SidebarLink href="/settings/projectinfo" icon={<Settings className="mr-2 h-4 w-4" />}>
              Project Info
            </SidebarLink>
            <SidebarLink href="/settings/companymanagement" icon={<Settings className="mr-2 h-4 w-4" />}>
              Company Management
            </SidebarLink>
            <SidebarLink href="/settings/usermanagement" icon={<Settings className="mr-2 h-4 w-4" />}>
              User Management
            </SidebarLink>
            <SidebarLink href="/settings/projecthelp" icon={<Settings className="mr-2 h-4 w-4" />}>
              Project Help
            </SidebarLink>
            <SidebarLink href="/settings/databasesettings" icon={<Settings className="mr-2 h-4 w-4" />}>
              Database Settings
            </SidebarLink>
          </SidebarSection>

          <SidebarSection title="Reports">
            <SidebarLink href="/reports/modulestatistics" icon={<ChartBar className="mr-2 h-4 w-4" />}>
              Module Statistics
            </SidebarLink>
            <SidebarLink href="/reports/aiinsights" icon={<Lightbulb className="mr-2 h-4 w-4" />}>
              AI Insights
            </SidebarLink>
          </SidebarSection>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="flex items-center gap-2 rounded-md p-2 text-left text-sm outline-none transition-transform hover:bg-accent hover:text-accent-foreground"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="text-sm">{theme === 'light' ? 'Light' : 'Dark'} mode</span>
          </button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default DashboardSidebar;
