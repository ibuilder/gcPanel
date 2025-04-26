"use client";

import SortableTable from "@/components/SortableTable";
import Link from "next/link";

export default function Page() {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      Cell: ({ cell: { value } }: any) => (
        <Link href={`/cost/invoicingaiag702g703/${value}`}>{value}</Link>
      ),
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Description",
      accessor: "description",
    },
  ];

  const data = [
    {
      id: "1",
      date: "2024-01-15",
      description: "Invoice for Project Alpha",
    },
    {
      id: "2",
      date: "2024-02-20",
      description: "Invoice for Project Beta",
    },
    {
      id: "3",
      date: "2024-03-10",
      description: "Invoice for Project Gamma",
    },
  ];
  return <SortableTable data={data} columns={columns} title="Invoices" />;
}
