"use client";
import { Booking, User } from '@/constants/index.c';
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from '@tanstack/react-table';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { cn } from '@/lib/utils';


interface SortableTableProps<T> {
    data: T[],
    columns: ColumnDef<T>[],
    filter?: boolean
}


const SortableTable = <T,>({ data, columns, filter = true }: SortableTableProps<T>) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },

    })


    return (
        <div className="w-full">
            {filter && (
                <div className="w-full flex items-center justify-between py-4">
                    <Input
                        placeholder='Search Name, Email'
                        value={(
                            (table.getColumn("email") || table.getColumn("name"))?.getFilterValue() as string
                        ) ?? ""}
                        onChange={(event) =>
                            (table.getColumn("email") || table.getColumn("name"))?.setFilterValue(event.target.value)
                        }
                        className='max-w-sm'
                    />
                </div>
            )}

            <div className="w-full ">
                <Table className=''>
                    <TableHeader>
                        {table.getHeaderGroups().map((headers) => {
                            return <TableRow
                                key={headers.id}
                            >
                                {headers.headers.map((header) => {
                                    const headline = header.column.columnDef.header;
                                    return <TableHead
                                        className={cn('min-w-max', (headline === 'No. of Guest'|| headline === "Phone") && "w-[100px]")}

                                        key={header.id}
                                    >

                                        {
                                            header.placeholderId ? null :
                                                flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                        }
                                    </TableHead>
                                })}
                            </TableRow>
                        })}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell, i) => {

                                        return <TableCell
                                            className={cn('min-w-max', ((i === 2) || (i === 5) || (i === 4) || (i === 0)) && "min-w-[130px] w-max")}
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className='h-24 text-center'
                                >
                                    No results
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div >
    )
}

export default SortableTable;
