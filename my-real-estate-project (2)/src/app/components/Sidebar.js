// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-200 p-4">
      
      <ul className='bg-rose-50 m-5 py-5 pl-8 pr-2 list-disc'>
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <li className="mb-2 hover:text-rose-500 hover:text-xl"><a href="#">Residential</a></li>
        <li className="mb-2 hover:text-rose-500 hover:text-xl"><a href="#">Commercial</a></li>
        <li className="mb-2 hover:text-rose-500 hover:text-xl"><a href="#">Land</a></li>
        <li className="mb-2 hover:text-rose-500 hover:text-xl"><a href="#">Luxury</a></li>
        <li className="mb-2 hover:text-rose-500 hover:text-xl"><a href="#">Rentals</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
