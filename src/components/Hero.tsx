import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="about" className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-indigo-600 dark:text-indigo-400">
              Full Stack & Backend
            </span>{' '}
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Building fast, scalable, and elegant web experiences for the modern web.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I’m a full stack developer with over 5 years of experience building scalable, high-performance applications. On the backend, I work with Laravel and PHP to design robust architectures, while on the frontend I craft responsive, dynamic interfaces using React, TypeScript, and Vue. I’m passionate about clean code, performance optimization, and delivering seamless user experiences.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/OnesmusWane" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/onesmus-wane-9a19a61a0/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
               <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 
                2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 
                17.34V10.67H5.67V17.34H8.34M7 
                9.44A1.33 1.33 0 1 0 7 6.78A1.33 1.33 0 0 0 
                7 9.44M18.33 17.34V13.5C18.33 11.5 
                17.22 10.55 15.78 10.55C14.67 10.55 
                14.11 11.22 13.83 11.72V10.67H11.17V17.34H13.83V13.78C13.83 
                13 14.06 12.28 15 12.28C15.91 12.28 15.94 13.06 
                15.94 13.83V17.34H18.33Z" />
              </svg>
            </a>
            <a href="https://x.com/OnesmusWane" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-7 h-7" fill="currentColor"  viewBox="0 0 24 24"  aria-hidden="true"  >
                    <path d="M18.244 2H21.5l-7.68 8.77L22 22h-6.213l-4.867-5.82L5.5 22H2.24l8.2-9.377L2 2h6.274l4.347 5.166L18.244 2zm-2.177 18h1.206L8.03 4H6.753l9.314 16z" />
                  </svg>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-600 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
              <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Developer portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full p-3">
                <code className="font-mono font-bold">{'{ code }'}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" aria-label="Scroll to skills section">
          <ArrowDownIcon className="text-indigo-600 dark:text-indigo-400" size={24} />
        </a>
      </div>
    </section>;
}