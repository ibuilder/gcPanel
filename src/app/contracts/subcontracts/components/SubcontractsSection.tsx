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
export default function SubcontractsSection() {
  return (
    <div>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Subcontracts</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href={"/contracts/subcontracts/form"}>Add Record</Link>
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Subcontractor 1</TableCell>
            <TableCell>$100,000.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}