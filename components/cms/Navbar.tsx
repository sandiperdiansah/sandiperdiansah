'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ui/theme';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();
    const routes = pathname.split('/').filter((item) => item !== '');

    return (
        <header className="flex h-16 items-center justify-between px-5">
            <div className="flex items-center gap-4">
                <SidebarTrigger aria-label="sidebar-trigger" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {routes.map((route, index) => (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink asChild>
                                    <Link
                                        href={`/cms/${route === 'cms' ? 'dashboard' : route}`}
                                        className={cn(
                                            index === routes.length - 1
                                                ? 'text-primary'
                                                : '',
                                        )}
                                    >
                                        {route}
                                    </Link>
                                </BreadcrumbLink>
                                {index < routes.length - 1 && <BreadcrumbSeparator />}
                            </BreadcrumbItem>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <ThemeToggle />
        </header>
    );
};
