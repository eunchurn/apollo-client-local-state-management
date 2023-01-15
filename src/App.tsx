import React from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./App.css";
import {
  useGetDataByFieldLazyQuery,
  Field,
  Data,
  GetDataByFieldQuery,
} from "generated/apollo";
import { compact, omitBy } from "lodash";

type OmittedData = Omit<Data, "__typename">;

const columnHelper = createColumnHelper<OmittedData>();

const columns = compact(
  Object.values(Field).map((columnKey) =>
    columnHelper.accessor(columnKey, {
      cell: (info) => info.getValue(),
      header: () => columnKey,
    })
  )
);

const defaultData: OmittedData[] = Object.values(Field).map((value) => ({
  [value]: "",
}));

function getData(data: GetDataByFieldQuery | undefined): OmittedData[] {
  if (!data) return defaultData;
  const { getDataByField } = data;
  if (!getDataByField) return defaultData;
  const result = compact(
    getDataByField.map((data) => omitBy(data, "__typename"))
  ) as OmittedData[];
  return result;
}

function App() {
  const [getDataQuery, { data: filteredData }] = useGetDataByFieldLazyQuery();
  const data = React.useMemo(() => getData(filteredData), [filteredData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <button onClick={() => getDataQuery()} className="border p-2">
        All City
      </button>
      <button
        onClick={() =>
          getDataQuery({ variables: { field: Field.City, value: "Palo Alto" } })
        }
        className="border p-2"
      >
        Palo Alto
      </button>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
}

export default App;
