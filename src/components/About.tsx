import { MotionDiv, MotionH2 } from '@/components/Motion';
import { FaBolt, FaCode, FaPalette, FaUsers } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            icon: FaCode,
            title: 'Clean Code',
            description:
                'Writing maintainable and scalable code following best practices',
        },
        {
            icon: FaPalette,
            title: 'Modern Design',
            description: 'Creating beautiful and intuitive user interfaces',
        },
        {
            icon: FaBolt,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency',
        },
        {
            icon: FaUsers,
            title: 'Collaboration',
            description: 'Working effectively in team environments',
        },
    ];

    return (
        <section
            id="about"
            className="p-4 md:p-6"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div className="mx-auto md:max-w-4xl">
                <MotionH2
                    className="text-center text-4xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </MotionH2>

                <MotionDiv
                    className="glass rounded-2xl p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p
                        className="mb-6 text-xl leading-relaxed"
                        style={{ color: 'var(--secondary)' }}
                    >
                        As a dedicated Fullstack Web Developer, I specialize in building
                        scalable and user-centric applications. My journey in tech has
                        equipped me with a strong foundation in both frontend and backend
                        technologies.
                    </p>
                    <p
                        className="text-xl leading-relaxed"
                        style={{ color: 'var(--secondary)' }}
                    >
                        I&apos;m passionate about creating digital experiences that not
                        only look great but also provide exceptional user experiences.
                        When I&apos;m not coding, you can find me exploring new
                        technologies or contributing to open-source projects.
                    </p>
                </MotionDiv>

                <MotionDiv
                    className="glass rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className="mb-8 text-center text-2xl font-semibold"
                        style={{ color: 'var(--foreground)' }}
                    >
                        What I Bring to the Table
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {highlights.map((highlight, index) => (
                            <MotionDiv
                                key={highlight.title}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                >
                                    <highlight.icon className="h-8 w-8 text-white" />
                                </div>
                                <h4
                                    className="mb-3 text-lg font-semibold"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {highlight.title}
                                </h4>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: 'var(--secondary)' }}
                                >
                                    {highlight.description}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>
                </MotionDiv>
            </div>
        </section>
    );
};

export default About;
