tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  {
    name: "Jan",
    Budget: 4000,
    Actual: 2400,
    Forecast: 2400,
  },
  {
    name: "Feb",
    Budget: 3000,
    Actual: 1398,
    Forecast: 2210,
  },
  {
    name: "Mar",
    Budget: 2000,
    Actual: 9800,
    Forecast: 2290,
  },
  {
    name: "Apr",
    Budget: 2780,
    Actual: 3908,
    Forecast: 2000,
  },
  {
    name: "May",
    Budget: 1890,
    Actual: 4800,
    Forecast: 2181,
  },
  {
    name: "Jun",
    Budget: 2390,
    Actual: 3800,
    Forecast: 2500,
  },
  {
    name: "Jul",
    Budget: 3490,
    Actual: 4300,
    Forecast: 2100,
  },
  {
    name: "Aug",
    Budget: 4000,
    Actual: 2400,
    Forecast: 2400,
  },
  {
    name: "Sep",
    Budget: 3000,
    Actual: 1398,
    Forecast: 2210,
  },
  {
    name: "Oct",
    Budget: 2000,
    Actual: 9800,
    Forecast: 2290,
  },
  {
    name: "Nov",
    Budget: 2780,
    Actual: 3908,
    Forecast: 2000,
  },
  {
    name: "Dec",
    Budget: 1890,
    Actual: 4800,
    Forecast: 2181,
  },
];

export default function BudgetAndForecastSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Budget and Forecast
      </h1>
      <p className="text-muted-foreground">
        Track and manage the project budget and forecast.
      </p>

      <div className="mt-6">
        <Card className="rounded-lg shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Budget vs Actual vs Forecast
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Comparison of budget, actual expenses, and forecast for each month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
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
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Budget" fill="hsl(var(--chart-1))" />
                  <Bar dataKey="Actual" fill="hsl(var(--chart-2))" />
                  <Bar dataKey="Forecast" fill="hsl(var(--chart-3))" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}