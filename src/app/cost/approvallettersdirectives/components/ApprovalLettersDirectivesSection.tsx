tsx
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";

export default function ApprovalLettersDirectivesSection() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

    return (
      <Card className="p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">Approval Letters & Directives</CardTitle>
          <CardDescription>Manage and track all approval letters and directives.</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">List of Approval Letters & Directives</h3>
            <Button asChild>
              <Link href="/cost/approvallettersdirectives/form">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add New
              </Link>
            </Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document No.</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell className="text-right"><Skeleton className="h-4 w-24" /></TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell>ALD-001</TableCell>
                      <TableCell>2024-03-15</TableCell>
                      <TableCell>Initial Site Clearance</TableCell>
                      <TableCell>Approved</TableCell>
                      <TableCell className="text-right">
                        <Button variant="secondary" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ALD-002</TableCell>
                      <TableCell>2024-03-20</TableCell>
                      <TableCell>Foundation Work</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell className="text-right">
                        <Button variant="secondary" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    );
}