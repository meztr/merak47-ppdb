/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  useTable,
  useFilters,
  useSortBy,
  useRowSelect,
  usePagination,
} from "react-table";

export default function TableNews({ columns, data }) {
  const [filterNamaInput, setFilterNamaInput] = useState("");
  const [filterNISNInput, setFilterNISNInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    setFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: "ranking",
            desc: false,
          },
        ],
      },
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
  );

  const handleFilterNamaChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("namasiswa", value);
    setFilterNamaInput(value);
  };

  const handleFilterNISNChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("nisn", value);
    setFilterNISNInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <input
            value={filterNamaInput}
            onChange={handleFilterNamaChange}
            placeholder={"Cari Nama"}
          />{" "}
          <input
            value={filterNISNInput}
            onChange={handleFilterNISNChange}
            placeholder={"Cari NISN"}
          />{" "}
        </div>
        <div className="col-sm-6 py-3">
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Hlm{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <label style={{paddingLeft:'13px'}}>Jumlah Pendaftar: {data.length} orang</label>      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
