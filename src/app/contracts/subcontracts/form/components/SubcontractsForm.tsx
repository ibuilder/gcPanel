"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SubcontractsForm() {
  return (
    <Card className="w-[350px] mx-auto my-10">
      <CardHeader>
        <CardTitle>Subcontracts Form</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Here you can create or edit a Subcontract
        </CardDescription>
      </CardContent>
    </Card>
  );
}