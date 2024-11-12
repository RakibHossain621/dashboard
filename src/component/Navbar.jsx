import React from 'react';
import { FaSearch, FaCog, FaBell, FaUserCircle } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const icons = [
  { id: 1, icon: <MdLanguage className="text-gray-600" />, label: 'Language' },
  {
    id: 2,
    icon: (
      <div className="relative">
        <FaBell className="text-gray-600" />
        <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs text-white bg-red-500 rounded-full text-center">4</span>
      </div>
    ),
    label: 'Notifications'
  },
  { id: 3, icon: <FaCog className="text-gray-600" />, label: 'Settings' },
  { id: 4, icon: <FaUserCircle className="text-gray-600" size={24} />, label: 'Profile' }
];

const Navbar = () => {
  return (
    <section className="py-3 ">
      <div className="flex items-center justify-between px-4">
        {/* Search Section */}
        <div className="flex items-center space-x-2">
          <FaSearch className="text-gray-500" />
          <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
            ⌘K
          </div>
        </div>
        
        {/* Icon Section */}
        <div className="flex items-center space-x-4">
          {icons.map((item) => (
            <div key={item.id} title={item.label}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
