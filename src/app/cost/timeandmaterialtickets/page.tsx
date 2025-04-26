import SortableTable from '@/components/SortableTable';
import Link from 'next/link';

const dummyData = [
  {
    id: '1',
    date: '2024-04-26',
    description: 'Material delivery',
  },
  {
    id: '2',
    date: '2024-04-25',
    description: 'Labor for foundation work',
  },
  {
    id: '3',
    date: '2024-04-24',
    description: 'Equipment rental',
  },
];

const columns = [
  { Header: 'ID', accessor: 'id',
    Cell: ({ row }) => (
    <Link href={`/cost/timeandmaterialtickets/${row.original.id}`}>
      {row.original.id}
    </Link>
  ) },
  { Header: 'Date', accessor: 'date' },
  { Header: 'Description', accessor: 'description' },
];

export default function TimeAndMaterialTicketsPage() {
  return (
    <div>
      <SortableTable title="Time and Material Tickets" columns={columns} data={dummyData} />
    </div>
  );
}
