import { CmsLayout } from '@/components/cms/cms-layout';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <CmsLayout>{children}</CmsLayout>;
};

export default Layout;
