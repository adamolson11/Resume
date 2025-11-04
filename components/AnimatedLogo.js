import { motion } from 'framer-motion';
import { logoIdle } from '../scripts/motion/variants';

export default function AnimatedLogo({ size = 88 }) {
  return (
    <motion.div
      initial={logoIdle.initial}
      animate={logoIdle.animate}
      transition={logoIdle.transition}
      style={{ width: size, height: size }}
      className="animated-logo flex items-center justify-center rounded-xl
                 bg-gradient-to-br from-hb-blue to-cyan-400 text-black text-2xl md:text-4xl font-extrabold shadow-xl"
      aria-hidden="true"
    >
      AO
    </motion.div>
  );
}