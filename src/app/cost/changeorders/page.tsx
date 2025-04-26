import SortableTable from '@/components/SortableTable';
import Link from 'next/link';

interface ChangeOrder {
  id: string;
  date: string;
  description: string;
}

const dummyData: ChangeOrder[] = [
  { id: '1', date: '2024-01-15', description: 'Change Order 1 Description' },
  { id: '2', date: '2024-02-20', description: 'Change Order 2 Description' },
  { id: '3', date: '2024-03-10', description: 'Change Order 3 Description' },
];

const columns = [
  { Header: 'ID', accessor: 'id',  Cell: ({ cell }:any) => <Link href={`/cost/changeorders/${cell.row.original.id}`}>{cell.value}</Link>},
  { Header: 'Date', accessor: 'date' },
  { Header: 'Description', accessor: 'description' },
];

const title = "Change Orders"

export default function Page() {
  return (
    <div>
      <SortableTable 
        data={dummyData} 
        columns={columns}
        title={title}
      />
    </div>
  );
}
