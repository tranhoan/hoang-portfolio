export const easing = [0.215, 0.61, 0.355, 1];

export const imageVariants = {
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.5, ease: easing, staggerChildren: 0.5 },
  },
  enter: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing,
      delay: 1,
    },
  },
};
