import { Spinner } from '@/components/ui/spinner';

const Loading = () => {
    return (
        <section className="flex min-h-screen items-center justify-center">
            <Spinner className="text-primary size-20" />
        </section>
    );
};

export default Loading;
