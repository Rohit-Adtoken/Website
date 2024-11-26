import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex-1 bg-white p-6 lg:p-12 flex flex-col">
      {/* Navbar container */}
      <div className="flex justify-between lg:justify-end space-x-6 mb-6 items-center w-full mt-0">
        {/* Navbar Items */}
        <a href="#" className="text-black hover:text-indigo-400">
          <span>Home</span>
        </a>
        <a href="#" className="text-black hover:text-indigo-400">
          <span>Promote and Earn</span>
        </a>
        <a href="#" className="text-black hover:text-indigo-400">
          <span>Earn on X</span>
        </a>
        <a href="#" className="text-black hover:text-indigo-400">
          <span>All Partners</span>
        </a>
        <a href="#" className="text-black hover:text-indigo-400">
          <span>Resources</span>
        </a>

        {/* User Profile (Icon + Username Button) */}
        <div className="flex items-center space-x-6">
          {/* User Icon */}
          <span>👤</span>

          {/* Username Button */}
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none">
            @Username
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
