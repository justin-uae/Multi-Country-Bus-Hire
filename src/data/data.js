// Multi-country bus hire data configuration
export const countryData = {
    UK: {
        countryName: "United Kingdom",
        logo: {
            text: "BusWay",
            icon: "🚌"
        },
        contact: {
            phone: "+44 203 397 4460",
            email: "info@busway.co.uk",
            address: "123 Main St, London, UK"
        },
        hero: {
            title: "The home of coach and minibus",
            highlight: "hire",
            subtitle: "UK-wide corporate events, transfers & school trips",
            ctaText: "Request a Quote",
            image: "/images/bus-hire-transparent.png"
        },
        services: {
            sectionTitle: "Our Services",
            heading: "Find out how we can help you",
            description: "Whether it's a one-off event or routine travel, our services are designed to meet every transportation challenge.",
            categories: [
                {
                    id: 1,
                    name: "Corporate events",
                    description: "From intimate gatherings to corporate events, our specialized team delivers exceptional, tailor-made transport solutions with a fleet ranging from minibuses to double deckers, ensuring every event is a glowing success.",
                    image: "/images/corporate1.png",
                    link: "/corporate-events"
                },
                {
                    id: 2,
                    name: "School trips",
                    description: "Safe, reliable transportation for educational trips and school events with experienced drivers and modern, comfortable coaches.",
                    image: "/images/school.png",
                    link: "/school-trips"
                },
                {
                    id: 3,
                    name: "Shuttles",
                    description: "Regular shuttle services for airports, hotels, and corporate campuses with flexible scheduling and professional service.",
                    image: "/images/shuttles.png",
                    link: "/shuttles"
                },
                {
                    id: 4,
                    name: "Transfers",
                    description: "Point-to-point transfer services for any occasion, from airport pickups to special events with door-to-door convenience.",
                    image: "/images/transfer.png",
                    link: "/transfers"
                },
                {
                    id: 5,
                    name: "Home to school",
                    description: "Dedicated home-to-school transport services ensuring safe, punctual journeys for students every day.",
                    image: "/images/home.png",
                    link: "/home-to-school"
                }
            ]
        },
        partners: {
            sectionTitle: "We've partnered with",
            logos: [
                { name: "Gala Bingo", image: "/images/partner/ac.png" },
                { name: "ITV", image: "/images/partner/af.png" },
                { name: "Nintendo", image: "/images/partner/dlp.png" },
                { name: "North London Collegiate School", image: "/images/partner/if.png" },
                { name: "Sky", image: "/images/partner/ip.png" },
                { name: "Wembley", image: "/images/partner/psg.png" },
                { name: "Alpadia Language Schools", image: "/images/partner/su.png" },
                { name: "Apple", image: "/images/partner/ul.png" }
            ]
        },
        whyChooseUs: {
            sectionTitle: "Why choose us",
            heading: "We offer the best experience with our bus rental services",
            features: [
                {
                    id: 1,
                    icon: "shield-check",
                    title: "Best price guaranteed",
                    description: "Find a lower price? We'll refund you 100% of the difference."
                },
                {
                    id: 2,
                    icon: "user",
                    title: "Experienced drivers",
                    description: "Our vetted, professional drivers ensure a safe, pleasant journey."
                },
                {
                    id: 3,
                    icon: "clock",
                    title: "24/7 shuttle availability",
                    description: "Book your bus anytime—our fleet runs around the clock."
                },
                {
                    id: 4,
                    icon: "headphones",
                    title: "24/7 support",
                    description: "Need help? Our support team is here whenever you have a question."
                }
            ],
            image: "/images/bus-main.png"
        },
        stats: {
            sectionTitle: "IMPRESSIVE FIGURES",
            heading: "Trusted by millions nationwide",
            description: "Our commitment to safety, comfort, and punctuality makes us the top choice for transporting millions of passengers each year—from students to corporate teams.",
            metrics: [
                {
                    id: 1,
                    value: "4,900,000+",
                    label: "Passengers transported",
                    description: "Over 7 million travellers trust us annually for safe, comfortable journeys.",
                    color: "purple"
                },
                {
                    id: 2,
                    value: "3,000+",
                    label: "Routes served annually",
                    color: "blue"
                },
                {
                    id: 3,
                    value: "24/7",
                    label: "Customer support",
                    color: "yellow"
                }
            ]
        },
        cta: {
            heading: "Ready to book your executive coach?",
            description: "Tell us your route, date, and passenger count—and we'll send you a bespoke quote within minutes.",
            buttonText: "Request a Quote",
            image: "/images/support-agent.png"
        },
        footer: {
            sections: [
                {
                    title: "Services",
                    links: [
                        { name: "Corporate events", url: "/corporate-events" },
                        { name: "School trips", url: "/school-trips" },
                        { name: "Shuttles", url: "/shuttles" },
                        { name: "Transfers", url: "/transfers" },
                        { name: "Home to school", url: "/home-to-school" }
                    ]
                },
                {
                    title: "Resources",
                    links: [
                        { name: "Help Center", url: "/help" },
                        { name: "Guides", url: "/guides" },
                        { name: "Partner Network", url: "/partners" },
                        { name: "Developer API", url: "/api" }
                    ]
                },
                {
                    title: "Company",
                    links: [
                        { name: "About Us", url: "/about" },
                        { name: "Careers", url: "/careers" },
                        { name: "Press", url: "/press" },
                        { name: "Investor Relations", url: "/investors" }
                    ]
                }
            ],
            social: [
                { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
                { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
                { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
                { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
                { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }
            ],
            copyright: "© 2025 BusWay. All rights reserved."
        }
    },

    GERMANY: {
        countryName: "Germany",
        logo: {
            text: "BusWeg",
            icon: "🚌"
        },
        contact: {
            phone: "+49 30 1234 5678",
            email: "info@busweg.de",
            address: "Hauptstraße 123, Berlin, Germany"
        },
        hero: {
            title: "Ihr Partner für Bus und Reisebus",
            highlight: "Vermietung",
            subtitle: "Deutschlandweite Firmenveranstaltungen, Transfers & Schulausflüge",
            ctaText: "Angebot Anfordern",
            image: "/images/bus-germany.png"
        },
        services: {
            sectionTitle: "Unsere Dienstleistungen",
            heading: "Finden Sie heraus, wie wir Ihnen helfen können",
            description: "Ob einmalige Veranstaltung oder regelmäßige Fahrten, unsere Dienstleistungen sind auf jede Transportherausforderung zugeschnitten.",
            categories: [
                {
                    id: 1,
                    name: "Firmenveranstaltungen",
                    description: "Von intimen Zusammenkünften bis zu Firmenevents liefert unser spezialisiertes Team außergewöhnliche, maßgeschneiderte Transportlösungen.",
                    image: "/images/corporate.jpg",
                    link: "/firmenveranstaltungen"
                },
                {
                    id: 2,
                    name: "Schulausflüge",
                    description: "Sichere, zuverlässige Beförderung für Bildungsreisen und Schulveranstaltungen mit erfahrenen Fahrern.",
                    image: "/images/school.jpg",
                    link: "/schulausfluege"
                },
                {
                    id: 3,
                    name: "Shuttle-Service",
                    description: "Regelmäßige Shuttle-Services für Flughäfen, Hotels und Firmencampus mit flexibler Planung.",
                    image: "/images/shuttle.jpg",
                    link: "/shuttle"
                },
                {
                    id: 4,
                    name: "Transfers",
                    description: "Punkt-zu-Punkt-Transferservice für jeden Anlass, von Flughafenabholungen bis zu besonderen Events.",
                    image: "/images/transfer.jpg",
                    link: "/transfers"
                },
                {
                    id: 5,
                    name: "Schülertransport",
                    description: "Dedizierter Haus-zu-Schule-Transportservice für sichere, pünktliche Fahrten jeden Tag.",
                    image: "/images/home-school.jpg",
                    link: "/schuelertransport"
                }
            ]
        },
        partners: {
            sectionTitle: "Unsere Partner",
            logos: [
                { name: "Deutsche Bahn", image: "/images/partners/db.png" },
                { name: "BMW", image: "/images/partners/bmw.png" },
                { name: "Siemens", image: "/images/partners/siemens.png" },
                { name: "SAP", image: "/images/partners/sap.png" },
                { name: "Lufthansa", image: "/images/partners/lufthansa.png" },
                { name: "Bosch", image: "/images/partners/bosch.png" },
                { name: "Adidas", image: "/images/partners/adidas.png" },
                { name: "Mercedes-Benz", image: "/images/partners/mercedes.png" }
            ]
        },
        whyChooseUs: {
            sectionTitle: "Warum uns wählen",
            heading: "Wir bieten das beste Erlebnis mit unseren Busvermietungsservices",
            features: [
                {
                    id: 1,
                    icon: "shield-check",
                    title: "Bestpreisgarantie",
                    description: "Günstigeren Preis gefunden? Wir erstatten Ihnen 100% der Differenz."
                },
                {
                    id: 2,
                    icon: "user",
                    title: "Erfahrene Fahrer",
                    description: "Unsere geprüften, professionellen Fahrer sorgen für eine sichere, angenehme Reise."
                },
                {
                    id: 3,
                    icon: "clock",
                    title: "24/7 Shuttle-Verfügbarkeit",
                    description: "Buchen Sie Ihren Bus jederzeit—unsere Flotte fährt rund um die Uhr."
                },
                {
                    id: 4,
                    icon: "headphones",
                    title: "24/7 Support",
                    description: "Brauchen Sie Hilfe? Unser Support-Team ist jederzeit für Sie da."
                }
            ],
            image: "/images/bus-main.png"
        },
        stats: {
            sectionTitle: "BEEINDRUCKENDE ZAHLEN",
            heading: "Vertraut von Millionen deutschlandweit",
            description: "Unser Engagement für Sicherheit, Komfort und Pünktlichkeit macht uns zur ersten Wahl für den Transport von Millionen Passagieren jedes Jahr.",
            metrics: [
                {
                    id: 1,
                    value: "4,900,000+",
                    label: "Beförderte Passagiere",
                    description: "Über 7 Millionen Reisende vertrauen uns jährlich für sichere, komfortable Reisen.",
                    color: "purple"
                },
                {
                    id: 2,
                    value: "3,000+",
                    label: "Jährlich bediente Routen",
                    color: "blue"
                },
                {
                    id: 3,
                    value: "24/7",
                    label: "Kundensupport",
                    color: "yellow"
                }
            ]
        },
        cta: {
            heading: "Bereit, Ihren Executive Coach zu buchen?",
            description: "Nennen Sie uns Ihre Route, Datum und Passagierzahl—und wir senden Ihnen innerhalb weniger Minuten ein maßgeschneidertes Angebot.",
            buttonText: "Angebot Anfordern",
            image: "/images/support-agent.png"
        },
        footer: {
            sections: [
                {
                    title: "Dienstleistungen",
                    links: [
                        { name: "Firmenveranstaltungen", url: "/firmenveranstaltungen" },
                        { name: "Schulausflüge", url: "/schulausfluege" },
                        { name: "Shuttle-Service", url: "/shuttle" },
                        { name: "Transfers", url: "/transfers" },
                        { name: "Schülertransport", url: "/schuelertransport" }
                    ]
                },
                {
                    title: "Ressourcen",
                    links: [
                        { name: "Hilfe-Center", url: "/hilfe" },
                        { name: "Leitfäden", url: "/leitfaeden" },
                        { name: "Partner-Netzwerk", url: "/partner" },
                        { name: "Entwickler-API", url: "/api" }
                    ]
                },
                {
                    title: "Unternehmen",
                    links: [
                        { name: "Über Uns", url: "/ueber-uns" },
                        { name: "Karriere", url: "/karriere" },
                        { name: "Presse", url: "/presse" },
                        { name: "Investor Relations", url: "/investoren" }
                    ]
                }
            ],
            social: [
                { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
                { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
                { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
                { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
                { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }
            ],
            copyright: "© 2025 BusWeg. Alle Rechte vorbehalten."
        }
    },

    FRANCE: {
        countryName: "France",
        logo: {
            text: "BusVoie",
            icon: "🚌"
        },
        contact: {
            phone: "+33 1 23 45 67 89",
            email: "info@busvoie.fr",
            address: "123 Rue Principale, Paris, France"
        },
        hero: {
            title: "La référence en location d'autocars et minibus",
            highlight: "premium",
            subtitle: "Événements d'entreprise, transferts et voyages scolaires partout en France",
            ctaText: "Demander un Devis",
            image: "/images/France.png"
        },
        services: {
            sectionTitle: "Nos Services",
            heading: "Découvrez comment nous pouvons vous aider",
            description: "Qu'il s'agisse d'un événement ponctuel ou de déplacements réguliers, nos services sont conçus pour répondre à tous vos défis de transport.",
            categories: [
                {
                    id: 1,
                    name: "Événements d'entreprise",
                    description: "Des rassemblements intimes aux événements d'entreprise, notre équipe spécialisée offre des solutions de transport exceptionnelles et sur mesure.",
                    image: "/images/corporate.png",
                    link: "/evenements-entreprise"
                },
                {
                    id: 2,
                    name: "Voyages scolaires",
                    description: "Transport sûr et fiable pour les voyages éducatifs et événements scolaires avec des chauffeurs expérimentés.",
                    image: "/images/school.png",
                    link: "/voyages-scolaires"
                },
                {
                    id: 3,
                    name: "Navettes",
                    description: "Services de navette réguliers pour aéroports, hôtels et campus d'entreprise avec planification flexible.",
                    image: "/images/shuttle.jpg",
                    link: "/navettes"
                },
                {
                    id: 4,
                    name: "Transferts",
                    description: "Services de transfert point à point pour toute occasion, des navettes aéroport aux événements spéciaux.",
                    image: "/images/transfer.jpg",
                    link: "/transferts"
                },
                {
                    id: 5,
                    name: "Domicile-école",
                    description: "Services de transport domicile-école dédiés assurant des trajets sûrs et ponctuel chaque jour.",
                    image: "/images/home-school.jpg",
                    link: "/domicile-ecole"
                }
            ]
        },
        partners: {
            sectionTitle: "Nos partenaires",
            logos: [
                { name: "Air France", image: "/images/partners/airfrance.png" },
                { name: "SNCF", image: "/images/partners/sncf.png" },
                { name: "Total", image: "/images/partners/total.png" },
                { name: "Renault", image: "/images/partners/renault.png" },
                { name: "Carrefour", image: "/images/partners/carrefour.png" },
                { name: "L'Oréal", image: "/images/partners/loreal.png" },
                { name: "Accor Hotels", image: "/images/partners/accor.png" },
                { name: "PSG", image: "/images/partners/psg.png" }
            ]
        },
        whyChooseUs: {
            sectionTitle: "Pourquoi nous choisir",
            heading: "Nous offrons la meilleure expérience avec nos services de location de bus",
            features: [
                {
                    id: 1,
                    icon: "shield-check",
                    title: "Meilleur prix garanti",
                    description: "Prix plus bas ailleurs? Nous vous remboursons 100% de la différence."
                },
                {
                    id: 2,
                    icon: "user",
                    title: "Chauffeurs expérimentés",
                    description: "Nos chauffeurs professionnels certifiés assurent un voyage sûr et agréable."
                },
                {
                    id: 3,
                    icon: "clock",
                    title: "Disponibilité 24/7",
                    description: "Réservez votre bus à tout moment—notre flotte circule 24h/24."
                },
                {
                    id: 4,
                    icon: "headphones",
                    title: "Support 24/7",
                    description: "Besoin d'aide? Notre équipe est là quand vous en avez besoin."
                }
            ],
            image: "/images/bus-main.png"
        },
        stats: {
            sectionTitle: "CHIFFRES IMPRESSIONNANTS",
            heading: "La confiance de millions de personnes à l'échelle nationale",
            description: "Notre engagement envers la sécurité, le confort et la ponctualité fait de nous le premier choix pour transporter des millions de passagers chaque année.",
            metrics: [
                {
                    id: 1,
                    value: "4,900,000+",
                    label: "Passagers transportés",
                    description: "Plus de 7 millions de voyageurs nous font confiance chaque année.",
                    color: "purple"
                },
                {
                    id: 2,
                    value: "3,000+",
                    label: "Routes desservies annuellement",
                    color: "blue"
                },
                {
                    id: 3,
                    value: "24/7",
                    label: "Support client",
                    color: "yellow"
                }
            ]
        },
        cta: {
            heading: "Prêt à réserver votre autocar?",
            description: "Indiquez-nous votre itinéraire, date et nombre de passagers—et nous vous enverrons un devis personnalisé en quelques minutes.",
            buttonText: "Demander un Devis",
            image: "/images/support-agent.png"
        },
        footer: {
            sections: [
                {
                    title: "Services",
                    links: [
                        { name: "Événements d'entreprise", url: "/evenements-entreprise" },
                        { name: "Voyages scolaires", url: "/voyages-scolaires" },
                        { name: "Navettes", url: "/navettes" },
                        { name: "Transferts", url: "/transferts" },
                        { name: "Domicile-école", url: "/domicile-ecole" }
                    ]
                },
                {
                    title: "Ressources",
                    links: [
                        { name: "Centre d'aide", url: "/aide" },
                        { name: "Guides", url: "/guides" },
                        { name: "Réseau de partenaires", url: "/partenaires" },
                        { name: "API Développeur", url: "/api" }
                    ]
                },
                {
                    title: "Entreprise",
                    links: [
                        { name: "À Propos", url: "/a-propos" },
                        { name: "Carrières", url: "/carrieres" },
                        { name: "Presse", url: "/presse" },
                        { name: "Relations Investisseurs", url: "/investisseurs" }
                    ]
                }
            ],
            social: [
                { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
                { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
                { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
                { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
                { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" }
            ],
            copyright: "© 2025 BusVoie. Tous droits réservés."
        }
    }
};

// Helper function to get country data based on environment variable
export const getCountryData = () => {
    // const country = process.env.REACT_APP_COUNTRY || 'UK';
    const country = 'UK';
    return countryData[country] || countryData.UK;
};