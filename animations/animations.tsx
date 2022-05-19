export const easing = [0.175, 0.85, 0.42, 0.96];

export const imageVariants = {
  exit: { y: -20, opacity: 0, transition: { duration: 1, ease: easing } },
  enter: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing,
      delay: 1,
    },
  },
};
