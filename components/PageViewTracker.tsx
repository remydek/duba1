'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XZFJ1PZBZT', { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
