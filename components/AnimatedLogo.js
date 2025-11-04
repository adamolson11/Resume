import { motion } from 'framer-motion';

export default function AnimatedLogo({ size = 88 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{
        opacity: [0.85, 1, 0.94, 1],
        scale: [0.96, 1, 0.98, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }}
      style={{ width: size, height: size }}
      className="animated-logo flex items-center justify-center rounded-xl
                 bg-gradient-to-br from-hb-blue to-cyan-400 text-black text-2xl md:text-4xl font-extrabold shadow-xl"
      aria-hidden="true"
    >
      AO
    </motion.div>
  );
}