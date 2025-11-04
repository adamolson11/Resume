export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400 mb-4">
          Thank you for your time and consideration. References available upon request.
        </p>
        <a 
          href="https://www.linkedin.com/in/adam-olson-aab562201/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
        >
          Visit my LinkedIn Profile
        </a>
        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Adam Olson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
