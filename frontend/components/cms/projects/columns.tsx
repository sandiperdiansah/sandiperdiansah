'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Project } from '@/prisma/generated/client';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowDownUp, ArrowUpDown, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: 'thumbnail',
        header: 'THUMBNAIL',
        cell: ({ row }) => {
            const thumbnail = row.original.thumbnail;
            return (
                <>
                    {thumbnail ? (
                        <Image
                            src={thumbnail}
                            alt="thumbnail"
                            width={70}
                            height={70}
                            loading="lazy"
                        />
                    ) : (
                        <span>No Set</span>
                    )}
                </>
            );
        },
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            const sortState = column.getIsSorted();

            return (
                <div className="flex items-center gap-2">
                    <span>NAME</span>
                    <button
                        aria-label="sort"
                        className="cursor-pointer"
                        onClick={() => column.toggleSorting()}
                    >
                        {sortState === 'asc' ? (
                            <ArrowUpDown className="h-4 w-4 opacity-50" />
                        ) : (
                            <ArrowDownUp className="h-4 w-4 opacity-50" />
                        )}
                    </button>
                </div>
            );
        },
        cell: ({ row }) => {
            return <span className="text-sm">{row.original.name}</span>;
        },
    },
    {
        accessorKey: 'slug',
        header: 'SLUG',
        cell: ({ row }) => {
            return <span className="text-sm">{row.original.slug}</span>;
        },
    },
    {
        accessorKey: 'description',
        header: 'DESCRIPTION',
        cell: ({ row }) => {
            return <span className="text-sm">{row.original.description}</span>;
        },
    },
    {
        accessorKey: 'isActive',
        header: 'STATUS',
        cell: ({ row }) => {
            return (
                <span className="text-sm">
                    {row.original.isActive ? 'Active' : 'Inactive'}
                </span>
            );
        },
    },
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            const sortState = column.getIsSorted();

            return (
                <div className="flex items-center gap-2">
                    <span>CREATED AT</span>
                    <button
                        aria-label="sort"
                        className="cursor-pointer"
                        onClick={() => column.toggleSorting(sortState === 'asc')}
                    >
                        {sortState === 'asc' ? (
                            <ArrowUpDown className="h-4 w-4 opacity-50" />
                        ) : (
                            <ArrowDownUp className="h-4 w-4 opacity-50" />
                        )}
                    </button>
                </div>
            );
        },
        cell: ({ row }) => {
            const createdAt = new Intl.DateTimeFormat('en-US', {
                dateStyle: 'medium',
            }).format(row.original.createdAt);
            return <span className="text-sm">{createdAt}</span>;
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const project = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon-sm"
                            aria-label="actions"
                            className="focus-visible:ring-0"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => navigator.clipboard.writeText(project.id)}
                        >
                            Copy Project ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
