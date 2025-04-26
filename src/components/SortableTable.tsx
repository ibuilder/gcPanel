import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender, // Import flexRender
} from '@tanstack/react-table';

interface SortableTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  title: string;
}

const SortableTable = <T extends object>({
  data,
  columns,
  title,
}: SortableTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h2>{title}</h2>
      {/* Consider adding CSS classes for styling, e.g., from globals.css */}
      <table className="table"> {/* Added example class */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}> {/* Added colSpan */}
                  {header.isPlaceholder
                    ? null
                    : flexRender( // Use flexRender for header content
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {/* Render table rows and cells */}
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender( // Use flexRender for cell content
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;