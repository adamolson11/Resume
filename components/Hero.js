import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-hb-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-hb-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <AnimatedLogo />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Adam Olson
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-hb-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Product Support Specialist
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-slate-300 leading-relaxed">
            As a professional Product Support Associate, I possess exceptional communication skills 
            and a growth mindset that drives me to continually improve and develop my expertise. 
            I am seeking a position within a reputable company that will provide me with the opportunity 
            to leverage my skills and experience in a proactive and impactful manner, with a focus on 
            effectively solving client problems and enhancing the overall reputation of the organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
