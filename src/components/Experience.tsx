import { MotionDiv, MotionH2 } from '@/components/Motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: 'Frontend Web Developer Intern',
            company: 'Filkom, Universitas Pamulang',
            period: '6 months',
            location: 'Indonesia',
            description:
                'Developed responsive web applications using React, Next.js, and TypeScript. Collaborated with senior developers to deliver high-performance solutions.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        },
    ];

    return (
        <section
            id="experience"
            className="px-4 py-20 md:px-6"
            style={{ backgroundColor: 'var(--accent)' }}
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
                    Experience
                </MotionH2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <MotionDiv
                            key={index}
                            className="glass rounded-2xl p-8"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-full"
                                        style={{ backgroundColor: 'var(--primary)' }}
                                    >
                                        <FaBriefcase className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3
                                        className="text-xl font-semibold"
                                        style={{ color: 'var(--foreground)' }}
                                    >
                                        {exp.title}
                                    </h3>
                                    <p
                                        className="mb-2 text-lg font-medium"
                                        style={{ color: 'var(--primary)' }}
                                    >
                                        {exp.company}
                                    </p>
                                    <div
                                        className="mb-4 flex flex-wrap gap-4 text-sm"
                                        style={{ color: 'var(--secondary)' }}
                                    >
                                        <div className="flex items-center gap-1">
                                            <FaCalendarAlt className="h-4 w-4" />
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaMapMarkerAlt className="h-4 w-4" />
                                            {exp.location}
                                        </div>
                                    </div>
                                    <p
                                        className="mb-4 text-lg leading-relaxed"
                                        style={{ color: 'var(--secondary)' }}
                                    >
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border px-3 py-1 text-sm"
                                                style={{
                                                    borderColor: 'var(--primary)',
                                                    color: 'var(--primary)',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
