import { useCallback } from 'react';

const NAV_OFFSET = 88;

export function useScrollToSection() {
  return useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, []);
}
