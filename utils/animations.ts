import type { CSSProperties } from "react";

export const revealViewport = {
  once: true,
  rootMargin: "0px 0px 28% 0px",
  threshold: 0.08,
};

export const getRevealDelay = (delayMs: number = 0) =>
  ({
    "--reveal-delay": `${delayMs}ms`,
  }) as CSSProperties;

export const getIntroDelay = (delayMs: number = 0) =>
  ({
    "--enter-delay": `${delayMs}ms`,
  }) as CSSProperties;

export const getTagDelay = (delayMs: number = 0) =>
  ({
    "--tag-delay": `${delayMs}ms`,
  }) as CSSProperties;

export const getRevealDirection = (index: number) => {
  if (index % 3 === 0) {
    return "reveal-left";
  }

  if (index % 3 === 2) {
    return "reveal-right";
  }

  return "reveal-up";
};
