import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks, navSectionIds, personal } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navSectionIds);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`navbar-root ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
      <nav className="section-container flex h-16 min-h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
        <button type="button" onClick={() => handleNav('home')} className="navbar-brand shrink-0" aria-label="Go to home">
          PB<span className="text-blue-500">.</span>
        </button>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={`navbar-link whitespace-nowrap ${isActive ? 'navbar-link-active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="navbar-icon-btn">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href={personal.resumePath} download className="navbar-resume-btn">
            <FiDownload size={16} />
            <span className="hidden lg:inline">Download Resume</span>
            <span className="lg:hidden">Resume</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-1 md:hidden">
          <a href={personal.resumePath} download className="navbar-resume-btn px-3 py-2" aria-label="Download resume">
            <FiDownload size={16} />
          </a>
          <button type="button" onClick={toggleTheme} className="navbar-icon-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="navbar-icon-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="navbar-mobile-panel md:hidden">
          <ul className="flex max-h-[min(70vh,32rem)] flex-col gap-1 overflow-y-auto px-4 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`navbar-mobile-link ${isActive ? 'navbar-link-active' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li className="pt-3">
              <a href={personal.resumePath} download className="navbar-resume-btn w-full">
                <FiDownload size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
