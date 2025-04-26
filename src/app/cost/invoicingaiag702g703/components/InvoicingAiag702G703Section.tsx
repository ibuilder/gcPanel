tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const data = [
  {
    id: "1",
    name: "Invoice 1",
    description: "Invoice 1 description",
    date: "2021-01-01",
    status: "Pending",
  },
  {
    id: "2",
    name: "Invoice 2",
    description: "Invoice 2 description",
    date: "2021-01-02",
    status: "Approved",
  },
  {
    id: "3",
    name: "Invoice 3",
    description: "Invoice 3 description",
    date: "2021-01-03",
    status: "Rejected",
  },
];

export default function InvoicingAiag702G703Section() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Invoicing AIA G702/G703</CardTitle>
          <CardDescription>
            Manage invoices and their status.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}