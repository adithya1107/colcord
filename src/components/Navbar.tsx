import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap as Graduation } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Graduation className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">ColCord</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
            <Link to="/product" className="text-white hover:text-gray-300 transition">Product</Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;