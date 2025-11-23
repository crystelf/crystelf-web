/**
 * 统一的动画配置和预设
 * 使用 motion 库提供弹性动画和交互动画
 */

// 弹性动画预设
export const springConfig = {
  default: {
    type: "spring" as const,
    stiffness: 260,
    damping: 28,
    mass: 1,
  },
  gentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 26,
    mass: 1,
  },
  snappy: {
    type: "spring" as const,
    stiffness: 420,
    damping: 24,
    mass: 0.85,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 1,
  },
  smooth: {
    type: "spring" as const,
    stiffness: 220,
    damping: 32,
    mass: 1,
  },
};

// 页面初始化动画配置
export const pageInitial = {
  opacity: 0,
  y: 10,
};

export const pageAnimate = {
  opacity: 1,
  y: 0,
  transition: { ...springConfig.smooth, delay: 0.05 },
};

// 元素进入视口动画配置
export const fadeInUpInitial = {
  opacity: 0,
  y: 20,
};

export const fadeInUpAnimate = {
  opacity: 1,
  y: 0,
  transition: springConfig.gentle,
};

export const fadeInTo = {
  opacity: 1,
  x: 0,
  y: 0,
  transition: springConfig.smooth,
};

// 卡片悬停动画
export const cardHover = {
  y: -8,
  scale: 1.02,
  transition: springConfig.snappy,
};

export const cardTap = {
  scale: 0.98,
  transition: springConfig.snappy,
};

// 按钮交互动画
export const buttonHover = {
  scale: 1.05,
  y: -2,
  transition: springConfig.snappy,
};

export const buttonTap = {
  scale: 0.95,
  transition: springConfig.snappy,
};

// 视口进入动画配置（用于 Intersection Observer）
export const viewportOptions = {
  once: true,
  margin: "0px 0px -20% 0px",
  amount: 0.3,
};

// 延迟动画配置（用于列表项）
export const getStaggerConfig = (delay: number = 0.1) => ({
  ...springConfig.smooth,
  delay,
});

export const getFadeInitial = (
  direction: "up" | "left" | "right" = "up",
  distance: number = 20,
) => {
  const base = { opacity: 0 } as { opacity: number; x?: number; y?: number };
  if (direction === "up") return { ...base, y: distance };
  if (direction === "left") return { ...base, x: -distance };
  return { ...base, x: distance };
};

