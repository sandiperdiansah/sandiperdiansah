'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
};

type DataTableState = {
    pageIndex: number;
    pageSize: number;
    sorting: SortingState;
};

export const DataTable = <TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Initialize state from URL search params
    const [state, setState] = useState<DataTableState>(() => {
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');

        return {
            pageIndex: page ? parseInt(page) : 0,
            pageSize: limit ? parseInt(limit) : 10,
            sorting: [],
        };
    });

    // Update URL search params when state changes
    const updateSearchParams = useCallback(
        (updates: Record<string, string>) => {
            const params = new URLSearchParams(searchParams.toString());

            Object.entries(updates).forEach(([key, value]) => {
                params.set(key, value);
            });

            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        },
        [router, searchParams, pathname],
    );

    useEffect(() => {
        updateSearchParams({
            page: state.pageIndex.toString(),
            limit: state.pageSize.toString(),
        });
    }, [state.pageIndex, state.pageSize, updateSearchParams]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),

        // pagination
        getPaginationRowModel: getPaginationRowModel(),

        // sorting
        onSortingChange: (sorting) =>
            setState((prev) => ({
                ...prev,
                sorting: typeof sorting === 'function' ? sorting(prev.sorting) : sorting,
            })),
        getSortedRowModel: getSortedRowModel(),

        state: {
            pagination: {
                pageIndex: state.pageIndex,
                pageSize: state.pageSize,
            },
            sorting: state.sorting,
        },
    });

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        className="p-5"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        className="px-5 py-2"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter className="bg-white">
                    <TableRow className="hover:bg-transparent">
                        <TableCell colSpan={columns.length}>
                            <div className="flex w-full items-center justify-between p-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <span>Showing</span>
                                    <Select
                                        value={state.pageSize.toString()}
                                        onValueChange={(value) => {
                                            setState((prev) => ({
                                                ...prev,
                                                pageSize: Number(value),
                                                pageIndex: 0,
                                            }));
                                        }}
                                    >
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={state.pageSize.toString()}
                                            />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="10">10</SelectItem>
                                            <SelectItem value="25">25</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>ok</div>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
