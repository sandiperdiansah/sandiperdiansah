import { Spinner } from '@/components/ui/spinner';

const Loading = () => {
    return (
        <section className="absolute inset-0 z-9999 flex min-h-screen items-center justify-center bg-white">
            <Spinner className="text-primary size-16" />
        </section>
    );
};

export default Loading;
