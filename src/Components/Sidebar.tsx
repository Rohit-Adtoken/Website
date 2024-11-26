import React from 'react';

// Sidebar Component
const Sidebar: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left Flexbox (Sidebar) */}
      <div className="w-full lg:w-1/5 bg-gray-100 text-black p-6 flex flex-col space-y-6 min-h-screen">
        
        {/* Create New Listing Button */}
        <h1 className="text-2xl font-bold mb-6 flex justify-center items-center">
          <img src="Images/Logo.jpeg" alt="New Listing Icon" className="w-30 h-8" />
        </h1>
        
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-indigo-700 focus:outline-none">
          + Create New Listing
        </button>

        {/* Sidebar Content */}
        <ul className="space-y-4 flex-grow">
          <li className="flex items-center space-x-4">
            <img src="Images/LogoD.jpeg" alt="Dashboard Icon" className="w-6 h-6" />
            <a href="#" id="newListing" className="text-black hover:text-indigo-400">Dashboard</a>
          </li>
          <li className="flex items-center space-x-4">
            <img src="Images/LogoA.jpeg" alt="My Campaigns Icon" className="w-6 h-6" />
            <a href="#" id="myCampaigns" className="text-black hover:text-indigo-400">My Campaigns</a>
          </li>
          <li className="flex items-center space-x-4">
            <img src="Images/LogoAL.jpeg" alt="Asset Library Icon" className="w-6 h-6" />
            <a href="#" id="assetLibrary" className="text-black hover:text-indigo-400">Asset Library</a>
          </li>
          <li className="flex items-center space-x-4">
            <img src="Images/LogoG.jpeg" alt="Get Help Icon" className="w-6 h-6" />
            <a href="#" id="getHelp" className="text-black hover:text-indigo-400">Get Help</a>
          </li>
        </ul>

        {/* Footer in Sidebar (always at the bottom) */}
        <div className="mt-auto flex flex-col items-center pt-4">
          <ul className="space-y-4 text-center">
            <li>
              <button className="bg-gray-100 text-black w-full px-5 py-2 rounded-lg hover:bg-gray-300 focus:outline-none flex items-center justify-center">
                <img src="Images/LogoL.jpeg" alt="Logout Icon" className="w-4 h-4 mr-2" />
                Logout
              </button>
            </li>
            <li><a href="#" id="helpFeedback" className="text-black hover:text-indigo-400">? Help & Feedback</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
