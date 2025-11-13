// components/Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { getCountryData } from '../data/basecode';

// Wrapper components to handle className
const MapPinIcon = ({ className }: { className?: string }) => <MapPin className={className} />;
const PhoneIcon = ({ className }: { className?: string }) => <Phone className={className} />;
const MailIcon = ({ className }: { className?: string }) => <Mail className={className} />;

interface Service {
    name: string;
    href: string;
}

interface SocialIcon {
    Icon: React.ComponentType<{ className?: string }>;
    href: string;
    id: string;
}

export default function Footer() {
    const data = getCountryData();

    const icons: SocialIcon[] = [
        { Icon: FaWhatsapp, href: data.company.whatsapp, id: "1" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
                    {/* Contact */}
                    <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                        <div className="space-y-4">
                            <a href="/" className="flex justify-center sm:justify-start items-center">
                                <img
                                    src={data.company.logo}
                                    width={150}
                                    height={49}
                                    loading="lazy"
                                    alt={`${data.company.name} Logo`}
                                    className="h-auto"
                                />
                            </a>

                            <div className="space-y-3">
                                <div className="flex justify-center sm:justify-start items-start space-x-2">
                                    <MapPinIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <address className="not-italic text-sm sm:text-base">
                                        {data.company.address}
                                    </address>
                                </div>
                                <div className="flex justify-center sm:justify-start items-center space-x-2">
                                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                                    <a href={`tel:${data.company.phone}`} className="hover:text-white text-sm sm:text-base">
                                        {data.company.phone}
                                    </a>
                                </div>
                                <div className="flex justify-center sm:justify-start items-center space-x-2">
                                    <MailIcon className="h-5 w-5 text-blue-500" />
                                    <a href={`mailto:${data.company.email}`} className="hover:text-white text-sm sm:text-base">
                                        {data.company.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Services</h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            {data.footerServices.map((service: Service, index: number) => (
                                <li key={index}>
                                    <a href={service.href} className="hover:text-white">
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li><a href="/about-us" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                        </ul>
                    </div>

                    {/* Social - WhatsApp only */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact Us</h4>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            {icons.map(({ Icon, href, id }: SocialIcon) => (
                                <a
                                    key={id}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-green-500 transition transform hover:scale-110"
                                >
                                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} {data.company.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}