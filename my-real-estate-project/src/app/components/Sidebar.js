// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        <li className="mb-2"><a href="#">Residential</a></li>
        <li className="mb-2"><a href="#">Commercial</a></li>
        <li className="mb-2"><a href="#">Land</a></li>
        <li className="mb-2"><a href="#">Luxury</a></li>
        <li className="mb-2"><a href="#">Rentals</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
