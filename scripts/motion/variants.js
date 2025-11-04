// Shared Framer Motion animation variants for consistent animations across components

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const logoVariant = {
  initial: { opacity: 0, scale: 0.88 },
  animate: {
    opacity: [0.85, 1, 0.94, 1],
    scale: [0.96, 1, 0.98, 1],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut'
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -6,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
