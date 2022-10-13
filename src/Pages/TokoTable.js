
import React, { useState } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import { Button, PageButton } from '../Shared/Button';
import { classNames } from '../Shared/Utils';
import { SortIcon, SortUpIcon, SortDownIcon } from '../Shared/Icons';
import { faChevronLeft, faAngleDoubleLeft, faAngleDoubleRight, faChevronRight, faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">Search: </span>
            <input
                type="text"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </label>
    )
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">{render("Header")}: </span>
            <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name={id}
                id={id}
                value={filterValue}
                onChange={e => {
                    setFilter(e.target.value || undefined)
                }}
            >
                <option value="">All</option>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}

export function StatusPill({ value }) {
    const status = value ? value.toLowerCase() : "unknown";

    return (
        <span
            className={
                classNames(
                    "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
                    status.startsWith("active") ? "bg-green-100 text-green-800" : null,
                    status.startsWith("inactive") ? "bg-yellow-100 text-yellow-800" : null,
                    status.startsWith("offline") ? "bg-red-100 text-red-800" : null,
                )
            }
        >
            {status}
        </span>
    );
};

export function AvatarCell({ value, column, row }) {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={row.original[column.imgAccessor]} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">{row.original[column.emailAccessor]}</div>
            </div>
        </div>
    )
}

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    },
        useFilters, // useFilters!
        useGlobalFilter,
        useSortBy,
        usePagination,  // new
    )

    const [showModal, setShowModal] = useState(false);
    // Render the UI for your table
    return (
        <>
            <div className="relative sm:flex sm:gap-x-2">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                {headerGroups.map((headerGroup) =>
                    headerGroup.headers.map((column) =>
                        column.Filter ? (
                            <div className="mt-2 sm:mt-0" key={column.id}>
                                {column.render("Filter")}
                            </div>
                        ) : null
                    )
                )}
                <div className='absolute right-0'>
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-500 text-white px-4 sm:px-8 sm:mb-12 py-2.5 text-xs sm:text-sm  focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full"
                        onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;Tambah Toko
                    </button>
                    {showModal ? (
                        <>
                            <div class="flex mt-12 py-12 w-auto z-10 fixed top-0 right-0 bottom-0 left-0 outline-none focus:outline-none w-full md:inset-0 h-modal md:h-full">
                                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                                        <div className="w-full flex justify-start text-gray-600 mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                            </svg>
                                        </div>
                                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Details</h1>
                                        <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner Name</label>
                                        <input id="name" name='name' className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                                        <label for="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Card Number</label>
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x="3" y="5" width="18" height="14" rx="3" />
                                                    <line x1="3" y1="10" x2="21" y2="10" />
                                                    <line x1="7" y1="15" x2="7.01" y2="15" />
                                                    <line x1="11" y1="15" x2="13" y2="15" />
                                                </svg>
                                            </div>
                                            <input id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="XXXX - XXXX - XXXX - XXXX" />
                                        </div>
                                        <label for="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Expiry Date</label>
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <rect x="4" y="5" width="16" height="16" rx="2" />
                                                    <line x1="16" y1="3" x2="16" y2="7" />
                                                    <line x1="8" y1="3" x2="8" y2="7" />
                                                    <line x1="4" y1="11" x2="20" y2="11" />
                                                    <rect x="8" y="15" width="2" height="2" />
                                                </svg>
                                            </div>
                                            <input id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                        </div>
                                        <label for="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">CVC</label>
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <circle cx="12" cy="12" r="9"></circle>
                                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                                                </svg>
                                            </div>
                                            <input id="cvc" className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                                        </div>
                                        <div className="flex items-center justify-start w-full">
                                            <button claclassNamess="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={() => setShowModal(false)}>Cancel</button>
                                        </div>
                                        <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setShowModal(false)} aria-label="close modal" role="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            {/* table */}
            <div className="mt-11 flex flex-col max-h-96 max-w-5xl">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="align-middle inline-block max-w-min sm:px-4 lg:px-4">
                        <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
                            <table {...getTableProps()} className="max-w-min divide-y divide-gray-200">
                                <thead className="bg-[#E8F8FD] text-[#223E92]">
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                // Add the sorting props to control sorting. For this example
                                                // we can add them into the header props
                                                <th
                                                    scope="col"
                                                    className="group px-6 py-3 text-center text-base font-semibold text-[#223E92] uppercase tracking-wider"
                                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        {column.render('Header')}
                                                        {/* Add a sort direction indicator */}
                                                        <span>
                                                            {column.isSorted
                                                                ? column.isSortedDesc
                                                                    ? <SortDownIcon className="w-4 h-4 text-[#223E92]" />
                                                                    : <SortUpIcon className="w-4 h-4 text-[#223E92]" />
                                                                : (
                                                                    <SortIcon className="w-4 h-4 text-[#223E92] opacity-0 group-hover:opacity-100" />
                                                                )}
                                                        </span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200 text-center overflow-y-scroll"
                                >
                                    {page.map((row, i) => {  // new
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            role="cell"
                                                        >
                                                            {cell.column.Cell.name === "defaultRenderer"
                                                                ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                                                                : cell.render('Cell')
                                                            }
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2 items-baseline">
                        <span className="text-sm text-gray-700">
                            Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
                        </span>
                        <label>
                            <span className="sr-only">Items Per Page</span>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={state.pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[5, 10, 20].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <PageButton
                                className="rounded-l-md"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">First</span>
                                <FontAwesomeIcon icon={faAngleDoubleLeft} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">Previous</span>
                                <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                onClick={() => nextPage()}
                                disabled={!canNextPage
                                }>
                                <span className="sr-only">Next</span>
                                <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                className="rounded-r-md"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Last</span>
                                <FontAwesomeIcon icon={faAngleDoubleRight} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;