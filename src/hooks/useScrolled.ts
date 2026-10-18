import { useEffect, useState } from "react";

export function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}
