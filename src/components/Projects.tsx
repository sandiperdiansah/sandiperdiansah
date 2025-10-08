import { MotionH2 } from '@/components/Motion';
import List from '@/components/projects/list';
import { PROJECTS } from '@/constants';

const Projects = () => {
    return (
        <section
            id="projects"
            className="px-6 py-20"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div className="mx-auto max-w-6xl">
                <MotionH2
                    className="mb-12 text-center text-4xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Projects
                </MotionH2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, i) => (
                        <List
                            key={i}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
