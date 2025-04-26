tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChangeOrdersSection() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Change Orders
        </h1>
        <Button asChild>
          <Link href="/cost/changeorders/form">Add Change Order</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Change Orders</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Number</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>CO-001</TableCell>
                <TableCell>Add new electrical outlets</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>2023-10-26</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CO-002</TableCell>
                <TableCell>Change flooring material</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>$12,000</TableCell>
                <TableCell>2023-11-15</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}