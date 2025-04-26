tsx
"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TimeAndMaterialTicketsSection() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Time and Material Tickets
        </h2>
        <div className="flex items-center space-x-2">
          <Link href="./timeandmaterialtickets/form">
            <Button>Create T&M Ticket</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableCaption>List of Time and Material Tickets</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ticket #</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Vendor</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#1234</TableCell>
            <TableCell>Excavation work</TableCell>
            <TableCell>ABC Excavators</TableCell>
            <TableCell>2024-03-15</TableCell>
            <TableCell className="text-right">
              <Button variant="outline">View</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#1235</TableCell>
            <TableCell>Concrete pouring</TableCell>
            <TableCell>XYZ Concrete</TableCell>
            <TableCell>2024-03-16</TableCell>
            <TableCell className="text-right">
              <Button variant="outline">View</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}