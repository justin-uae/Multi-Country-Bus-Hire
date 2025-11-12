// data.js - Multi-country bus hire application data

export const countryData = {
    // France (default)
    fr: {
        // General company info
        company: {
            name: "France Buses",
            phone: "+44 20 3834 3226",
            email: "info@francebuses.com",
            address: "37-39 Avenue Ledru Rollin, CS 11237, 75012 Paris, France",
            logo: "../public/images/logo2.png",
            whatsapp: "https://wa.me/442038343226"
        },

        // Navigation
        navigation: [
            { name: "Home", href: "/" },
            { name: "Transfers", href: "/transfers" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "School trips", href: "/school-trips" },
            { name: "Corporate events", href: "/corporate-events" },
            { name: "About Us", href: "/about-us" }
        ],

        // Footer services
        footerServices: [
            { name: "Corporate events", href: "/corporate-events" },
            { name: "School trips", href: "/school-trips" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "Transfers", href: "/transfers" },
            { name: "Home to school", href: "/school-trips" }
        ],

        // Hero section
        hero: {
            title: "The home of coach and minibus hire in",
            description: "Discover reliable and affordable coach and minibus hire in France with France Buses — ideal for corporate events, school trips, airport transfers, private tours, and group travel across the country.",
            image: "/images/bus-hire-transparent.png",
            frameImage: "/images/Frame.png",
            countryName: "France",
            cities: ["Paris", "Lyon", "Marseille", "Bordeaux"]
        },

        // Services section
        services: [
            {
                key: "corporate",
                title: "Corporate Events",
                description: "Make your corporate travel effortless with our premium coach hire services across France. Whether it's for board meetings, conferences, or company events, we offer dependable and comfortable transport for your team.",
                image: "/images/corporate21.png"
            },
            {
                key: "school",
                title: "School Trips",
                description: "Turn every educational journey into a safe and enjoyable experience with our trusted school coach hire service. Our child-friendly drivers and modern vehicles guarantee comfort and safety from start to finish.",
                image: "/images/school21.png"
            },
            {
                key: "shuttles",
                title: "Shuttles",
                description: "Experience smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services in France. Designed for convenience and comfort.",
                image: "/images/shuttle21.png"
            },
            {
                key: "transfers",
                title: "Transfers",
                description: "Enjoy seamless door-to-door transport with our professional transfer service anywhere in France. From airport pickups to city transfers, we provide a smooth, comfortable, and timely travel experience.",
                image: "/images/transfer21.png"
            },
            {
                key: "home",
                title: "Home to School",
                description: "Simplify your family's routine with our safe and reliable home to school transport service. Our professional drivers ensure punctuality and peace of mind for parents.",
                image: "/images/home21.png"
            }
        ],

        // About Us section
        aboutUs: {
            badge: "About Us",
            description: "At France Buses, we are proud to be one of the leading providers of reliable, comfortable, and affordable group transportation across France. From Paris to Marseille, Lyon to Bordeaux, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service.",
            image: "/images/abtus.png",
            features: [
                {
                    title: "Modern Fleet",
                    description: "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options."
                },
                {
                    title: "Experienced Drivers",
                    description: "Every France Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for a short city transfer or a long-distance journey."
                },
                {
                    title: "Tailored Travel Solutions",
                    description: "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across France. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly."
                },
                {
                    title: "Transparent Pricing",
                    description: "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel."
                }
            ]
        },

        // Testimonials
        testimonials: {
            badge: "Client Testimonials",
            title: "What Our Clients Say",
            categories: [
                { key: 'passengers', label: 'From passengers' },
                { key: 'corporate', label: 'From companies' },
                { key: 'school', label: 'From schools' }
            ],
            items: [
                {
                    key: 'passengers',
                    name: "Claire Dubois",
                    role: "Regular Commuter, Paris",
                    avatar: "avatar1",
                    message: "I travel frequently between Paris and Lyon for work. France Buses is always on time, and the coaches are spotless. The WiFi makes it easy to stay productive on the road.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Lucas Moreau",
                    role: "University Student, Toulouse",
                    avatar: "avatar2",
                    message: "As a student travelling between Toulouse and Bordeaux, France Buses has been reliable and affordable. The drivers are polite and always willing to help with luggage.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Sophie Martin",
                    role: "Family Traveller, Marseille",
                    avatar: "avatar3",
                    message: "We booked France Buses for our family trip to the French Riviera. The coach was modern and very comfortable, and our driver made the journey pleasant from start to finish.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Antoine Lefèvre",
                    role: "Operations Manager, Lyon",
                    avatar: "avatar4",
                    message: "Our company has used France Buses for several corporate events around Lyon and Marseille. Their service is professional, flexible, and always punctual.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Isabelle Laurent",
                    role: "HR Director, Paris",
                    avatar: "avatar5",
                    message: "France Buses organized the transport for our annual conference in Paris. The entire experience was seamless, and the drivers were extremely professional and courteous.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Julien Bernard",
                    role: "Event Coordinator, Nice",
                    avatar: "avatar6",
                    message: "We hired France Buses for an international summit in Nice. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Mme. Caroline Petit",
                    role: "Primary School Teacher, Bordeaux",
                    avatar: "avatar7",
                    message: "Our school trip to the Cité de l'Espace in Toulouse went perfectly thanks to France Buses. The driver was kind and attentive, and the children were very comfortable throughout.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "M. François Lambert",
                    role: "Sports Coach, Lille",
                    avatar: "avatar8",
                    message: "We use France Buses for all our sports competitions. They understand how important timing is and always get our teams to matches safely and on schedule.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Mme. Élodie Girard",
                    role: "Headmistress, Lyon",
                    avatar: "avatar9",
                    message: "Safety and reliability are top priorities for our school, and France Buses delivers both. Parents appreciate how professional and friendly the service is for school transport.",
                    rating: 5
                }
            ]
        },

        // How It Works
        howItWorks: {
            badge: "How it works",
            title: "Rent with our simple 3-step process",
            steps: [
                {
                    icon: "MapPin",
                    title: "Choose your route",
                    description: "Select your pickup and drop-off points anywhere in France to plan your journey."
                },
                {
                    icon: "Calendar",
                    title: "Pick your date and time",
                    description: "Choose when you want to travel — one-way or return, we'll be ready when you are."
                },
                {
                    icon: "Bus",
                    title: "Confirm your booking",
                    description: "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver."
                }
            ]
        },

        // Why Choose Us
        whyChooseUs: {
            badge: "Why Choose Us",
            title: "Why France Buses",
            description: "Choose France Buses for reliable, comfortable, and affordable group transport. We make every journey across France effortless with professional drivers and modern vehicles.",
            image: "/images/bus2.png",
            vectorImage: "/images/Vector.png",
            features: [
                {
                    icon: "ShieldCheck",
                    title: "Best Price Guarantee",
                    description: "With France Buses, you always get the best value across France. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort."
                },
                {
                    icon: "User",
                    title: "Experienced Drivers",
                    description: "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish."
                },
                {
                    icon: "Clock",
                    title: "Always Available",
                    description: "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in France."
                },
                {
                    icon: "Headset",
                    title: "24/7 Support",
                    description: "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it."
                }
            ]
        },

        // Big Numbers/Achievements
        achievements: {
            badge: "Our Achievements",
            title: "Trusted by passengers across France",
            description: "At France Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
            stats: [
                {
                    value: "250,000+",
                    label: "Passengers Transported",
                    description: "Every year, more than a quarter of a million passengers travel with France Buses for dependable, comfortable journeys throughout France — including Paris, Lyon, Marseille, and Bordeaux.",
                    highlight: true
                },
                {
                    value: "1,200+",
                    label: "Journeys operated annually"
                },
                {
                    value: "24/7",
                    label: "Customer support and live updates"
                }
            ]
        },

        // Partners
        partners: {
            badge: "We've partnered with",
            items: [
                { name: "Alpadia Language Schools", logo: "/images/partner/psg.png" },
                { name: "Apple", logo: "/images/partner/apple-logo-banner.avif" },
                { name: "Nintendo", logo: "/images/partner/nintendo-logo-banner.avif" },
                { name: "Roland Garros", logo: "/images/partner/ttl.png" },
                { name: "Fnac", logo: "/images/partner/if.png" },
                { name: "Sorbonne Université", logo: "/images/partner/su.png" },
                { name: "Accor Hotels", logo: "/images/partner/ac.png" },
                { name: "TF1", logo: "/images/partner/rn.png" },
                { name: "Orange", logo: "/images/partner/ul.png" },
                { name: "Alliance Française", logo: "/images/partner/af.png" }
            ]
        },

        // Final CTA
        finalCta: {
            title: "Let's get your journey started",
            description: "Get a quick quote from France Buses and travel with comfort, style, and confidence.",
            image: "/images/contact_support_transparent.png",
            buttonText: "Request a Quote"
        },

        // Service page details
        servicePages: {
            transfers: {
                hero: {
                    title: "Door to Door",
                    span: "Transfers",
                    subTitle: "Reliable transfers across France with France Buses — premium comfort, professional drivers, and on time service wherever you travel.",
                    image: "/images/transfer1.png"
                },
                details: {
                    h2: "About Our Transfer Service",
                    title: "France Buses offers smooth and comfortable door to door transfers across France. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free.",
                    features: [
                        "Meet and greet service included",
                        "Real time flight and traffic tracking",
                        "Complimentary WiFi and refreshments",
                        "Fixed transparent pricing with no surprises"
                    ],
                    images: [
                        { image: "/images/transfer2.png" },
                        { image: "/images/transfer3.png" }
                    ]
                }
            },
            corporate: {
                hero: {
                    title: "Executive",
                    span: "Corporate Events",
                    subTitle: "France Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across France.",
                    image: "/images/corporate3.png"
                },
                details: {
                    h2: "About Our Corporate Transport Service",
                    title: "France Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout France. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
                    features: [
                        "Dedicated account manager for event coordination",
                        "Onboard WiFi and charging ports",
                        "Live tracking and real time updates",
                        "Uniformed professional drivers",
                        "Optional branded vehicles for your company",
                        "Transparent fixed pricing with no hidden costs"
                    ],
                    images: [
                        { image: '/images/corporate2.png' },
                        { image: '/images/corporate1.png' }
                    ]
                }
            },
            school: {
                hero: {
                    title: "Safe and Exciting",
                    span: "School Trips",
                    subTitle: "Make every school trip memorable with France Buses — safe, comfortable, and expertly managed transport for students and teachers across France.",
                    image: '/images/scht4.png'
                },
                details: {
                    h2: "About Our School Trip Service",
                    title: "France Buses provides reliable and enjoyable school trip transport across France. From museums to theme parks, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and fun for everyone.",
                    features: [
                        "Professional, background checked drivers",
                        "Custom itineraries to match school plans",
                        "Educational and recreational trip options",
                        "Air conditioned coaches with seat belts",
                        "Group discounts and transparent pricing",
                        "Live tracking and safety updates for peace of mind"
                    ],
                    images: [
                        { image: "/images/scht1.png" },
                        { image: "/images/scht2.png" }
                    ]
                }
            },
            shuttles: {
                hero: {
                    title: "Reliable",
                    span: "Shuttle Services",
                    subTitle: "Experience seamless travel with France Buses — efficient, comfortable, and dependable shuttle solutions across France for groups of all sizes.",
                    image: '/images/shuttle3.png'
                },
                details: {
                    h2: "About Our Shuttle Service",
                    title: "France Buses provides smooth and scheduled shuttle transport across France. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics.",
                    features: [
                        "Scheduled and on demand shuttle options",
                        "Modern air conditioned coaches",
                        "Professional uniformed drivers",
                        "Real time tracking and updates",
                        "Custom routes for airports, hotels, and events",
                        "Competitive group pricing with no hidden fees"
                    ],
                    images: [
                        { image: '/images/shuttle1.png' },
                        { image: '/images/shuttle2.png' }
                    ]
                }
            }
        },

        // Google Maps
        maps: {
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5449019726225!2d2.3680757764638334!3d48.8478188713308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67203731d19a3%3A0xdc297014622a7bc4!2sRegus%20-%20Paris%20Gare%20de%20Lyon!5e0!3m2!1sen!2sae!4v1762318953101!5m2!1sen!2sae"
        }
    },

    // Poland (default)
    pl: {
        // General company info
        company: {
            name: "Poland Buses",
            phone: "+44 20 3834 3226",
            email: "info@polandbuses.com",
            address: "Jarosława Dąbrowskiego 71/71, 02-586 Warszawa, Poland",
            logo: "../public/images/logo2.png",
            whatsapp: "https://wa.me/442038343226"
        },

        // Navigation
        navigation: [
            { name: "Home", href: "/" },
            { name: "Transfers", href: "/transfers" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "School trips", href: "/school-trips" },
            { name: "Corporate events", href: "/corporate-events" },
            { name: "About Us", href: "/about-us" }
        ],

        // Footer services
        footerServices: [
            { name: "Corporate events", href: "/corporate-events" },
            { name: "School trips", href: "/school-trips" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "Transfers", href: "/transfers" },
            { name: "Home to school", href: "/school-trips" }
        ],

        // Hero section
        hero: {
            title: "Professional coach and minibus hire services across",
            description: "Reliable and affordable coach and minibus hire in Poland with Poland Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Poland.",
            image: "/images/bus-hire-transparent.png",
            frameImage: "/images/Frame.png",
            countryName: "Poland",
            cities: ["Warsaw", "Krakow", "Wroclaw", "Gdansk"]
        },

        // Services section
        services: [
            {
                key: "corporate-events",
                title: "Corporate Events",
                description: "Streamline your corporate travel with our premium coach hire services across Poland. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
                image: "/images/corporate21.png"
            },
            {
                key: "school-trips",
                title: "School Trips",
                description: "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Poland. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
                image: "/images/school21.png"
            },
            {
                key: "shuttles",
                title: "Shuttle Services",
                description: "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Poland. Designed for maximum convenience and comfort.",
                image: "/images/shuttle21.png"
            },
            {
                key: "transfers",
                title: "Transfers",
                description: "Experience seamless door-to-door transport with our professional transfer service anywhere in Poland. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
                image: "/images/transfer21.png"
            },
            {
                key: "home",
                title: "Home to School",
                description: "Simplify your family's daily routine with our safe and reliable home to school transport service in Poland. Our professional drivers ensure punctuality and give parents complete peace of mind.",
                image: "/images/home21.png"
            }
        ],

        // About Us section
        aboutUs: {
            badge: "About Us",
            description: "At Poland Buses, we are proud to be one of Poland's leading providers of reliable, comfortable, and affordable group transportation. From Warsaw to Krakow, Wroclaw to Gdansk, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Poland.",
            image: "/images/abtus.png",
            features: [
                {
                    title: "Modern Polish Fleet",
                    description: "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options."
                },
                {
                    title: "Experienced Polish Drivers",
                    description: "Every Poland Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Poland."
                },
                {
                    title: "Tailored Travel Solutions Poland",
                    description: "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Poland. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly."
                },
                {
                    title: "Transparent Pricing Poland",
                    description: "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Poland."
                }
            ]
        },

        // Testimonials
        testimonials: {
            badge: "Client Testimonials",
            title: "What Our Polish Clients Say",
            categories: [
                { key: 'passengers', label: 'From passengers' },
                { key: 'corporate', label: 'From companies' },
                { key: 'school', label: 'From schools' }
            ],
            items: [
                {
                    key: 'passengers',
                    name: "Anna Nowak",
                    role: "Regular Commuter, Warsaw",
                    avatar: "avatar1",
                    message: "I travel frequently between Warsaw and Krakow for business. Poland Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Piotr Kowalski",
                    role: "University Student, Wroclaw",
                    avatar: "avatar2",
                    message: "As a student traveling between Wroclaw and Gdansk, Poland Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Katarzyna Wisniewska",
                    role: "Family Traveller, Krakow",
                    avatar: "avatar3",
                    message: "We booked Poland Buses for our family trip to the Polish mountains. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Marek Lewandowski",
                    role: "Operations Manager, Warsaw",
                    avatar: "avatar4",
                    message: "Our company has used Poland Buses for several corporate events around Warsaw and Krakow. Their service is professional, flexible, and consistently punctual.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Agnieszka Wojcik",
                    role: "HR Director, Gdansk",
                    avatar: "avatar5",
                    message: "Poland Buses organized transport for our annual conference in Gdansk. The entire experience was seamless, and the drivers were extremely professional and courteous.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Tomasz Kaminski",
                    role: "Event Coordinator, Wroclaw",
                    avatar: "avatar6",
                    message: "We hired Poland Buses for an international business summit in Wroclaw. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Pani Joanna Zielinska",
                    role: "Primary School Teacher, Krakow",
                    avatar: "avatar7",
                    message: "Our school trip to the Wieliczka Salt Mine went perfectly thanks to Poland Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Pan Jan Kowalczyk",
                    role: "Sports Coach, Warsaw",
                    avatar: "avatar8",
                    message: "We use Poland Buses for all our sports competitions across Poland. They understand how important timing is and always get our teams to matches safely and on schedule.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Pani Marta Szymanska",
                    role: "Headmistress, Poznan",
                    avatar: "avatar9",
                    message: "Safety and reliability are top priorities for our school, and Poland Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Poland.",
                    rating: 5
                }
            ]
        },

        // How It Works
        howItWorks: {
            badge: "How it works",
            title: "Rent with our simple 3-step process in Poland",
            steps: [
                {
                    icon: "MapPin",
                    title: "Choose your route in Poland",
                    description: "Select your pickup and drop-off points anywhere in Poland to plan your journey across the country."
                },
                {
                    icon: "Calendar",
                    title: "Pick your date and time",
                    description: "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Poland."
                },
                {
                    icon: "Bus",
                    title: "Confirm your booking",
                    description: "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Polish journey."
                }
            ]
        },

        // Why Choose Us
        whyChooseUs: {
            badge: "Why Choose Us",
            title: "Why Poland Buses",
            description: "Choose Poland Buses for reliable, comfortable, and affordable group transport throughout Poland.",
            image: "/images/bus2.png",
            vectorImage: "/images/Vector.png",
            features: [
                {
                    icon: "ShieldCheck",
                    title: "Best Price Guarantee Poland",
                    description: "With Poland Buses, you always get the best value across Poland. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort."
                },
                {
                    icon: "User",
                    title: "Experienced Polish Drivers",
                    description: "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Poland."
                },
                {
                    icon: "Clock",
                    title: "Always Available in Poland",
                    description: "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Poland."
                },
                {
                    icon: "Headset",
                    title: "24/7 Support Poland",
                    description: "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Poland."
                }
            ]
        },

        // Big Numbers/Achievements
        achievements: {
            badge: "Our Achievements",
            title: "Trusted by passengers across Poland",
            description: "At Poland Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Poland. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
            stats: [
                {
                    value: "180,000+",
                    label: "Passengers Transported in Poland",
                    description: "Every year, more than 180,000 passengers travel with Poland Buses for dependable, comfortable journeys throughout Poland — including Warsaw, Krakow, Wroclaw, and Gdansk.",
                    highlight: true
                },
                {
                    value: "950+",
                    label: "Journeys operated annually across Poland"
                },
                {
                    value: "24/7",
                    label: "Customer support and live updates in Poland"
                }
            ]
        },

        // Partners
        partners: {
            badge: "We've partnered with",
            items: [
                { name: "Warsaw University", logo: "/images/partner/psg.png" },
                { name: "Polish Olympic Committee", logo: "/images/partner/ttl.png" },
                { name: "Empik", logo: "/images/partner/if.png" },
                { name: "Jagiellonian University", logo: "/images/partner/su.png" },
                { name: "Orlen", logo: "/images/partner/ac.png" },
                { name: "TVP", logo: "/images/partner/rn.png" },
                { name: "Orange Polska", logo: "/images/partner/ul.png" },
                { name: "Polish Tourism Organization", logo: "/images/partner/af.png" }
            ]
        },

        // Final CTA
        finalCta: {
            title: "Let's get your Polish journey started",
            description: "Get a quick quote from Poland Buses and travel across Poland with comfort, style, and confidence.",
            image: "/images/contact_support_transparent.png",
            buttonText: "Request a Quote"
        },

        // Service page details
        servicePages: {
            transfers: {
                hero: {
                    title: "Door to Door",
                    span: "Transfers Poland",
                    subTitle: "Reliable transfers across Poland with Poland Buses — premium comfort, professional drivers, and on time service wherever you travel in Poland.",
                    image: "/images/transfer1.png"
                },
                details: {
                    h2: "About Our Transfer Service in Poland",
                    title: "Poland Buses offers smooth and comfortable door to door transfers across Poland. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Poland.",
                    features: [
                        "Meet and greet service included throughout Poland",
                        "Real time flight and traffic tracking",
                        "Complimentary WiFi and refreshments",
                        "Fixed transparent pricing with no surprises"
                    ],
                    images: [
                        { image: "/images/transfer2.png" },
                        { image: "/images/transfer3.png" }
                    ]
                }
            },
            corporate: {
                hero: {
                    title: "Executive",
                    span: "Corporate Events Poland",
                    subTitle: "Poland Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Poland.",
                    image: "/images/corporate3.png"
                },
                details: {
                    h2: "About Our Corporate Transport Service in Poland",
                    title: "Poland Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Poland. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
                    features: [
                        "Dedicated account manager for event coordination in Poland",
                        "Onboard WiFi and charging ports",
                        "Live tracking and real time updates",
                        "Uniformed professional drivers",
                        "Optional branded vehicles for your company",
                        "Transparent fixed pricing with no hidden costs"
                    ],
                    images: [
                        { image: '/images/corporate2.png' },
                        { image: '/images/corporate1.png' }
                    ]
                }
            },
            school: {
                hero: {
                    title: "Safe and Exciting",
                    span: "School Trips Poland",
                    subTitle: "Make every school trip memorable with Poland Buses — safe, comfortable, and expertly managed transport for students and teachers across Poland.",
                    image: '/images/scht4.png'
                },
                details: {
                    h2: "About Our School Trip Service in Poland",
                    title: "Poland Buses provides reliable and enjoyable school trip transport across Poland. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
                    features: [
                        "Professional, background checked drivers in Poland",
                        "Custom itineraries to match school plans",
                        "Educational and recreational trip options across Poland",
                        "Air conditioned coaches with seat belts",
                        "Group discounts and transparent pricing",
                        "Live tracking and safety updates for peace of mind"
                    ],
                    images: [
                        { image: "/images/scht1.png" },
                        { image: "/images/scht2.png" }
                    ]
                }
            },
            shuttles: {
                hero: {
                    title: "Reliable",
                    span: "Shuttle Services Poland",
                    subTitle: "Experience seamless travel with Poland Buses — efficient, comfortable, and dependable shuttle solutions across Poland for groups of all sizes.",
                    image: '/images/shuttle3.png'
                },
                details: {
                    h2: "About Our Shuttle Service in Poland",
                    title: "Poland Buses provides smooth and scheduled shuttle transport across Poland. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Poland.",
                    features: [
                        "Scheduled and on demand shuttle options across Poland",
                        "Modern air conditioned coaches",
                        "Professional uniformed drivers",
                        "Real time tracking and updates",
                        "Custom routes for airports, hotels, and events in Poland",
                        "Competitive group pricing with no hidden fees"
                    ],
                    images: [
                        { image: '/images/shuttle1.png' },
                        { image: '/images/shuttle2.png' }
                    ]
                }
            }
        },

        // Google Maps
        maps: {
            embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sae!4v1762926711155!5m2!1sen!2sae!6m8!1m7!1s00AOFYhltYpGH9mRZqndkw!2m2!1d52.20029292942072!2d21.00900400333805!3f139.58788069454607!4f-22.586218840216887!5f0.7820865974627469"
        }
    },

    // Romania (default)
    ro: {
        // General company info
        company: {
            name: "Romania Buses",
            phone: "+44 20 3834 3226",
            email: "info@romaniabuses.com",
            address: "Str. Dr. Nicolae D. Staicovici 75, București 050557, Romania",
            logo: "/images/logo2.png",
            whatsapp: "https://wa.me/442038343226"
        },

        // Navigation
        navigation: [
            { name: "Home", href: "/" },
            { name: "Transfers", href: "/transfers" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "School trips", href: "/school-trips" },
            { name: "Corporate events", href: "/corporate-events" },
            { name: "About Us", href: "/about-us" }
        ],

        // Footer services
        footerServices: [
            { name: "Corporate events", href: "/corporate-events" },
            { name: "School trips", href: "/school-trips" },
            { name: "Shuttles", href: "/shuttles" },
            { name: "Transfers", href: "/transfers" },
            { name: "Home to school", href: "/school-trips" }
        ],

        // Hero section
        hero: {
            title: "Professional coach and minibus hire services across",
            description: "Reliable and affordable coach and minibus hire in Romania with Romania Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Romania.",
            image: "/images/bus-hire-transparent.png",
            frameImage: "/images/Frame.png",
            countryName: "Romania",
            cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"]
        },

        // Services section
        services: [
            {
                key: "corporate",
                title: "Corporate Events Romania",
                description: "Streamline your corporate travel with our premium coach hire services across Romania. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
                image: "/images/corporate21.png"
            },
            {
                key: "school",
                title: "School Trips Romania",
                description: "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Romania. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
                image: "/images/school21.png"
            },
            {
                key: "shuttles",
                title: "Shuttle Services Romania",
                description: "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Romania. Designed for maximum convenience and comfort.",
                image: "/images/shuttle21.png"
            },
            {
                key: "transfers",
                title: "Transport Transfers Romania",
                description: "Experience seamless door-to-door transport with our professional transfer service anywhere in Romania. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
                image: "/images/transfer21.png"
            },
            {
                key: "home",
                title: "Home to School Transport Romania",
                description: "Simplify your family's daily routine with our safe and reliable home to school transport service in Romania. Our professional drivers ensure punctuality and give parents complete peace of mind.",
                image: "/images/home21.png"
            }
        ],

        // About Us section
        aboutUs: {
            badge: "About Us",
            description: "At Romania Buses, we are proud to be one of Romania's leading providers of reliable, comfortable, and affordable group transportation. From Bucharest to Cluj-Napoca, Timisoara to Iasi, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Romania.",
            image: "/images/abtus.png",
            features: [
                {
                    title: "Modern Romanian Fleet",
                    description: "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options."
                },
                {
                    title: "Experienced Romanian Drivers",
                    description: "Every Romania Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Romania."
                },
                {
                    title: "Tailored Travel Solutions Romania",
                    description: "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Romania. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly."
                },
                {
                    title: "Transparent Pricing Romania",
                    description: "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Romania."
                }
            ]
        },

        // Testimonials
        testimonials: {
            badge: "Client Testimonials",
            title: "What Our Romanian Clients Say",
            categories: [
                { key: 'passengers', label: 'From passengers' },
                { key: 'corporate', label: 'From companies' },
                { key: 'school', label: 'From schools' }
            ],
            items: [
                {
                    key: 'passengers',
                    name: "Ana Popescu",
                    role: "Regular Commuter, Bucharest",
                    avatar: "avatar1",
                    message: "I travel frequently between Bucharest and Brasov for business. Romania Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Andrei Ionescu",
                    role: "University Student, Cluj-Napoca",
                    avatar: "avatar2",
                    message: "As a student traveling between Cluj-Napoca and Timisoara, Romania Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
                    rating: 5
                },
                {
                    key: 'passengers',
                    name: "Elena Dumitru",
                    role: "Family Traveller, Iasi",
                    avatar: "avatar3",
                    message: "We booked Romania Buses for our family trip to the Carpathian Mountains. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Mihai Stan",
                    role: "Operations Manager, Bucharest",
                    avatar: "avatar4",
                    message: "Our company has used Romania Buses for several corporate events around Bucharest and Constanta. Their service is professional, flexible, and consistently punctual.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Cristina Radu",
                    role: "HR Director, Timisoara",
                    avatar: "avatar5",
                    message: "Romania Buses organized transport for our annual conference in Timisoara. The entire experience was seamless, and the drivers were extremely professional and courteous.",
                    rating: 5
                },
                {
                    key: 'corporate',
                    name: "Alexandru Moldovan",
                    role: "Event Coordinator, Cluj-Napoca",
                    avatar: "avatar6",
                    message: "We hired Romania Buses for an international business summit in Cluj-Napoca. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Doamna Maria Constantin",
                    role: "Primary School Teacher, Brasov",
                    avatar: "avatar7",
                    message: "Our school trip to Peles Castle went perfectly thanks to Romania Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Domnul Gabriel Popa",
                    role: "Sports Coach, Bucharest",
                    avatar: "avatar8",
                    message: "We use Romania Buses for all our sports competitions across Romania. They understand how important timing is and always get our teams to matches safely and on schedule.",
                    rating: 5
                },
                {
                    key: 'school',
                    name: "Doamna Laura Mihai",
                    role: "Headmistress, Sibiu",
                    avatar: "avatar9",
                    message: "Safety and reliability are top priorities for our school, and Romania Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Romania.",
                    rating: 5
                }
            ]
        },

        // How It Works
        howItWorks: {
            badge: "How it works",
            title: "Rent with our simple 3-step process in Romania",
            steps: [
                {
                    icon: "MapPin",
                    title: "Choose your route in Romania",
                    description: "Select your pickup and drop-off points anywhere in Romania to plan your journey across the country."
                },
                {
                    icon: "Calendar",
                    title: "Pick your date and time",
                    description: "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Romania."
                },
                {
                    icon: "Bus",
                    title: "Confirm your booking",
                    description: "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Romanian journey."
                }
            ]
        },

        // Why Choose Us
        whyChooseUs: {
            badge: "Why Choose Us",
            title: "Why Romania Buses",
            description: "Choose Romania Buses for reliable, comfortable, and affordable group transport throughout Romania. We make every journey across the country effortless with professional drivers and modern vehicles.",
            image: "/images/bus2.png",
            vectorImage: "/images/Vector.png",
            features: [
                {
                    icon: "ShieldCheck",
                    title: "Best Price Guarantee Romania",
                    description: "With Romania Buses, you always get the best value across Romania. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort."
                },
                {
                    icon: "User",
                    title: "Experienced Romanian Drivers",
                    description: "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Romania."
                },
                {
                    icon: "Clock",
                    title: "Always Available in Romania",
                    description: "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Romania."
                },
                {
                    icon: "Headset",
                    title: "24/7 Support Romania",
                    description: "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Romania."
                }
            ]
        },

        // Big Numbers/Achievements
        achievements: {
            badge: "Our Achievements",
            title: "Trusted by passengers across Romania",
            description: "At Romania Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Romania. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
            stats: [
                {
                    value: "150,000+",
                    label: "Passengers Transported in Romania",
                    description: "Every year, more than 150,000 passengers travel with Romania Buses for dependable, comfortable journeys throughout Romania — including Bucharest, Cluj-Napoca, Timisoara, and Iasi.",
                    highlight: true
                },
                {
                    value: "800+",
                    label: "Journeys operated annually across Romania"
                },
                {
                    value: "24/7",
                    label: "Customer support and live updates in Romania"
                }
            ]
        },

        // Partners
        partners: {
            badge: "We've partnered with",
            items: [
                { name: "University of Bucharest", logo: "/images/partner/psg.png" },
                { name: "Apple Romania", logo: "/images/partner/apple-logo-banner.avif" },
                { name: "Bitdefender", logo: "/images/partner/nintendo-logo-banner.avif" },
                { name: "Romanian Olympic Committee", logo: "/images/partner/ttl.png" },
                { name: "Altex", logo: "/images/partner/if.png" },
                { name: "Babes-Bolyai University", logo: "/images/partner/su.png" },
                { name: "OMV Petrom", logo: "/images/partner/ac.png" },
                { name: "Pro TV", logo: "/images/partner/rn.png" },
                { name: "Orange Romania", logo: "/images/partner/ul.png" },
                { name: "Romanian Tourism Authority", logo: "/images/partner/af.png" }
            ]
        },

        // Final CTA
        finalCta: {
            title: "Let's get your Romanian journey started",
            description: "Get a quick quote from Romania Buses and travel across Romania with comfort, style, and confidence.",
            image: "/images/contact_support_transparent.png",
            buttonText: "Request a Quote"
        },

        // Service page details
        servicePages: {
            transfers: {
                hero: {
                    title: "Door to Door",
                    span: "Transfers Romania",
                    subTitle: "Reliable transfers across Romania with Romania Buses — premium comfort, professional drivers, and on time service wherever you travel in Romania.",
                    image: "/images/transfer1.png"
                },
                details: {
                    h2: "About Our Transfer Service in Romania",
                    title: "Romania Buses offers smooth and comfortable door to door transfers across Romania. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Romania.",
                    features: [
                        "Meet and greet service included throughout Romania",
                        "Real time flight and traffic tracking",
                        "Complimentary WiFi and refreshments",
                        "Fixed transparent pricing with no surprises"
                    ],
                    images: [
                        { image: "/images/transfer2.png" },
                        { image: "/images/transfer3.png" }
                    ]
                }
            },
            corporate: {
                hero: {
                    title: "Executive",
                    span: "Corporate Events Romania",
                    subTitle: "Romania Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Romania.",
                    image: "/images/corporate3.png"
                },
                details: {
                    h2: "About Our Corporate Transport Service in Romania",
                    title: "Romania Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Romania. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
                    features: [
                        "Dedicated account manager for event coordination in Romania",
                        "Onboard WiFi and charging ports",
                        "Live tracking and real time updates",
                        "Uniformed professional drivers",
                        "Optional branded vehicles for your company",
                        "Transparent fixed pricing with no hidden costs"
                    ],
                    images: [
                        { image: '/images/corporate2.png' },
                        { image: '/images/corporate1.png' }
                    ]
                }
            },
            school: {
                hero: {
                    title: "Safe and Exciting",
                    span: "School Trips Romania",
                    subTitle: "Make every school trip memorable with Romania Buses — safe, comfortable, and expertly managed transport for students and teachers across Romania.",
                    image: '/images/scht4.png'
                },
                details: {
                    h2: "About Our School Trip Service in Romania",
                    title: "Romania Buses provides reliable and enjoyable school trip transport across Romania. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
                    features: [
                        "Professional, background checked drivers in Romania",
                        "Custom itineraries to match school plans",
                        "Educational and recreational trip options across Romania",
                        "Air conditioned coaches with seat belts",
                        "Group discounts and transparent pricing",
                        "Live tracking and safety updates for peace of mind"
                    ],
                    images: [
                        { image: "/images/scht1.png" },
                        { image: "/images/scht2.png" }
                    ]
                }
            },
            shuttles: {
                hero: {
                    title: "Reliable",
                    span: "Shuttle Services Romania",
                    subTitle: "Experience seamless travel with Romania Buses — efficient, comfortable, and dependable shuttle solutions across Romania for groups of all sizes.",
                    image: '/images/shuttle3.png'
                },
                details: {
                    h2: "About Our Shuttle Service in Romania",
                    title: "Romania Buses provides smooth and scheduled shuttle transport across Romania. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Romania.",
                    features: [
                        "Scheduled and on demand shuttle options across Romania",
                        "Modern air conditioned coaches",
                        "Professional uniformed drivers",
                        "Real time tracking and updates",
                        "Custom routes for airports, hotels, and events in Romania",
                        "Competitive group pricing with no hidden fees"
                    ],
                    images: [
                        { image: '/images/shuttle1.png' },
                        { image: '/images/shuttle2.png' }
                    ]
                }
            }
        },

        // Google Maps
        maps: {
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.07484637839116!2d26.07991853422068!3d44.42910994292718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff65e926a3b5%3A0x123d5705ce9a8fab!2sStr.%20Dr.%20Nicolae%20D.%20Staicovici%2075%2C%20Bucure%C8%99ti%20050557%2C%20Romania!5e0!3m2!1sen!2sae!4v1762927435641!5m2!1sen!2sae"
        }
    },

    // Add more countries as needed...
};

// Helper function to get service page data
export const getServicePageData = (countryCode = 'fr', serviceType) => {
    const country = getCountryData(countryCode);
    return country.servicePages[serviceType] || null;
};

// Helper function to get country data
export const getCountryData = (countryCode = 'fr') => {
    return countryData[countryCode] || countryData.fr;
};

// Helper function to get all available countries
export const getAvailableCountries = () => {
    return Object.keys(countryData);
};

export default countryData;