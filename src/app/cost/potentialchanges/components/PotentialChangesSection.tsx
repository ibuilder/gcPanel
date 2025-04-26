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
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { potentialChangesData } from "@/data/potentialChangesData";

const data = potentialChangesData;

const PotentialChangesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Card className="rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Potential Changes
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          List of potential changes
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-[300px] w-full" />
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </CardContent>
    </Card>
  );
};

export default PotentialChangesSection;