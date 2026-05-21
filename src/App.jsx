import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import PageLoader from './components/PageLoader';
import FloatingResumeCta from './components/FloatingResumeCta';
import { useTheme } from './hooks/useTheme';
import { usePageLoader } from './hooks/usePageLoader';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const loading = usePageLoader(650);

  return (
    <>
      <PageLoader show={loading} />
      <ScrollProgress />
      <div className={`app-shell min-h-screen ${loading ? 'overflow-hidden' : ''}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main id="main-content" className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
        </main>
        <Footer />
        {!loading && <FloatingResumeCta />}
      </div>
    </>
  );
}
