'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Weather, getWeather } from "@/services/weather";
import { Sidebar, SidebarHeader, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  const [weather, setWeather] = useState<Weather | null>(null);
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsWeatherLoading(true); // Start loading
      try {
        const weatherData = await getWeather();
        setWeather(weatherData);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setWeather(null);
      } finally {
        setIsWeatherLoading(false); // End loading regardless of success/failure
      }
    };

    fetchWeather();
  }, []);

  const [isStatsLoading, setIsStatsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for other stats cards
    const timer = setTimeout(() => {
      setIsStatsLoading(false);
    }, 1000); // Keep simulation or replace with actual data fetching
    return () => clearTimeout(timer); // Cleanup timer
  }, []);


  return (
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

      <div className='p-6 w-full overflow-y-auto'>
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your construction project.
        </p>

        <div className="mt-6">
          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Current Weather</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Weather conditions at the project site</CardDescription>
            </CardHeader>
            <CardContent>
              {isWeatherLoading ? (
                <Skeleton className="h-[50px] w-full"/>
              ) : weather ? (
                <>
                  <div className="text-xl">Temperature: {weather.temperatureFahrenheit}°F</div>
                  <div className="text-xl">Conditions: {weather.conditions}</div>
                </>
              ) : (
                 <p className="text-destructive">Could not load weather data.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Project Status</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">Overall project completion</CardDescription>
            </CardHeader>
            <CardContent>
              {isStatsLoading ? (
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
              {isStatsLoading ? (
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
              {isStatsLoading ? (
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
              {isStatsLoading ? (
                <Skeleton className="h-6 w-1/2" />
              ) : (
                <div className="text-2xl font-bold">3</div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
      <Toaster/>
    </div>
  );
}