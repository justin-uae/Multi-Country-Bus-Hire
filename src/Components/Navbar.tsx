import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getCountryData } from '../data/data';
import ContactModal from './QuoteModal'; // Assuming you have this component

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const data = getCountryData();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Transfers', href: '/transfers' },
    { name: 'Shuttles', href: '/shuttles' },
    { name: 'School trips', href: '/school-trips' },
    { name: 'Corporate events', href: '/corporate-events' },
    { name: 'About Us', href: '/about' }
  ];

  const linkClasses = (href: string) => {
    const base = "px-3 py-2 rounded-md text-base font-medium";
    const isActive = location.pathname === href;
    return isActive
      ? `${base} text-blue-600 underline`
      : `${base} text-gray-700 hover:text-blue-600 hover:underline`;
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl">{data.logo.icon}</div>
          <span className="text-2xl font-bold">
            <span className="text-blue-600">Bus</span>
            <span className="text-orange-500">{data.logo.text.replace('Bus', '')}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={linkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <ContactModal />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={
                  linkClasses(item.href).replace("text-base", "text-sm") +
                  " block w-full"
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2">
              <ContactModal />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;