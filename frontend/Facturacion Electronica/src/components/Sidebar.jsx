import React from 'react';
import { NavLink } from 'react-router-dom'
import { AiFillCalculator, AiOutlineBarChart,AiOutlineFileSearch} from "react-icons/ai";

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <AiOutlineBarChart /> },
    { path: '/facturas', label: 'Facturas', icon: <AiOutlineFileSearch /> },
    { path: '/facturas/crear', label: 'Crear Factura', icon: <AiFillCalculator /> },
  ];
  const textDecoration = 'text-2xl font-bold mb-6'
  return (
    <aside className="w-64 min-h-screen bg-gray-800">
      <div className="py-4">
        <nav className="mt-5 ">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                  `flex items-center py-2 px-6 ${
                    isActive 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              end
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;