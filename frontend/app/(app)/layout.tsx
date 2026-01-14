import { Footer } from '@/components/app/Footer';
import { Navbar } from '@/components/app/Navbar';
import { ViewTransitions } from 'next-view-transitions';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ViewTransitions>
            <Navbar />
            <main>
                <>{children}</>
            </main>
            <Footer />
        </ViewTransitions>
    );
};

export default Layout;
