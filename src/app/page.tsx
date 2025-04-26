'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Weather, getWeather } from "@/services/weather";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarMenu, SidebarMenuAction } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset } from '@/components/ui/sidebar';
import { SidebarMenuButton } from '@/components/ui/sidebar/SidebarMenu';
import { usePathname } from 'next/navigation';
interface ChartData {
    name: string;
    Budget: number;
    Actual: number;
    Forecast: number;
}

const initialData: ChartData[] = [
    { name: 'Jan', Budget: 4000, Actual: 2400, Forecast: 2400 },
    { name: 'Feb', Budget: 3000, Actual: 1398, Forecast: 2210 },
    { name: 'Mar', Budget: 2000, Actual: 9800, Forecast: 2290 },
    { name: 'Apr', Budget: 2780, Actual: 3908, Forecast: 2000 },
    { name: 'May', Budget: 1890, Actual: 4800, Forecast: 2181 },
    { name: 'Jun', Budget: 2390, Actual: 3800, Forecast: 2500 },
    { name: 'Jul', Budget: 3490, Actual: 4300, Forecast: 2100 },
    { name: 'Aug', Budget: 4000, Actual: 2400, Forecast: 2400 },
    { name: 'Sep', Budget: 3000, Actual: 1398, Forecast: 2210 },
    { name: 'Oct', Budget: 2000, Actual: 9800, Forecast: 2290 },
    { name: 'Nov', Budget: 2780, Actual: 3908, Forecast: 2000 },
    { name: 'Dec', Budget: 1890, Actual: 4800, Forecast: 2181 },
];


export default function Home() {
  const pathname = usePathname();


  const [weather, setWeather] = useState<Weather | null>(null);
  const [data, setData] = useState<ChartData[]>(initialData);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather();
      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <SidebarProvider>
      <div className="flex h-screen antialiased text-foreground gap-4">
        <Sidebar>
          <SidebarHeader>
            Navigation
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuButton active={pathname === '/'} href="/">
              Dashboard
            </SidebarMenuButton>
            <SidebarMenuButton active={pathname === '/closeout'} href="/closeout">
              Closeout
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/contracts')} href="/contracts">
              Contracts
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/cost')} href="/cost">
              Cost
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/engineering')} href="/engineering">
              Engineering
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/field')} href="/field">
              Field
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/reports')} href="/reports">
              Reports
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/resources')} href="/resources">
              Resources
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/safety')} href="/safety">
              Safety
            </SidebarMenuButton>

            <SidebarMenuButton active={pathname.startsWith('/settings')} href="/settings">
              Settings
            </SidebarMenuButton>
          </SidebarMenu>
        </Sidebar>

        <div className='p-6 w-full'>
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your construction project.
          </p>

          {weather ? (
            <div className="mt-6">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Current Weather</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">Weather conditions at the project site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl">Temperature: {weather.temperatureFarenheit}°F</div>
                  <div className="text-xl">Conditions: {weather.conditions}</div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="mt-6">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Current Weather</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">Weather conditions at the project site</CardDescription>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-[75px] w-full"/>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Project Status</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Overall project completion</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-6 w-1/2" />
                ) : (
                  <div className="text-2xl font-bold">75%</div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Budget Overview</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Remaining budget</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-6 w-1/2" />
                ) : (
                  <div className="text-2xl font-bold">$250,000</div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Open RFIs</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Requests for Information</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-6 w-1/2" />
                ) : (
                  <div className="text-2xl font-bold">15</div>
                )}
              </CardContent>
            </Card>

            <Card className="rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Upcoming Deadlines</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Submittals due this week</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-6 w-1/2" />
                ) : (
                  <div className="text-2xl font-bold">3</div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      <Toaster/>
    </SidebarProvider>
  );
}