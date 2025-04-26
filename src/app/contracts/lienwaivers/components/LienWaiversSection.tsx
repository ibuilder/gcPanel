tsx
export {default} from './LienWaiversSection';
```
```
tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function LienWaiversSection() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Lien Waivers
        </h1>
        <Link href="./form">
          <Button>Add New</Button>
        </Link>
      </div>

      <div className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Waiver 1</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell className="text-right">
                <Button variant="link">View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Waiver 2</TableCell>
              <TableCell>2024-02-20</TableCell>
              <TableCell className="text-right">
                <Button variant="link">View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Waiver 3</TableCell>
              <TableCell>2024-03-10</TableCell>
              <TableCell className="text-right">
                <Button variant="link">View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Waiver 4</TableCell>
              <TableCell>2024-04-05</TableCell>
              <TableCell className="text-right">
                <Button variant="link">View</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Waiver 5</TableCell>
              <TableCell>2024-05-12</TableCell>
              <TableCell className="text-right">
                <Button variant="link">View</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}