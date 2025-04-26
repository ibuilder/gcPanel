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
    {
      id: '1',
      date: '2024-01-15',
      description: 'Potential change for wall relocation',
    },
    {
      id: '2',
      date: '2024-02-22',
      description: 'Potential change for electrical wiring',
    },
    {
      id: '3',
      date: '2024-03-10',
      description: 'Potential change for flooring upgrade',
    },
  ];

  const getRowLink = (row: any) => {
    return `/cost/potentialchanges/${row.id}`;
  };

  return (
    <SortableTable columns={columns} data={data} title="Potential Changes" getRowLink={getRowLink}/>
  );
}
