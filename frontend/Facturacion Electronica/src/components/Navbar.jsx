import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex text-red-600 items-center">
              Facturacion
            </div>
          </div>

          <div className="flex items-center">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;