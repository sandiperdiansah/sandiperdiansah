import About from '@/components/About';
import Hero from '@/components/Hero';
import OngoingProject from '@/components/OngoingProject';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <OngoingProject />
        </>
    );
}
