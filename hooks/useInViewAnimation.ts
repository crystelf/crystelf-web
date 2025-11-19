import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit & {
  once?: boolean;
};

/**
 * Returns a ref and visibility flag that turns true once the element enters the viewport.
 * Use it to defer triggering entrance animations until the element is scrolled into view.
 */
function useInViewAnimation<T extends HTMLElement = HTMLElement>(options?: Options) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  const {
    once = true,
    root = null,
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.2,
  } = options || {};

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [
    once,
    root,
    rootMargin,
    Array.isArray(threshold) ? threshold.join(",") : threshold,
  ]);

  return [elementRef, isVisible] as const;
}

export default useInViewAnimation;

