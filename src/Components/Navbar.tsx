import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getCountryData } from '../data/data';
import ContactModal from './QuoteModal';

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
    const base = "px-3 py-2 rounded-md font-medium transition-colors duration-200";
    const isActive = location.pathname === href;
    return isActive
      ? `${base} text-blue-600 underline`
      : `${base} text-gray-700 hover:text-blue-600 hover:underline`;
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl sm:text-3xl">{data.logo.icon}</div>
            <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">
              <span className="text-blue-600">Bus</span>
              <span className="text-orange-500">{data.logo.text.replace('Bus', '')}</span>
            </span>
          </Link>

          {/* Desktop Nav - Hidden on mobile and tablet, visible on large screens */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${linkClasses(item.href)} text-sm xl:text-base whitespace-nowrap`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <ContactModal />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 sm:px-6 pt-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${linkClasses(item.href)} block text-base`}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <ContactModal />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;