tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DirectCostsInvoicesCertifiedPayrollAndExpensesSection() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Direct Costs, Invoices, Certified Payroll and Expenses
        </CardTitle>
        <CardDescription>
          View and manage all direct costs, invoices, certified payroll and
          expenses here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Direct Costs, Invoices, Certified Payroll and Expenses content goes
        here.
      </CardContent>
    </Card>
  );
}