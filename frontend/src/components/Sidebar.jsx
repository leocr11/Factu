import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillCalculator, AiOutlineBarChart,AiOutlineFileSearch} from "react-icons/ai";

const Sidebar = () => {
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <AiOutlineBarChart /> ,className: 'font-semibold text-lg'},
    { path: '/facturas', label: 'Facturas', icon: <AiOutlineFileSearch /> },
    { path: '/facturas/crear', label: 'Crear Factura', icon: <AiFillCalculator /> },
  ];
  const textDecoration = 'underline underline-offset-4'
  return (
        <nav className="mt-5 ">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>isActive 
                    ? textDecoration
                    : 'text-red-300 hover:bg-white-700 hover:text-white'}
              end
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-green-500 ">{item.label}</span>
            </NavLink>
          ))}
        </nav>
  );
};

export default Sidebar;