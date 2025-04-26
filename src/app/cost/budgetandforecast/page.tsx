import SortableTable from '@/components/SortableTable';

interface BudgetAndForecastRecord {
  id: number;
  date: string;
  description: string;
}

export default function Page() {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
      Cell: ({ row }: any) => (
        <a href={`/cost/budgetandforecast/${row.original.id}`}>{row.original.id}</a>
      )
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
  ];

  const data: BudgetAndForecastRecord[] = [
    { id: 1, date: '2024-01-15', description: 'Initial budget' },
    { id: 2, date: '2024-02-20', description: 'Revised forecast' },
    { id: 3, date: '2024-03-10', description: 'Mid-year adjustment' },
  ];

  return (
    <div>
      <SortableTable
        title="Budget and Forecast Records"
        columns={columns}
        data={data}
      />
    </div>
  );
}
