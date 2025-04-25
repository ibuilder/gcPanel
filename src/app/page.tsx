"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {Weather, getWeather} from "@/services/weather";
import {cn} from "@/lib/utils";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import {Toaster} from "@/components/ui/toaster";


export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await getWeather();
      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  return (
    <SidebarProvider>
      <div className="flex h-screen antialiased text-foreground">
        <DashboardSidebar/>
        <SidebarInset className="p-4">
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your construction project.
          </p>

          {weather && (
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Weather</CardTitle>
                  <CardDescription>Weather conditions at the project site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl">Temperature: {weather.temperatureFarenheit}°F</div>
                  <div className="text-xl">Conditions: {weather.conditions}</div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Overall project completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
                <CardDescription>Remaining budget</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$250,000</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open RFIs</CardTitle>
                <CardDescription>Requests for Information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Submittals due this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget vs Actual vs Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                Budget Chart
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
      <Toaster/>
    </SidebarProvider>
  );
}
