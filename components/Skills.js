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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Summary of Qualifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                {skill}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 space-y-4 text-gray-600 dark:text-gray-400">
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Trusted communicator to business and retail customers, including leading conference calls and training sessions.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Experience training employees on the job and in a class setting.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Demonstrated persistence as the lead research team associate.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Excellent troubleshooter with knowledge of different technical languages and software.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Capable multi-tasker with managing multiple client's needs.</span>
          </p>
          <p className="flex items-start">
            <span className="mr-2">•</span>
            <span>Efficient and productive working with data entry.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
