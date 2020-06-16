/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useTable, useFilters, useSortBy, useRowSelect, usePagination } from 'react-table';

// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         <input type="checkbox" ref={resolvedRef} {...rest} />
//       </>
//     );
//   }
// );

// const IndeterminateButton = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef();
//     const resolvedRef = ref || defaultRef;

//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate;
//     }, [resolvedRef, indeterminate]);

//     return (
//       <>
//         <button type="submit" ref={resolvedRef} {...rest}><i className="fa fa-edit" /></button>
//       </>
//     );
//   }
// );

export default function TableCalon({ columns, data }) {
  const [filterKodeInput, setFilterKodeInput] = useState('');
  const [filterNamaInput, setFilterNamaInput] = useState('');
  const [filterNISNInput, setFilterNISNInput] = useState('');
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
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: 'createAt',
            desc: true
          }
        ]
      }
    },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
    // hooks => {
    //   hooks.visibleColumns.push(columns => [
    //     // Let's make a column for selection
    //     {
    //       id: 'selection',
    //       // The header can use the table's getToggleAllRowsSelectedProps method
    //       // to render a checkbox
    //       // Header: ({ getToggleAllRowsSelectedProps }) => (
    //       //   <div>
    //       //     <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
    //       //   </div>
    //       // ),
    //       // The cell can use the individual row's getToggleRowSelectedProps method
    //       // to the render a checkbox
    //       Cell: ({ row }) => (
    //         <div>
    //           <IndeterminateButton {...row.getToggleRowSelectedProps()} />
    //         </div>
    //       ),
    //     },
    //     ...columns,
    //   ])
    // }
  );

  const handleFilterNamaChange = e => {
    const value = e.target.value || undefined;
    setFilter('namasiswa', value);
    setFilterNamaInput(value);
  };

  const handleFilterKodeChange = e => {
    const value = e.target.value || undefined;
    setFilter('kodePendaftaran', value);
    setFilterKodeInput(value);
  };

  const handleFilterNISNChange = e => {
    const value = e.target.value || undefined;
    setFilter('nisn', value);
    setFilterNISNInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterKodeInput}
        onChange={handleFilterKodeChange}
        placeholder={'Cari Kode Pendaftaran'}
      /> {' '}
      <input
        value={filterNISNInput}
        onChange={handleFilterNISNChange}
        placeholder={'Cari NISN'}
      /> {' '}
      <input
        value={filterNamaInput}
        onChange={handleFilterNamaChange}
        placeholder={'Cari Nama'}
      /> {' '}
      <label style={{paddingLeft:'13px'}}>Jumlah Pendaftar: {data.length} orang</label>      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-desc'
                        : 'sort-asc'
                      : ''
                  }
                >
                  {column.render('Header')}
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
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}