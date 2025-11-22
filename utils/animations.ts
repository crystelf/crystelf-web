/**
 * 统一的动画配置和预设
 * 使用 motion 库提供弹性动画和交互动画
 */

// 弹性动画预设
export const springConfig = {
  // 默认弹性动画 - 自然流畅
  default: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 1,
  },
  // 柔和弹性 - 适合大元素
  gentle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
    mass: 1,
  },
  // 快速弹性 - 适合小元素和按钮
  snappy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  },
  // 弹性回弹 - 更明显的弹性效果
  bouncy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 1,
  },
  // 平滑过渡 - 接近线性但更自然
  smooth: {
    type: "spring" as const,
    stiffness: 250,
    damping: 30,
    mass: 1,
  },
};

// 页面初始化动画配置
export const pageInitial = {
  opacity: 0,
  y: 20,
};

export const pageAnimate = {
  opacity: 1,
  y: 0,
  transition: springConfig.default,
};

// 元素进入视口动画配置
export const fadeInUpInitial = {
  opacity: 0,
  y: 30,
};

export const fadeInUpAnimate = {
  opacity: 1,
  y: 0,
  transition: springConfig.default,
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
  margin: "0px 0px -10% 0px",
  amount: 0.2,
};

// 延迟动画配置（用于列表项）
export const getStaggerConfig = (delay: number = 0.1) => ({
  ...springConfig.default,
  delay,
});

