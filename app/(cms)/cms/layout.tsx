import { Navbar } from '@/components/cms/Navbar';
import { Sidebar } from '@/components/cms/Sidebar';
import { TopLoader } from '@/components/TopLoader';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar />
            <div className="w-full">
                <TopLoader />
                <Navbar />
                <main className="w-full px-8 pt-2 pb-8">{children}</main>
            </div>
        </SidebarProvider>
    );
};

export default Layout;
