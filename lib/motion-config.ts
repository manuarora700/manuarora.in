export const SPRING_CONFIG = {
  type: "spring" as const,
  visualDuration: 0.77,
  bounce: 0.2,
};

export const POP_IN_VARIANT = {
  initial: { opacity: 0, y: 20, scale: 0.6, rotateY: 40 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
  },
  exit: { opacity: 0, y: 20, scale: 0.6 },
};

export const GENERAL_VARIANT = {
  initial: { opacity: 0, scale: 0.6, rotateY: 40, rotateX: 40 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
  },
  exit: { opacity: 0, y: 20, scale: 0.6 },
};
