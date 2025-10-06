import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="about" className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-indigo-600 dark:text-indigo-400">
              Full Stack
            </span>{' '}
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Crafting modern web experiences with cutting-edge technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I build scalable applications with React, Node.js, and cloud
            technologies. Passionate about clean code, performance optimization,
            and delivering exceptional user experiences.
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <TwitterIcon size={24} />
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