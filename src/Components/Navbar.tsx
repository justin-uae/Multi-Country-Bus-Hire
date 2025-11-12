import React, { useState } from 'react';
import { getCountryData } from '../data/data';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const data = getCountryData();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Transfers', path: '/transfers' },
        { name: 'School trips', path: '/school-trips' },
        { name: 'Corporate events', path: '/corporate-events' },
        { name: 'About Us', path: '/about' }
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to={'/'} className="flex items-center space-x-2">
                        <div className="text-3xl">{data.logo.icon}</div>
                        <span className="text-2xl font-bold">
                            <span className="text-blue-600">Bus</span>
                            <span className="text-orange-500">{data.logo.text.replace('Bus', '')}</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            {data.hero.ctaText}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            {data.hero.ctaText}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;