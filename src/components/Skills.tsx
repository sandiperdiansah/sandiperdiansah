import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import {
    SiChakraui,
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import { MotionDiv, MotionH2 } from './Motion';

const Skills = () => {
    const frontendSkills = [
        { name: 'HTML', icon: FaHtml5 },
        { name: 'CSS', icon: FaCss3Alt },
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'TailwindCSS', icon: SiTailwindcss },
        { name: 'ChakraUI', icon: SiChakraui },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
    ];

    const backendSkills = [
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Prisma', icon: SiPrisma },
    ];

    return (
        <section
            id="skills"
            className="px-6 py-20"
            style={{ backgroundColor: 'var(--accent)' }}
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
                <MotionH2
                    className="mb-12 text-center text-4xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Skills
                </MotionH2>

                {/* First row - Frontend */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {frontendSkills.map((skill, index) => (
                            <MotionDiv
                                key={`${skill.name}-${index}`}
                                className="flex-shrink-0 text-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className="glass mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ border: `2px solid var(--primary)` }}
                                >
                                    <skill.icon
                                        className="text-2xl"
                                        style={{ color: 'var(--primary)' }}
                                    />
                                </div>
                                <h3
                                    className="text-sm font-medium"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {skill.name}
                                </h3>
                            </MotionDiv>
                        ))}
                    </div>
                </div>

                {/* Second row - Backend */}
                <div className="mt-3">
                    <div className="flex flex-wrap justify-center gap-8">
                        {backendSkills.map((skill, index) => (
                            <MotionDiv
                                key={`${skill.name}-${index}`}
                                className="flex-shrink-0 text-center"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className="glass mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{ border: `2px solid var(--primary)` }}
                                >
                                    <skill.icon
                                        className="text-2xl"
                                        style={{ color: 'var(--primary)' }}
                                    />
                                </div>
                                <h3
                                    className="text-sm font-medium"
                                    style={{ color: 'var(--foreground)' }}
                                >
                                    {skill.name}
                                </h3>
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
