import React from 'react';
import { getCountryData } from '../data/data';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const data = getCountryData();

    const socialIcons = {
        facebook: Facebook,
        instagram: Instagram,
        youtube: Youtube,
        twitter: Twitter,
        linkedin: Linkedin
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Contact Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="text-3xl">{data.logo.icon}</div>
                            <span className="text-2xl font-bold">
                                <span className="text-blue-400">Bus</span>
                                <span className="text-orange-400">{data.logo.text.replace('Bus', '')}</span>
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <span className="text-sm">{data.contact.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a href={`tel:${data.contact.phone}`} className="text-sm hover:text-white transition-colors">
                                    {data.contact.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a href={`mailto:${data.contact.email}`} className="text-sm hover:text-white transition-colors">
                                    {data.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {data.footer.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.url}
                                            className="text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            {data.footer.copyright}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-white mr-2">Follow Us</span>
                            {data.footer.social.map((social, index) => {
                                const IconComponent = social?.icon
                                return IconComponent ? (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <IconComponent />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;