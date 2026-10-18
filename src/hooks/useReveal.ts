import { useEffect, useRef, type CSSProperties } from "react";

const REVEALED = "data-revealed";

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") {
    return null;
  }
  sharedObserver ??= new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute(REVEALED, "");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );
  return sharedObserver;
}

export function useReveal<T extends HTMLElement = HTMLElement>(index = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const observer = getObserver();
    if (!observer) {
      node.setAttribute(REVEALED, "");
      return;
    }
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return {
    ref,
    "data-reveal": "",
    style: index > 0 ? ({ "--reveal-index": index } as CSSProperties) : undefined,
  };
}
