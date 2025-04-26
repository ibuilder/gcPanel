import SortableTable from '@/components/SortableTable';

export default function Page() {
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Date',
      accessorKey: 'date',
    },
    {
      header: 'Description',
      accessorKey: 'description',
    },
  ];

  const data = [
    { id: '1', date: '2024-04-26', description: 'Safety Record 1' },
    { id: '2', date: '2024-04-27', description: 'Safety Record 2' },
    { id: '3', date: '2024-04-28', description: 'Safety Record 3' },
  ];

  const linkBase = "/safety/";

  const tableTitle = "Safety Records";

  return (
    <div>
    <SortableTable columns={columns} data={data} linkBase={linkBase} tableTitle={tableTitle}/>
    </div>
  );
}
