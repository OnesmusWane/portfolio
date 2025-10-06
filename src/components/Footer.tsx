import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-xl text-indigo-400">Onesmus Wane</span>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating elegant solutions to complex problems through code.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button onClick={scrollToTop} className="p-3 bg-indigo-600/20 rounded-full hover:bg-indigo-600/30 transition-colors mb-4" aria-label="Scroll to top">
              <ArrowUpIcon size={20} className="text-indigo-400" />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Onesmus Wane. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}