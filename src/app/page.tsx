"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {Weather, getWeather} from "@/services/weather";
import {cn} from "@/lib/utils";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import {Toaster} from "@/components/ui/toaster";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const data = [
  {
    name: 'Jan',
    Budget: 4000,
    Actual: 2400,
    Forecast: 2400,
  },
  {
    name: 'Feb',
    Budget: 3000,
    Actual: 1398,
    Forecast: 2210,
  },
  {
    name: 'Mar',
    Budget: 2000,
    Actual: 9800,
    Forecast: 2290,
  },
  {
    name: 'Apr',
    Budget: 2780,
    Actual: 3908,
    Forecast: 2000,
  },
  {
    name: 'May',
    Budget: 1890,
    Actual: 4800,
    Forecast: 2181,
  },
  {
    name: 'Jun',
    Budget: 2390,
    Actual: 3800,
    Forecast: 2500,
  },
  {
    name: 'Jul',
    Budget: 3490,
    Actual: 4300,
    Forecast: 2100,
  },
  {
    name: 'Aug',
    Budget: 4000,
    Actual: 2400,
    Forecast: 2400,
  },
  {
    name: 'Sep',
    Budget: 3000,
    Actual: 1398,
    Forecast: 2210,
  },
  {
    name: 'Oct',
    Budget: 2000,
    Actual: 9800,
    Forecast: 2290,
  },
  {
    name: 'Nov',
    Budget: 2780,
    Actual: 3908,
    Forecast: 2000,
  },
  {
    name: 'Dec',
    Budget: 1890,
    Actual: 4800,
    Forecast: 2181,
  },
];


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
        <SidebarInset className="p-6">
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
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="Budget" fill="hsl(var(--chart-1))"/>
                    <Bar dataKey="Actual" fill="hsl(var(--chart-2))"/>
                    <Bar dataKey="Forecast" fill="hsl(var(--chart-3))"/>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
      <Toaster/>
    </SidebarProvider>
  );
}
