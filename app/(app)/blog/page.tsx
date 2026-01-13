import { findAllProjectAction } from '@/action';

const Page = async () => {
    const data = await findAllProjectAction({
        isArchive: false,
    });

    console.log('data', data);

    return (
        <>
            <section>
                <h1>Blog</h1>
            </section>
        </>
    );
};

export default Page;
