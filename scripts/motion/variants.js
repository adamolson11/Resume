// scripts/motion/variants.js
// Implements Creative Motion Table v1 as Framer Motion variants.

// Easing curves (Creative Motion Table v1)
export const easings = {
  easeSoft: [0.2, 0.9, 0.2, 1],
  easeFast: [0.22, 1, 0.36, 1],
};

// Check if user prefers reduced motion
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// 1. Section Reveals (Hero, Projects, Timeline, Skills)
export const sectionReveal = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.9,
      ease: easings.easeSoft,
      staggerChildren: prefersReducedMotion ? 0 : 0.12,
    }
  }
};

// 2. Card Hover (ProjectCard)
export const cardHover = {
  rest: { 
    y: 0,
    scale: 1,
  },
  hover: {
    y: prefersReducedMotion ? 0 : -8,
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: {
      duration: 0.18,
      ease: easings.easeFast,
    }
  }
};

// Card reveal in list
export const card = {
  hidden: { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5,
      ease: easings.easeSoft,
    }
  }
};

// 3. Modal Enter/Exit (ProjectModal)
export const modal = {
  hidden: {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.24,
      ease: easings.easeFast,
    }
  },
  exit: {
    opacity: 0,
    scale: prefersReducedMotion ? 1 : 0.94,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.18,
      ease: easings.easeFast,
    }
  }
};

export const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.85,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.24,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.18,
    }
  }
};

// 4. Logo Idle Animation (AnimatedLogo)
export const logoIdle = {
  initial: { 
    opacity: 1, 
    scale: 1 
  },
  animate: prefersReducedMotion ? {} : {
    opacity: [0.88, 1, 0.88],
    scale: [0.96, 1, 0.96],
  },
  transition: prefersReducedMotion ? {} : {
    duration: 3.6,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  }
};

// 5. List Stagger (Projects grid, Timeline items)
export const listStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.08,
      delayChildren: prefersReducedMotion ? 0 : 0.1,
    }
  }
};

// Legacy exports for backward compatibility
export const fadeInUp = sectionReveal;
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
export const cardVariant = card;
export const logoVariant = logoIdle;
export const staggerContainer = listStagger;
export const hoverLift = cardHover;
