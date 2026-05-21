import { useEffect, useState } from 'react';

export function usePageLoader(durationMs = 700) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), durationMs);
    return () => window.clearTimeout(timer);
  }, [durationMs]);

  return loading;
}
