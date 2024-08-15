import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-lg'>
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <h1 className='text-2xl sm:text-4xl font-extrabold flex space-x-2'>
            <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">Solid</span>
            <span className="text-slate-800">Driving</span>
            <span className="text-slate-800">School</span>
          </h1>
        </div>

        
        <div className="flex-grow flex justify-center mt-4 sm:mt-0">
          <form className="bg-slate-100 p-3 rounded-lg shadow-md flex items-center">
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent border-none outline-none px-4 py-2 text-sm rounded-l-lg placeholder-gray-500'
            />
            <button type="submit" className="bg-teal-500 text-white px-3 py-2 rounded-r-lg flex items-center">
              <FaSearch />
            </button>
          </form>
        </div>

        
        <nav className="flex space-x-6 mt-4 sm:mt-0">
          <Link to="/" className="text-lg font-semibold text-slate-700 hover:text-teal-600 transition">Home</Link>
          <Link to="/about" className="text-lg font-semibold text-slate-700 hover:text-teal-600 transition">About</Link>
          <Link to="/sign-In" className="text-lg font-semibold text-slate-700 hover:text-teal-600 transition">Sign-In</Link>
        </nav>
      </div>
    </header>
  );
}


