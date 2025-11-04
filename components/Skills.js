import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "Technical Troubleshooting",
    "Customer Communication",
    "Training & Development",
    "Research & Analysis",
    "Data Entry",
    "Multi-tasking",
    "Problem Resolution",
    "Software Support",
    "XML & Java",
    "CMS Systems"
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Summary of Qualifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="gradient-badge p-6 rounded-lg shadow-md cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg text-white text-center font-medium">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 space-y-4 text-slate-300 glass p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Trusted communicator to business and retail customers, including leading conference calls and training sessions.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Experience training employees on the job and in a class setting.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Demonstrated persistence as the lead research team associate.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Excellent troubleshooter with knowledge of different technical languages and software.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Capable multi-tasker with managing multiple client's needs.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2 text-hb-blue">•</span>
            <span>Efficient and productive working with data entry.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
