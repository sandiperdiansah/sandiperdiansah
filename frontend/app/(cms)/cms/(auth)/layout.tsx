const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="fixed inset-0 z-999 flex min-h-screen flex-col items-center justify-center bg-white">
            <div className="w-full max-w-sm rounded-lg p-8 md:shadow-sm">{children}</div>
        </section>
    );
};

export default Layout;
