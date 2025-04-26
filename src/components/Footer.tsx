import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-white" />
            <a href="mailto:shrisai@colcord.in" className="text-white hover:text-gray-300">
              shrisai@colcord.in
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ColCord. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;