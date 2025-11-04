import AnimatedLogo from './AnimatedLogo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <AnimatedLogo size={88} />
          </div>
          <img 
            src="https://media.licdn.com/dms/image/D5635AQHlZ1R9-eiu9g/profile-framedphoto-shrink_400_400/0/1667312177891?e=1680991200&v=beta&t=7XgJ-u6PdFwgMP2fShYuAm2-DXfYwGvIvlF8GEhx2F4"
            alt="Adam Olson"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Adam Olson
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Product Support Specialist
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            As a professional Product Support Associate, I possess exceptional communication skills 
            and a growth mindset that drives me to continually improve and develop my expertise. 
            I am seeking a position within a reputable company that will provide me with the opportunity 
            to leverage my skills and experience in a proactive and impactful manner, with a focus on 
            effectively solving client problems and enhancing the overall reputation of the organization.
          </p>
        </div>
      </div>
    </section>
  );
}
