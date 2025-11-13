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
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "The home of coach and minibus hire in",
      description:
        "Discover reliable and affordable coach and minibus hire in France with France Buses — ideal for corporate events, school trips, airport transfers, private tours, and group travel across the country.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "France",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Make your corporate travel effortless with our premium coach hire services across France. Whether it's for board meetings, conferences, or company events, we offer dependable and comfortable transport for your team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Turn every educational journey into a safe and enjoyable experience with our trusted school coach hire service. Our child-friendly drivers and modern vehicles guarantee comfort and safety from start to finish.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttles",
        description:
          "Experience smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services in France. Designed for convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transfers",
        description:
          "Enjoy seamless door-to-door transport with our professional transfer service anywhere in France. From airport pickups to city transfers, we provide a smooth, comfortable, and timely travel experience.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School",
        description:
          "Simplify your family's routine with our safe and reliable home to school transport service. Our professional drivers ensure punctuality and peace of mind for parents.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At France Buses, we are proud to be one of the leading providers of reliable, comfortable, and affordable group transportation across France. From Paris to Marseille, Lyon to Bordeaux, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Drivers",
          description:
            "Every France Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for a short city transfer or a long-distance journey.",
        },
        {
          title: "Tailored Travel Solutions",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across France. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Claire Dubois",
          role: "Regular Commuter, Paris",
          avatar: "avatar1",
          message:
            "I travel frequently between Paris and Lyon for work. France Buses is always on time, and the coaches are spotless. The WiFi makes it easy to stay productive on the road.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Lucas Moreau",
          role: "University Student, Toulouse",
          avatar: "avatar2",
          message:
            "As a student travelling between Toulouse and Bordeaux, France Buses has been reliable and affordable. The drivers are polite and always willing to help with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Sophie Martin",
          role: "Family Traveller, Marseille",
          avatar: "avatar3",
          message:
            "We booked France Buses for our family trip to the French Riviera. The coach was modern and very comfortable, and our driver made the journey pleasant from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Antoine Lefèvre",
          role: "Operations Manager, Lyon",
          avatar: "avatar4",
          message:
            "Our company has used France Buses for several corporate events around Lyon and Marseille. Their service is professional, flexible, and always punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Isabelle Laurent",
          role: "HR Director, Paris",
          avatar: "avatar5",
          message:
            "France Buses organized the transport for our annual conference in Paris. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Julien Bernard",
          role: "Event Coordinator, Nice",
          avatar: "avatar6",
          message:
            "We hired France Buses for an international summit in Nice. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mme. Caroline Petit",
          role: "Primary School Teacher, Bordeaux",
          avatar: "avatar7",
          message:
            "Our school trip to the Cité de l'Espace in Toulouse went perfectly thanks to France Buses. The driver was kind and attentive, and the children were very comfortable throughout.",
          rating: 5,
        },
        {
          key: "school",
          name: "M. François Lambert",
          role: "Sports Coach, Lille",
          avatar: "avatar8",
          message:
            "We use France Buses for all our sports competitions. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mme. Élodie Girard",
          role: "Headmistress, Lyon",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and France Buses delivers both. Parents appreciate how professional and friendly the service is for school transport.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route",
          description:
            "Select your pickup and drop-off points anywhere in France to plan your journey.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why France Buses",
      description:
        "Choose France Buses for reliable, comfortable, and affordable group transport.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee",
          description:
            "With France Buses, you always get the best value across France. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish.",
        },
        {
          icon: "Clock",
          title: "Always Available",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in France.",
        },
        {
          icon: "Headset",
          title: "24/7 Support",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across France",
      description:
        "At France Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "250,000+",
          label: "Passengers Transported",
          description:
            "Every year, more than a quarter of a million passengers travel with France Buses for dependable, comfortable journeys throughout France — including Paris, Lyon, Marseille, and Bordeaux.",
          highlight: true,
        },
        {
          value: "1,200+",
          label: "Journeys operated annually",
        },
        {
          value: "24/7",
          label: "Customer support and live updates",
        },
      ],
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
        { name: "Alliance Française", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your journey started",
      description:
        "Get a quick quote from France Buses and travel with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
      buttonText: "Request a Quote",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers",
          subTitle:
            "Reliable transfers across France with France Buses — premium comfort, professional drivers, and on time service wherever you travel.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service",
          title:
            "France Buses offers smooth and comfortable door to door transfers across France. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free.",
          features: [
            "Meet and greet service included",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events",
          subTitle:
            "France Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across France.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service",
          title:
            "France Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout France. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips",
          subTitle:
            "Make every school trip memorable with France Buses — safe, comfortable, and expertly managed transport for students and teachers across France.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service",
          title:
            "France Buses provides reliable and enjoyable school trip transport across France. From museums to theme parks, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and fun for everyone.",
          features: [
            "Professional, background checked drivers",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services",
          subTitle:
            "Experience seamless travel with France Buses — efficient, comfortable, and dependable shuttle solutions across France for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service",
          title:
            "France Buses provides smooth and scheduled shuttle transport across France. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics.",
          features: [
            "Scheduled and on demand shuttle options",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5449019726225!2d2.3680757764638334!3d48.8478188713308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67203731d19a3%3A0xdc297014622a7bc4!2sRegus%20-%20Paris%20Gare%20de%20Lyon!5e0!3m2!1sen!2sae!4v1762318953101!5m2!1sen!2sae",
    },
  },

  // Poland (default)
  pl: {
    // General company info
    company: {
      name: "Poland Buses",
      phone: "+44 20 3834 3226",
      email: "info@polandbuses.com",
      address: "Jarosława Dąbrowskiego 71/71, 02-586 Warszawa, Poland",
      logo: "../public/images/poland.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Poland with Poland Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Poland.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Poland",
      cities: ["Warsaw", "Krakow", "Wroclaw", "Gdansk"],
    },

    // Services section
    services: [
      {
        key: "corporate-events",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Poland. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school-trips",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Poland. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Poland. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Poland. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Poland. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
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
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Anna Nowak",
          role: "Regular Commuter, Warsaw",
          avatar: "avatar1",
          message:
            "I travel frequently between Warsaw and Krakow for business. Poland Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Piotr Kowalski",
          role: "University Student, Wroclaw",
          avatar: "avatar2",
          message:
            "As a student traveling between Wroclaw and Gdansk, Poland Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Katarzyna Wisniewska",
          role: "Family Traveller, Krakow",
          avatar: "avatar3",
          message:
            "We booked Poland Buses for our family trip to the Polish mountains. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Marek Lewandowski",
          role: "Operations Manager, Warsaw",
          avatar: "avatar4",
          message:
            "Our company has used Poland Buses for several corporate events around Warsaw and Krakow. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Agnieszka Wojcik",
          role: "HR Director, Gdansk",
          avatar: "avatar5",
          message:
            "Poland Buses organized transport for our annual conference in Gdansk. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Tomasz Kaminski",
          role: "Event Coordinator, Wroclaw",
          avatar: "avatar6",
          message:
            "We hired Poland Buses for an international business summit in Wroclaw. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Pani Joanna Zielinska",
          role: "Primary School Teacher, Krakow",
          avatar: "avatar7",
          message:
            "Our school trip to the Wieliczka Salt Mine went perfectly thanks to Poland Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Pan Jan Kowalczyk",
          role: "Sports Coach, Warsaw",
          avatar: "avatar8",
          message:
            "We use Poland Buses for all our sports competitions across Poland. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Pani Marta Szymanska",
          role: "Headmistress, Poznan",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Poland Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Poland.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Poland",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Poland",
          description:
            "Select your pickup and drop-off points anywhere in Poland to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Poland.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Polish journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Poland Buses",
      description:
        "Choose Poland Buses for reliable, comfortable, and affordable group transport throughout Poland.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Poland",
          description:
            "With Poland Buses, you always get the best value across Poland. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Polish Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Poland.",
        },
        {
          icon: "Clock",
          title: "Always Available in Poland",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Poland.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Poland",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Poland.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Poland",
      description:
        "At Poland Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Poland. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "180,000+",
          label: "Passengers Transported in Poland",
          description:
            "Every year, more than 180,000 passengers travel with Poland Buses for dependable, comfortable journeys throughout Poland — including Warsaw, Krakow, Wroclaw, and Gdansk.",
          highlight: true,
        },
        {
          value: "950+",
          label: "Journeys operated annually across Poland",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Poland",
        },
      ],
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
        { name: "Polish Tourism Organization", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Polish journey started",
      description:
        "Get a quick quote from Poland Buses and travel across Poland with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
      buttonText: "Request a Quote",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Poland",
          subTitle:
            "Reliable transfers across Poland with Poland Buses — premium comfort, professional drivers, and on time service wherever you travel in Poland.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Poland",
          title:
            "Poland Buses offers smooth and comfortable door to door transfers across Poland. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Poland.",
          features: [
            "Meet and greet service included throughout Poland",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Poland",
          subTitle:
            "Poland Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Poland.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Poland",
          title:
            "Poland Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Poland. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Poland",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Poland",
          subTitle:
            "Make every school trip memorable with Poland Buses — safe, comfortable, and expertly managed transport for students and teachers across Poland.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Poland",
          title:
            "Poland Buses provides reliable and enjoyable school trip transport across Poland. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Poland",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options across Poland",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Poland",
          subTitle:
            "Experience seamless travel with Poland Buses — efficient, comfortable, and dependable shuttle solutions across Poland for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Poland",
          title:
            "Poland Buses provides smooth and scheduled shuttle transport across Poland. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Poland.",
          features: [
            "Scheduled and on demand shuttle options across Poland",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Poland",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!3m2!1sen!2sae!4v1762926711155!5m2!1sen!2sae!6m8!1m7!1s00AOFYhltYpGH9mRZqndkw!2m2!1d52.20029292942072!2d21.00900400333805!3f139.58788069454607!4f-22.586218840216887!5f0.7820865974627469",
    },
  },

  // Romania (default)
  ro: {
    // General company info
    company: {
      name: "Romania Buses",
      phone: "+44 20 3834 3226",
      email: "info@romaniabuses.com",
      address: "Str. Dr. Nicolae D. Staicovici 75, București 050557, Romania",
      logo: "../public/images/romania.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Romania with Romania Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Romania.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Romania",
      cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Romania. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Romania. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Romania. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Romania. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Romania. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Romania Buses, we are proud to be one of Romania's leading providers of reliable, comfortable, and affordable group transportation. From Bucharest to Cluj-Napoca, Timisoara to Iasi, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Romania.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Romanian Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Romanian Drivers",
          description:
            "Every Romania Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Romania.",
        },
        {
          title: "Tailored Travel Solutions Romania",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Romania. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Romania",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Romania.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Romanian Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Ana Popescu",
          role: "Regular Commuter, Bucharest",
          avatar: "avatar1",
          message:
            "I travel frequently between Bucharest and Brasov for business. Romania Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Andrei Ionescu",
          role: "University Student, Cluj-Napoca",
          avatar: "avatar2",
          message:
            "As a student traveling between Cluj-Napoca and Timisoara, Romania Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Elena Dumitru",
          role: "Family Traveller, Iasi",
          avatar: "avatar3",
          message:
            "We booked Romania Buses for our family trip to the Carpathian Mountains. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Mihai Stan",
          role: "Operations Manager, Bucharest",
          avatar: "avatar4",
          message:
            "Our company has used Romania Buses for several corporate events around Bucharest and Constanta. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Cristina Radu",
          role: "HR Director, Timisoara",
          avatar: "avatar5",
          message:
            "Romania Buses organized transport for our annual conference in Timisoara. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Alexandru Moldovan",
          role: "Event Coordinator, Cluj-Napoca",
          avatar: "avatar6",
          message:
            "We hired Romania Buses for an international business summit in Cluj-Napoca. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Doamna Maria Constantin",
          role: "Primary School Teacher, Brasov",
          avatar: "avatar7",
          message:
            "Our school trip to Peles Castle went perfectly thanks to Romania Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Domnul Gabriel Popa",
          role: "Sports Coach, Bucharest",
          avatar: "avatar8",
          message:
            "We use Romania Buses for all our sports competitions across Romania. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Doamna Laura Mihai",
          role: "Headmistress, Sibiu",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Romania Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Romania.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Romania",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Romania",
          description:
            "Select your pickup and drop-off points anywhere in Romania to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Romania.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Romanian journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Romania Buses",
      description:
        "Choose Romania Buses for reliable, comfortable, and affordable group transport throughout Romania.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Romania",
          description:
            "With Romania Buses, you always get the best value across Romania. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Romanian Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Romania.",
        },
        {
          icon: "Clock",
          title: "Always Available in Romania",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Romania.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Romania",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Romania.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Romania",
      description:
        "At Romania Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Romania. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "150,000+",
          label: "Passengers Transported in Romania",
          description:
            "Every year, more than 150,000 passengers travel with Romania Buses for dependable, comfortable journeys throughout Romania — including Bucharest, Cluj-Napoca, Timisoara, and Iasi.",
          highlight: true,
        },
        {
          value: "800+",
          label: "Journeys operated annually across Romania",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Romania",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "University of Bucharest", logo: "/images/partner/psg.png" },
        {
          name: "Apple Romania",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        {
          name: "Bitdefender",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        { name: "Romanian Olympic Committee", logo: "/images/partner/ttl.png" },
        { name: "Altex", logo: "/images/partner/if.png" },
        { name: "Babes-Bolyai University", logo: "/images/partner/su.png" },
        { name: "OMV Petrom", logo: "/images/partner/ac.png" },
        { name: "Pro TV", logo: "/images/partner/rn.png" },
        { name: "Orange Romania", logo: "/images/partner/ul.png" },
        { name: "Romanian Tourism Authority", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Romanian journey started",
      description:
        "Get a quick quote from Romania Buses and travel across Romania with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
      buttonText: "Request a Quote",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Romania",
          subTitle:
            "Reliable transfers across Romania with Romania Buses — premium comfort, professional drivers, and on time service wherever you travel in Romania.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Romania",
          title:
            "Romania Buses offers smooth and comfortable door to door transfers across Romania. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Romania.",
          features: [
            "Meet and greet service included throughout Romania",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Romania",
          subTitle:
            "Romania Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Romania.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Romania",
          title:
            "Romania Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Romania. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Romania",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Romania",
          subTitle:
            "Make every school trip memorable with Romania Buses — safe, comfortable, and expertly managed transport for students and teachers across Romania.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Romania",
          title:
            "Romania Buses provides reliable and enjoyable school trip transport across Romania. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Romania",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options across Romania",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Romania",
          subTitle:
            "Experience seamless travel with Romania Buses — efficient, comfortable, and dependable shuttle solutions across Romania for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Romania",
          title:
            "Romania Buses provides smooth and scheduled shuttle transport across Romania. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Romania.",
          features: [
            "Scheduled and on demand shuttle options across Romania",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Romania",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.07484637839116!2d26.07991853422068!3d44.42910994292718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff65e926a3b5%3A0x123d5705ce9a8fab!2sStr.%20Dr.%20Nicolae%20D.%20Staicovici%2075%2C%20Bucure%C8%99ti%20050557%2C%20Romania!5e0!3m2!1sen!2sae!4v1762927435641!5m2!1sen!2sae",
    },
  },

  // Hungary (default)
  hu: {
    // General company info
    company: {
      name: "Hungary Buses",
      phone: "+44 20 3834 3226",
      email: "info@hungarybuses.com",
      address: "Budapest, József Attila u. 20, 1051 Hungary",
      logo: "../public/images/hungary.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Hungary with Hungary Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Hungary.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Hungary",
      cities: ["Budapest", "Debrecen", "Szeged", "Pécs"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Hungary. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Hungary. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Hungary. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Hungary. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Hungary. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Hungary Buses, we are proud to be one of Hungary's leading providers of reliable, comfortable, and affordable group transportation. From Budapest to Debrecen, Szeged to Pécs, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Hungary.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Hungarian Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Hungarian Drivers",
          description:
            "Every Hungary Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Hungary.",
        },
        {
          title: "Tailored Travel Solutions Hungary",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Hungary. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Hungary",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Hungary.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Hungarian Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Katalin Nagy",
          role: "Regular Commuter, Budapest",
          avatar: "avatar1",
          message:
            "I travel frequently between Budapest and Debrecen for business. Hungary Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Gábor Kovács",
          role: "University Student, Szeged",
          avatar: "avatar2",
          message:
            "As a student traveling between Szeged and Pécs, Hungary Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Eszter Tóth",
          role: "Family Traveller, Debrecen",
          avatar: "avatar3",
          message:
            "We booked Hungary Buses for our family trip to Lake Balaton. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "István Horváth",
          role: "Operations Manager, Budapest",
          avatar: "avatar4",
          message:
            "Our company has used Hungary Buses for several corporate events around Budapest and Győr. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Mária Szabó",
          role: "HR Director, Pécs",
          avatar: "avatar5",
          message:
            "Hungary Buses organized transport for our annual conference in Pécs. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Péter Varga",
          role: "Event Coordinator, Debrecen",
          avatar: "avatar6",
          message:
            "We hired Hungary Buses for an international business summit in Debrecen. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Nagy Edit",
          role: "Primary School Teacher, Szeged",
          avatar: "avatar7",
          message:
            "Our school trip to Budapest Castle went perfectly thanks to Hungary Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Kiss László",
          role: "Sports Coach, Budapest",
          avatar: "avatar8",
          message:
            "We use Hungary Buses for all our sports competitions across Hungary. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Molnár Ildikó",
          role: "Headmistress, Győr",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Hungary Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Hungary.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Hungary",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Hungary",
          description:
            "Select your pickup and drop-off points anywhere in Hungary to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Hungary.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Hungarian journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Hungary Buses",
      description:
        "Choose Hungary Buses for reliable, comfortable, and affordable group transport throughout Hungary.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Hungary",
          description:
            "With Hungary Buses, you always get the best value across Hungary. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Hungarian Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Hungary.",
        },
        {
          icon: "Clock",
          title: "Always Available in Hungary",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Hungary.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Hungary",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Hungary.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Hungary",
      description:
        "At Hungary Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Hungary. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "120,000+",
          label: "Passengers Transported in Hungary",
          description:
            "Every year, more than 120,000 passengers travel with Hungary Buses for dependable, comfortable journeys throughout Hungary — including Budapest, Debrecen, Szeged, and Pécs.",
          highlight: true,
        },
        {
          value: "700+",
          label: "Journeys operated annually across Hungary",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Hungary",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "Eötvös Loránd University", logo: "/images/partner/psg.png" },
        {
          name: "Apple Hungary",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        {
          name: "Richter Gedeon",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        {
          name: "Hungarian Olympic Committee",
          logo: "/images/partner/ttl.png",
        },
        { name: "Media Markt Hungary", logo: "/images/partner/if.png" },
        { name: "University of Szeged", logo: "/images/partner/su.png" },
        { name: "MOL Group", logo: "/images/partner/ac.png" },
        { name: "RTL Klub", logo: "/images/partner/rn.png" },
        { name: "Magyar Telekom", logo: "/images/partner/ul.png" },
        { name: "Hungarian Tourism Agency", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Hungarian journey started",
      description:
        "Get a quick quote from Hungary Buses and travel across Hungary with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Hungary",
          subTitle:
            "Reliable transfers across Hungary with Hungary Buses — premium comfort, professional drivers, and on time service wherever you travel in Hungary.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Hungary",
          title:
            "Hungary Buses offers smooth and comfortable door to door transfers across Hungary. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Hungary.",
          features: [
            "Meet and greet service included throughout Hungary",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Hungary",
          subTitle:
            "Hungary Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Hungary.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Hungary",
          title:
            "Hungary Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Hungary. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Hungary",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Hungary",
          subTitle:
            "Make every school trip memorable with Hungary Buses — safe, comfortable, and expertly managed transport for students and teachers across Hungary.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Hungary",
          title:
            "Hungary Buses provides reliable and enjoyable school trip transport across Hungary. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Hungary",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options across Hungary",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Hungary",
          subTitle:
            "Experience seamless travel with Hungary Buses — efficient, comfortable, and dependable shuttle solutions across Hungary for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Hungary",
          title:
            "Hungary Buses provides smooth and scheduled shuttle transport across Hungary. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Hungary.",
          features: [
            "Scheduled and on demand shuttle options across Hungary",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Hungary",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200.34582463101017!2d19.05253790995156!3d47.49923676967136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6aa7b53aa7%3A0x55c1f98e4b66c8a2!2sViegas%20Adrienn%20-%20G%C3%A1la%20Sz%C3%A9ps%C3%A9gszalon!5e0!3m2!1sen!2sae!4v1763011755179!5m2!1sen!2sae",
    },
  },

  // Portugal (default)
  pt: {
    // General company info
    company: {
      name: "Portugal Buses",
      phone: "+44 20 3834 3226",
      email: "info@portugalbuses.com",
      address: "R. Lucinda Simões 10A, 1900-034 Lisboa, Portugal",
      logo: "/images/portugal.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Portugal with Portugal Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Portugal.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Portugal",
      cities: ["Lisbon", "Porto", "Faro", "Coimbra"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Portugal. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Portugal. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Portugal. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Portugal. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Portugal. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Portugal Buses, we are proud to be one of Portugal's leading providers of reliable, comfortable, and affordable group transportation. From Lisbon to Porto, Faro to Coimbra, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Portugal.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Portuguese Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Portuguese Drivers",
          description:
            "Every Portugal Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Portugal.",
        },
        {
          title: "Tailored Travel Solutions Portugal",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Portugal. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Portugal",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Portugal.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Portuguese Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Ana Silva",
          role: "Regular Commuter, Lisbon",
          avatar: "avatar1",
          message:
            "I travel frequently between Lisbon and Porto for business. Portugal Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Miguel Santos",
          role: "University Student, Coimbra",
          avatar: "avatar2",
          message:
            "As a student traveling between Coimbra and Faro, Portugal Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Catarina Oliveira",
          role: "Family Traveller, Porto",
          avatar: "avatar3",
          message:
            "We booked Portugal Buses for our family trip to the Algarve. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "João Costa",
          role: "Operations Manager, Lisbon",
          avatar: "avatar4",
          message:
            "Our company has used Portugal Buses for several corporate events around Lisbon and Cascais. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Sofia Rodrigues",
          role: "HR Director, Porto",
          avatar: "avatar5",
          message:
            "Portugal Buses organized transport for our annual conference in Porto. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Ricardo Fernandes",
          role: "Event Coordinator, Faro",
          avatar: "avatar6",
          message:
            "We hired Portugal Buses for an international business summit in Faro. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Prof. Maria Almeida",
          role: "Primary School Teacher, Lisbon",
          avatar: "avatar7",
          message:
            "Our school trip to Sintra went perfectly thanks to Portugal Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Prof. Carlos Sousa",
          role: "Sports Coach, Porto",
          avatar: "avatar8",
          message:
            "We use Portugal Buses for all our sports competitions across Portugal. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Dra. Isabel Martins",
          role: "Headmistress, Coimbra",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Portugal Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Portugal.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Portugal",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Portugal",
          description:
            "Select your pickup and drop-off points anywhere in Portugal to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Portugal.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Portuguese journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Portugal Buses",
      description:
        "Choose Portugal Buses for reliable, comfortable, and affordable group transport throughout Portugal.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Portugal",
          description:
            "With Portugal Buses, you always get the best value across Portugal. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Portuguese Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Portugal.",
        },
        {
          icon: "Clock",
          title: "Always Available in Portugal",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Portugal.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Portugal",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Portugal.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Portugal",
      description:
        "At Portugal Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Portugal. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "140,000+",
          label: "Passengers Transported in Portugal",
          description:
            "Every year, more than 140,000 passengers travel with Portugal Buses for dependable, comfortable journeys throughout Portugal — including Lisbon, Porto, Faro, and Coimbra.",
          highlight: true,
        },
        {
          value: "850+",
          label: "Journeys operated annually across Portugal",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Portugal",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "University of Lisbon", logo: "/images/partner/psg.png" },
        {
          name: "Apple Portugal",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        {
          name: "Galp Energia",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        {
          name: "Portuguese Olympic Committee",
          logo: "/images/partner/ttl.png",
        },
        { name: "Worten", logo: "/images/partner/if.png" },
        { name: "University of Porto", logo: "/images/partner/su.png" },
        { name: "TAP Air Portugal", logo: "/images/partner/ac.png" },
        { name: "SIC Television", logo: "/images/partner/rn.png" },
        { name: "NOS Communications", logo: "/images/partner/ul.png" },
        { name: "Turismo de Portugal", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Portuguese journey started",
      description:
        "Get a quick quote from Portugal Buses and travel across Portugal with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Portugal",
          subTitle:
            "Reliable transfers across Portugal with Portugal Buses — premium comfort, professional drivers, and on time service wherever you travel in Portugal.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Portugal",
          title:
            "Portugal Buses offers smooth and comfortable door to door transfers across Portugal. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Portugal.",
          features: [
            "Meet and greet service included throughout Portugal",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Portugal",
          subTitle:
            "Portugal Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Portugal.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Portugal",
          title:
            "Portugal Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Portugal. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Portugal",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Portugal",
          subTitle:
            "Make every school trip memorable with Portugal Buses — safe, comfortable, and expertly managed transport for students and teachers across Portugal.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Portugal",
          title:
            "Portugal Buses provides reliable and enjoyable school trip transport across Portugal. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Portugal",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options across Portugal",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Portugal",
          subTitle:
            "Experience seamless travel with Portugal Buses — efficient, comfortable, and dependable shuttle solutions across Portugal for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Portugal",
          title:
            "Portugal Buses provides smooth and scheduled shuttle transport across Portugal. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Portugal.",
          features: [
            "Scheduled and on demand shuttle options across Portugal",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Portugal",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.513688973491!2d-9.131806005794886!3d38.73573590443839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933bd9e693399%3A0x3391ce1c7b8f9ec0!2sR.%20Lucinda%20Sim%C3%B5es%2010A%2C%201900-034%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sae!4v1763013380410!5m2!1sen!2sae",
    },
  },

  // Brazil (default)
  br: {
    // General company info
    company: {
      name: "Brazil Buses",
      phone: "+44 20 3834 3226",
      email: "info@brazilbuses.com",
      address:
        "St. de Habitações Individuais Sul EQI 9/11 - Lago Sul, Brasília - DF, 71625-090, Brazil",
      logo: "/images/brazil.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Brazil with Brazil Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Brazil.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Brazil",
      cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Brazil. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Brazil. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Brazil. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Brazil. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Brazil. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Brazil Buses, we are proud to be one of Brazil's leading providers of reliable, comfortable, and affordable group transportation. From São Paulo to Rio de Janeiro, Brasília to Salvador, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Brazil.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Brazilian Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Brazilian Drivers",
          description:
            "Every Brazil Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Brazil.",
        },
        {
          title: "Tailored Travel Solutions Brazil",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Brazil. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Brazil",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Brazil.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Brazilian Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Ana Silva",
          role: "Regular Commuter, São Paulo",
          avatar: "avatar1",
          message:
            "I travel frequently between São Paulo and Rio de Janeiro for business. Brazil Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Carlos Santos",
          role: "University Student, Brasília",
          avatar: "avatar2",
          message:
            "As a student traveling between Brasília and Salvador, Brazil Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Fernanda Oliveira",
          role: "Family Traveller, Rio de Janeiro",
          avatar: "avatar3",
          message:
            "We booked Brazil Buses for our family trip to Florianópolis. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Ricardo Costa",
          role: "Operations Manager, São Paulo",
          avatar: "avatar4",
          message:
            "Our company has used Brazil Buses for several corporate events around São Paulo and Campinas. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Patrícia Rodrigues",
          role: "HR Director, Rio de Janeiro",
          avatar: "avatar5",
          message:
            "Brazil Buses organized transport for our annual conference in Rio. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Marcos Fernandes",
          role: "Event Coordinator, Salvador",
          avatar: "avatar6",
          message:
            "We hired Brazil Buses for an international business summit in Salvador. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Prof. Maria Almeida",
          role: "Primary School Teacher, Brasília",
          avatar: "avatar7",
          message:
            "Our school trip to the National Museum went perfectly thanks to Brazil Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Prof. João Sousa",
          role: "Sports Coach, São Paulo",
          avatar: "avatar8",
          message:
            "We use Brazil Buses for all our sports competitions across Brazil. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Dra. Carla Martins",
          role: "Headmistress, Curitiba",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Brazil Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Brazil.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Brazil",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Brazil",
          description:
            "Select your pickup and drop-off points anywhere in Brazil to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Brazil.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Brazilian journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Brazil Buses",
      description:
        "Choose Brazil Buses for reliable, comfortable, and affordable group transport throughout Brazil.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Brazil",
          description:
            "With Brazil Buses, you always get the best value across Brazil. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Brazilian Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Brazil.",
        },
        {
          icon: "Clock",
          title: "Always Available in Brazil",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Brazil.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Brazil",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Brazil.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Brazil",
      description:
        "At Brazil Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Brazil. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "300,000+",
          label: "Passengers Transported in Brazil",
          description:
            "Every year, more than 300,000 passengers travel with Brazil Buses for dependable, comfortable journeys throughout Brazil — including São Paulo, Rio de Janeiro, Brasília, and Salvador.",
          highlight: true,
        },
        {
          value: "1,500+",
          label: "Journeys operated annually across Brazil",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Brazil",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "University of São Paulo", logo: "/images/partner/psg.png" },
        {
          name: "Apple Brazil",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        {
          name: "Petrobras",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        {
          name: "Brazilian Olympic Committee",
          logo: "/images/partner/ttl.png",
        },
        { name: "Magazine Luiza", logo: "/images/partner/if.png" },
        { name: "University of Brasília", logo: "/images/partner/su.png" },
        { name: "Vale", logo: "/images/partner/ac.png" },
        { name: "Globo TV", logo: "/images/partner/rn.png" },
        { name: "Vivo Telefônica", logo: "/images/partner/ul.png" },
        { name: "Embratur", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Brazilian journey started",
      description:
        "Get a quick quote from Brazil Buses and travel across Brazil with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Brazil",
          subTitle:
            "Reliable transfers across Brazil with Brazil Buses — premium comfort, professional drivers, and on time service wherever you travel in Brazil.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Brazil",
          title:
            "Brazil Buses offers smooth and comfortable door to door transfers across Brazil. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Brazil.",
          features: [
            "Meet and greet service included throughout Brazil",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Brazil",
          subTitle:
            "Brazil Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Brazil.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Brazil",
          title:
            "Brazil Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Brazil. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Brazil",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Brazil",
          subTitle:
            "Make every school trip memorable with Brazil Buses — safe, comfortable, and expertly managed transport for students and teachers across Brazil.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Brazil",
          title:
            "Brazil Buses provides reliable and enjoyable school trip transport across Brazil. From museums to historical sites, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Brazil",
            "Custom itineraries to match school plans",
            "Educational and recreational trip options across Brazil",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Brazil",
          subTitle:
            "Experience seamless travel with Brazil Buses — efficient, comfortable, and dependable shuttle solutions across Brazil for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Brazil",
          title:
            "Brazil Buses provides smooth and scheduled shuttle transport across Brazil. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Brazil.",
          features: [
            "Scheduled and on demand shuttle options across Brazil",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Brazil",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.367513420116!2d-47.87534040951173!3d-15.830992864797246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a24dcf46412e1%3A0x32e55a27d98a9637!2s19%20-%20St.%20de%20Habita%C3%A7%C3%B5es%20Individuais%20Sul%20EQI%209%2F11%20-%20Lago%20Sul%2C%20Bras%C3%ADlia%20-%20DF%2C%2071625-090%2C%20Brazil!5e0!3m2!1sen!2sae!4v1763015141251!5m2!1sen!2sae",
    },
  },

  // Morocco (default)
  ma: {
    // General company info
    company: {
      name: "Morocco Buses",
      phone: "+44 20 3834 3226",
      email: "info@moroccobuses.com",
      address: "X4F2+QJW, Avenue Al Mohit Al Hadi, Rabat, Morocco",
      logo: "/images/morocco.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Morocco with Morocco Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Morocco.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Morocco",
      cities: ["Casablanca", "Marrakech", "Rabat", "Fes"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Morocco. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Morocco. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Morocco. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Morocco. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Morocco. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Morocco Buses, we are proud to be one of Morocco's leading providers of reliable, comfortable, and affordable group transportation. From Casablanca to Marrakech, Rabat to Fes, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Morocco.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Moroccan Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Moroccan Drivers",
          description:
            "Every Morocco Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Morocco.",
        },
        {
          title: "Tailored Travel Solutions Morocco",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Morocco. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Morocco",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Morocco.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Moroccan Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Fatima Alami",
          role: "Regular Commuter, Casablanca",
          avatar: "avatar1",
          message:
            "I travel frequently between Casablanca and Rabat for business. Morocco Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Youssef Benali",
          role: "University Student, Fes",
          avatar: "avatar2",
          message:
            "As a student traveling between Fes and Marrakech, Morocco Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Amina El Fassi",
          role: "Family Traveller, Marrakech",
          avatar: "avatar3",
          message:
            "We booked Morocco Buses for our family trip to the Atlas Mountains. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Karim Bouzidi",
          role: "Operations Manager, Casablanca",
          avatar: "avatar4",
          message:
            "Our company has used Morocco Buses for several corporate events around Casablanca and Rabat. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Nadia Cherkaoui",
          role: "HR Director, Rabat",
          avatar: "avatar5",
          message:
            "Morocco Buses organized transport for our annual conference in Rabat. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Hassan Mernissi",
          role: "Event Coordinator, Marrakech",
          avatar: "avatar6",
          message:
            "We hired Morocco Buses for an international business summit in Marrakech. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mme. Samira Idrissi",
          role: "Primary School Teacher, Rabat",
          avatar: "avatar7",
          message:
            "Our school trip to the Hassan Tower went perfectly thanks to Morocco Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "M. Ahmed Ziani",
          role: "Sports Coach, Casablanca",
          avatar: "avatar8",
          message:
            "We use Morocco Buses for all our sports competitions across Morocco. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mme. Leila Bennis",
          role: "Headmistress, Fes",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Morocco Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Morocco.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Morocco",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Morocco",
          description:
            "Select your pickup and drop-off points anywhere in Morocco to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Morocco.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Moroccan journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Morocco Buses",
      description:
        "Choose Morocco Buses for reliable, comfortable, and affordable group transport throughout Morocco.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Morocco",
          description:
            "With Morocco Buses, you always get the best value across Morocco. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Moroccan Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Morocco.",
        },
        {
          icon: "Clock",
          title: "Always Available in Morocco",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Morocco.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Morocco",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Morocco.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Morocco",
      description:
        "At Morocco Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Morocco. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "200,000+",
          label: "Passengers Transported in Morocco",
          description:
            "Every year, more than 200,000 passengers travel with Morocco Buses for dependable, comfortable journeys throughout Morocco — including Casablanca, Marrakech, Rabat, and Fes.",
          highlight: true,
        },
        {
          value: "1,100+",
          label: "Journeys operated annually across Morocco",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Morocco",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "Mohammed V University", logo: "/images/partner/psg.png" },
        {
          name: "Apple Morocco",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        {
          name: "OCP Group",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        { name: "Moroccan Olympic Committee", logo: "/images/partner/ttl.png" },
        { name: "Marjane Holding", logo: "/images/partner/if.png" },
        { name: "University of Casablanca", logo: "/images/partner/su.png" },
        { name: "Royal Air Maroc", logo: "/images/partner/ac.png" },
        { name: "2M TV", logo: "/images/partner/rn.png" },
        { name: "Maroc Telecom", logo: "/images/partner/ul.png" },
        {
          name: "Moroccan National Tourism Office",
          logo: "/images/partner/af.png",
        },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Moroccan journey started",
      description:
        "Get a quick quote from Morocco Buses and travel across Morocco with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Morocco",
          subTitle:
            "Reliable transfers across Morocco with Morocco Buses — premium comfort, professional drivers, and on time service wherever you travel in Morocco.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Morocco",
          title:
            "Morocco Buses offers smooth and comfortable door to door transfers across Morocco. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Morocco.",
          features: [
            "Meet and greet service included throughout Morocco",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Morocco",
          subTitle:
            "Morocco Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Morocco.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Morocco",
          title:
            "Morocco Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Morocco. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Morocco",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Morocco",
          subTitle:
            "Make every school trip memorable with Morocco Buses — safe, comfortable, and expertly managed transport for students and teachers across Morocco.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Morocco",
          title:
            "Morocco Buses provides reliable and enjoyable school trip transport across Morocco. From historical sites to cultural landmarks, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Morocco",
            "Custom itineraries to match school plans",
            "Educational and cultural trip options across Morocco",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Morocco",
          subTitle:
            "Experience seamless travel with Morocco Buses — efficient, comfortable, and dependable shuttle solutions across Morocco for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Morocco",
          title:
            "Morocco Buses provides smooth and scheduled shuttle transport across Morocco. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Morocco.",
          features: [
            "Scheduled and on demand shuttle options across Morocco",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Morocco",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.92091901734037!2d-6.898720302662731!3d33.97443886766701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d388db6ee27%3A0x6ee11c153c67a176!2sX4F2%2BQJW%2C%20Avenue%20Al%20Mohit%20Al%20Hadi%2C%20Rabat%2C%20Morocco!5e0!3m2!1sen!2sae!4v1763015604379!5m2!1sen!2sae",
    },
  },

  // Saudi Arabia (default)
  sa: {
    // General company info
    company: {
      name: "Saudi Buses",
      phone: "+44 20 3834 3226",
      email: "info@saudibuses.com",
      address:
        "8194 Al Mujashiah, 5171, As Suwaidi, Riyadh 12797, Saudi Arabia",
      logo: "/images/saudi.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Saudi Arabia with Saudi Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout the Kingdom.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Saudi Arabia",
      cities: ["Riyadh", "Jeddah", "Dammam", "Mecca"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Saudi Arabia. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Saudi Arabia. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Saudi Arabia. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Saudi Arabia. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Saudi Arabia. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Saudi Buses, we are proud to be one of Saudi Arabia's leading providers of reliable, comfortable, and affordable group transportation. From Riyadh to Jeddah, Dammam to Mecca, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout the Kingdom.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Saudi Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Saudi Drivers",
          description:
            "Every Saudi Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Saudi Arabia.",
        },
        {
          title: "Tailored Travel Solutions Saudi Arabia",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Saudi Arabia. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Saudi Arabia",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Saudi Arabia.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Saudi Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Ahmed Al-Rashid",
          role: "Regular Commuter, Riyadh",
          avatar: "avatar1",
          message:
            "I travel frequently between Riyadh and Jeddah for business. Saudi Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Mohammed Al-Ghamdi",
          role: "University Student, Dammam",
          avatar: "avatar2",
          message:
            "As a student traveling between Dammam and Riyadh, Saudi Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Sarah Al-Otaibi",
          role: "Family Traveller, Jeddah",
          avatar: "avatar3",
          message:
            "We booked Saudi Buses for our family trip to Abha. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Khalid Al-Mansour",
          role: "Operations Manager, Riyadh",
          avatar: "avatar4",
          message:
            "Our company has used Saudi Buses for several corporate events around Riyadh and Eastern Province. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Noura Al-Saud",
          role: "HR Director, Jeddah",
          avatar: "avatar5",
          message:
            "Saudi Buses organized transport for our annual conference in Jeddah. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Faisal Al-Qahtani",
          role: "Event Coordinator, Dammam",
          avatar: "avatar6",
          message:
            "We hired Saudi Buses for an international business summit in Dammam. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mr. Abdullah Al-Harbi",
          role: "Primary School Teacher, Riyadh",
          avatar: "avatar7",
          message:
            "Our school trip to the National Museum went perfectly thanks to Saudi Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mr. Omar Al-Zahrani",
          role: "Sports Coach, Jeddah",
          avatar: "avatar8",
          message:
            "We use Saudi Buses for all our sports competitions across Saudi Arabia. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Ms. Layla Al-Amri",
          role: "Headmistress, Dammam",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Saudi Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Saudi Arabia.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Saudi Arabia",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Saudi Arabia",
          description:
            "Select your pickup and drop-off points anywhere in Saudi Arabia to plan your journey across the Kingdom.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Saudi Arabia.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Saudi journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Saudi Buses",
      description:
        "Choose Saudi Buses for reliable, comfortable, and affordable group transport throughout Saudi Arabia.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Saudi Arabia",
          description:
            "With Saudi Buses, you always get the best value across Saudi Arabia. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Saudi Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Saudi Arabia.",
        },
        {
          icon: "Clock",
          title: "Always Available in Saudi Arabia",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Saudi Arabia.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Saudi Arabia",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Saudi Arabia.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Saudi Arabia",
      description:
        "At Saudi Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Saudi Arabia. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the Kingdom.",
      stats: [
        {
          value: "350,000+",
          label: "Passengers Transported in Saudi Arabia",
          description:
            "Every year, more than 350,000 passengers travel with Saudi Buses for dependable, comfortable journeys throughout Saudi Arabia — including Riyadh, Jeddah, Dammam, and Mecca.",
          highlight: true,
        },
        {
          value: "1,800+",
          label: "Journeys operated annually across Saudi Arabia",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Saudi Arabia",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "King Saud University", logo: "/images/partner/psg.png" },
        {
          name: "Apple Saudi Arabia",
          logo: "/images/partner/apple-logo-banner.avif",
        },
        { name: "SABIC", logo: "/images/partner/nintendo-logo-banner.avif" },
        { name: "Saudi Olympic Committee", logo: "/images/partner/ttl.png" },
        { name: "Jarir Bookstore", logo: "/images/partner/if.png" },
        { name: "King Abdulaziz University", logo: "/images/partner/su.png" },
        { name: "Saudi Aramco", logo: "/images/partner/ac.png" },
        { name: "MBC Group", logo: "/images/partner/rn.png" },
        { name: "STC", logo: "/images/partner/ul.png" },
        { name: "Saudi Tourism Authority", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Saudi journey started",
      description:
        "Get a quick quote from Saudi Buses and travel across Saudi Arabia with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Saudi Arabia",
          subTitle:
            "Reliable transfers across Saudi Arabia with Saudi Buses — premium comfort, professional drivers, and on time service wherever you travel in the Kingdom.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Saudi Arabia",
          title:
            "Saudi Buses offers smooth and comfortable door to door transfers across Saudi Arabia. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout the Kingdom.",
          features: [
            "Meet and greet service included throughout Saudi Arabia",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Saudi Arabia",
          subTitle:
            "Saudi Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Saudi Arabia.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Saudi Arabia",
          title:
            "Saudi Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Saudi Arabia. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Saudi Arabia",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Saudi Arabia",
          subTitle:
            "Make every school trip memorable with Saudi Buses — safe, comfortable, and expertly managed transport for students and teachers across Saudi Arabia.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Saudi Arabia",
          title:
            "Saudi Buses provides reliable and enjoyable school trip transport across Saudi Arabia. From educational sites to cultural landmarks, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Saudi Arabia",
            "Custom itineraries to match school plans",
            "Educational and cultural trip options across Saudi Arabia",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Saudi Arabia",
          subTitle:
            "Experience seamless travel with Saudi Buses — efficient, comfortable, and dependable shuttle solutions across Saudi Arabia for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Saudi Arabia",
          title:
            "Saudi Buses provides smooth and scheduled shuttle transport across Saudi Arabia. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout the Kingdom.",
          features: [
            "Scheduled and on demand shuttle options across Saudi Arabia",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Saudi Arabia",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.9989648374635!2d46.68816197570398!3d24.58933911458959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0ff2d03600b5%3A0xa6aa7da58e3c03b2!2s8194%20Al%20Mujashiah%2C%205171%2C%20As%20Suwaidi%2C%20Riyadh%2012797%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sae!4v1763015862652!5m2!1sen!2sae",
    },
  },

  // Malta (default)
  mt: {
    // General company info
    company: {
      name: "Malta Buses",
      phone: "+44 20 3834 3226",
      email: "info@maltabuses.com",
      address: "134 St. Christopher's Street, Il-Belt Valletta, Malta",
      logo: "/images/malta.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Malta with Malta Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Malta and Gozo.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Malta",
      cities: ["Valletta", "Sliema", "St. Julian's", "Mdina"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Malta. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Malta. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Malta. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Malta. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Malta. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Malta Buses, we are proud to be Malta's leading provider of reliable, comfortable, and affordable group transportation. From Valletta to Sliema, St. Julian's to Mdina, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Malta and Gozo.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Maltese Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Maltese Drivers",
          description:
            "Every Malta Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short transfers across Malta or longer journeys to Gozo.",
        },
        {
          title: "Tailored Travel Solutions Malta",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Malta. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Malta",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Malta.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Maltese Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Maria Vella",
          role: "Regular Commuter, Sliema",
          avatar: "avatar1",
          message:
            "I travel frequently between Sliema and Valletta for work. Malta Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Joseph Borg",
          role: "University Student, Msida",
          avatar: "avatar2",
          message:
            "As a student traveling between university campuses in Malta, Malta Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Carmen Agius",
          role: "Family Traveller, St. Julian's",
          avatar: "avatar3",
          message:
            "We booked Malta Buses for our family trip to Gozo. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Mark Camilleri",
          role: "Operations Manager, Valletta",
          avatar: "avatar4",
          message:
            "Our company has used Malta Buses for several corporate events around Malta. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Sarah Mifsud",
          role: "HR Director, Birkirkara",
          avatar: "avatar5",
          message:
            "Malta Buses organized transport for our annual conference in Malta. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "David Attard",
          role: "Event Coordinator, St. Julian's",
          avatar: "avatar6",
          message:
            "We hired Malta Buses for an international business summit in Malta. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Ms. Anna Farrugia",
          role: "Primary School Teacher, Mosta",
          avatar: "avatar7",
          message:
            "Our school trip to Mdina went perfectly thanks to Malta Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Mr. Paul Zammit",
          role: "Sports Coach, Qormi",
          avatar: "avatar8",
          message:
            "We use Malta Buses for all our sports competitions across Malta. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Ms. Gabriella Schembri",
          role: "Headmistress, Rabat",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Malta Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Malta.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Malta",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Malta",
          description:
            "Select your pickup and drop-off points anywhere in Malta or Gozo to plan your journey across the islands.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Malta.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Maltese journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Malta Buses",
      description:
        "Choose Malta Buses for reliable, comfortable, and affordable group transport throughout Malta.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Malta",
          description:
            "With Malta Buses, you always get the best value across Malta. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Maltese Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Malta.",
        },
        {
          icon: "Clock",
          title: "Always Available in Malta",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Malta.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Malta",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Malta.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Malta",
      description:
        "At Malta Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Malta. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the islands.",
      stats: [
        {
          value: "85,000+",
          label: "Passengers Transported in Malta",
          description:
            "Every year, more than 85,000 passengers travel with Malta Buses for dependable, comfortable journeys throughout Malta — including Valletta, Sliema, St. Julian's, and across Gozo.",
          highlight: true,
        },
        {
          value: "600+",
          label: "Journeys operated annually across Malta",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Malta",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "University of Malta", logo: "/images/partner/psg.png" },
        { name: "Apple Malta", logo: "/images/partner/apple-logo-banner.avif" },
        {
          name: "Bank of Valletta",
          logo: "/images/partner/nintendo-logo-banner.avif",
        },
        { name: "Malta Olympic Committee", logo: "/images/partner/ttl.png" },
        { name: "Pavi Supermarket", logo: "/images/partner/if.png" },
        { name: "MCAST", logo: "/images/partner/su.png" },
        { name: "Air Malta", logo: "/images/partner/ac.png" },
        { name: "TVM", logo: "/images/partner/rn.png" },
        { name: "GO Malta", logo: "/images/partner/ul.png" },
        { name: "Malta Tourism Authority", logo: "/images/partner/af.png" },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Maltese journey started",
      description:
        "Get a quick quote from Malta Buses and travel across Malta with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Malta",
          subTitle:
            "Reliable transfers across Malta with Malta Buses — premium comfort, professional drivers, and on time service wherever you travel in Malta.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Malta",
          title:
            "Malta Buses offers smooth and comfortable door to door transfers across Malta. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Malta.",
          features: [
            "Meet and greet service included throughout Malta",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Malta",
          subTitle:
            "Malta Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Malta.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Malta",
          title:
            "Malta Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Malta. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Malta",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Malta",
          subTitle:
            "Make every school trip memorable with Malta Buses — safe, comfortable, and expertly managed transport for students and teachers across Malta.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Malta",
          title:
            "Malta Buses provides reliable and enjoyable school trip transport across Malta. From historical sites to educational venues, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Malta",
            "Custom itineraries to match school plans",
            "Educational and cultural trip options across Malta",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Malta",
          subTitle:
            "Experience seamless travel with Malta Buses — efficient, comfortable, and dependable shuttle solutions across Malta for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Malta",
          title:
            "Malta Buses provides smooth and scheduled shuttle transport across Malta. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Malta.",
          features: [
            "Scheduled and on demand shuttle options across Malta",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Malta",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339.7128048160932!2d14.514075001002404!3d35.90019349661873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45295f2fa723%3A0xec146d0e4a66407f!2s134%20St.%20Christopher&#39;s%20Street%2C%20Il-Belt%20Valletta%2C%20Malta!5e0!3m2!1sen!2sae!4v1763019105549!5m2!1sen!2sae",
    },
  },

  // Japan (default)
  jp: {
    // General company info
    company: {
      name: "Japan Buses",
      phone: "+44 20 3834 3226",
      email: "info@japanbuses.com",
      address: "2 Chome-10-4 Nihonbashi, Chuo City, Tokyo 103-0027, Japan",
      logo: "../public/images/japan.png",
      whatsapp: "https://wa.me/442038343226",
    },

    // Navigation
    navigation: [
      { name: "Home", href: "/" },
      { name: "Transfers", href: "/transfers" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "School trips", href: "/school-trips" },
      { name: "Corporate events", href: "/corporate-events" },
      { name: "About Us", href: "/about-us" },
    ],

    // Footer services
    footerServices: [
      { name: "Corporate events", href: "/corporate-events" },
      { name: "School trips", href: "/school-trips" },
      { name: "Shuttles", href: "/shuttles" },
      { name: "Transfers", href: "/transfers" },
      { name: "Home to school", href: "/school-trips" },
    ],

    // Hero section
    hero: {
      title: "Professional coach and minibus hire services across",
      description:
        "Reliable and affordable coach and minibus hire in Japan with Japan Buses — perfect for corporate events, school trips, airport transfers, private tours, and group travel throughout Japan.",
      image: "/images/bus-hire-transparent.png",
      frameImage: "/images/Frame.png",
      countryName: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
    },

    // Services section
    services: [
      {
        key: "corporate",
        title: "Corporate Events",
        description:
          "Streamline your corporate travel with our premium coach hire services across Japan. Ideal for business meetings, conferences, and company events, we provide dependable and comfortable transport for your entire team.",
        image: "/images/corporate21.png",
      },
      {
        key: "school",
        title: "School Trips",
        description:
          "Transform educational journeys into safe and memorable experiences with our trusted school coach hire service in Japan. Our child-friendly drivers and modern vehicles ensure comfort and safety throughout your trip.",
        image: "/images/school21.png",
      },
      {
        key: "shuttles",
        title: "Shuttle Services",
        description:
          "Enjoy smooth and efficient travel between airports, hotels, and event venues with our reliable shuttle services throughout Japan. Designed for maximum convenience and comfort.",
        image: "/images/shuttle21.png",
      },
      {
        key: "transfers",
        title: "Transport Transfers",
        description:
          "Experience seamless door-to-door transport with our professional transfer service anywhere in Japan. From airport pickups to city transfers, we deliver smooth, comfortable, and punctual travel experiences.",
        image: "/images/transfer21.png",
      },
      {
        key: "home",
        title: "Home to School Transport",
        description:
          "Simplify your family's daily routine with our safe and reliable home to school transport service in Japan. Our professional drivers ensure punctuality and give parents complete peace of mind.",
        image: "/images/home21.png",
      },
    ],

    // About Us section
    aboutUs: {
      badge: "About Us",
      description:
        "At Japan Buses, we are proud to be one of Japan's leading providers of reliable, comfortable, and affordable group transportation. From Tokyo to Osaka, Kyoto to Yokohama, we make travel simple with our modern fleet, professional drivers, and commitment to exceptional service throughout Japan.",
      image: "/images/abtus.png",
      features: [
        {
          title: "Modern Japanese Fleet",
          description:
            "Our fleet ranges from compact 16-seater minibuses to large 50-seat luxury coaches — all maintained to the highest standards and equipped with air-conditioning, reclining seats, Wi-Fi, and on-board entertainment options.",
        },
        {
          title: "Experienced Japanese Drivers",
          description:
            "Every Japan Buses driver is fully licensed, background-checked, and trained to provide safe, punctual, and friendly service — whether for short city transfers or long-distance journeys across Japan.",
        },
        {
          title: "Tailored Travel Solutions Japan",
          description:
            "We handle corporate events, school trips, wedding transport, airport transfers, and private tours across Japan. Whatever your group size or schedule, we'll plan a journey that fits your needs perfectly.",
        },
        {
          title: "Transparent Pricing Japan",
          description:
            "Our quotes are all-inclusive with no hidden fees, giving you peace of mind and total clarity on costs before you travel anywhere in Japan.",
        },
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Client Testimonials",
      title: "What Our Japanese Clients Say",
      categories: [
        { key: "passengers", label: "From passengers" },
        { key: "corporate", label: "From companies" },
        { key: "school", label: "From schools" },
      ],
      items: [
        {
          key: "passengers",
          name: "Yuki Tanaka",
          role: "Regular Commuter, Tokyo",
          avatar: "avatar1",
          message:
            "I travel frequently between Tokyo and Yokohama for business. Japan Buses is always punctual, and their coaches are exceptionally clean. The WiFi makes it easy to stay productive during travel.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Kenji Sato",
          role: "University Student, Osaka",
          avatar: "avatar2",
          message:
            "As a student traveling between Osaka and Kyoto, Japan Buses has been both reliable and affordable. The drivers are courteous and always helpful with luggage.",
          rating: 5,
        },
        {
          key: "passengers",
          name: "Akiko Yamamoto",
          role: "Family Traveller, Kyoto",
          avatar: "avatar3",
          message:
            "We booked Japan Buses for our family trip to Mount Fuji. The coach was modern and very comfortable, and our driver made the journey enjoyable from start to finish.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Takashi Nakamura",
          role: "Operations Manager, Tokyo",
          avatar: "avatar4",
          message:
            "Our company has used Japan Buses for several corporate events around Tokyo and Chiba. Their service is professional, flexible, and consistently punctual.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Emi Kobayashi",
          role: "HR Director, Osaka",
          avatar: "avatar5",
          message:
            "Japan Buses organized transport for our annual conference in Osaka. The entire experience was seamless, and the drivers were extremely professional and courteous.",
          rating: 5,
        },
        {
          key: "corporate",
          name: "Hiroshi Yamada",
          role: "Event Coordinator, Yokohama",
          avatar: "avatar6",
          message:
            "We hired Japan Buses for an international business summit in Yokohama. The executive coaches were spotless and comfortable, and our clients were impressed with the service quality.",
          rating: 5,
        },
        {
          key: "school",
          name: "Tanaka-sensei",
          role: "Primary School Teacher, Tokyo",
          avatar: "avatar7",
          message:
            "Our school trip to Tokyo Disneyland went perfectly thanks to Japan Buses. The driver was kind and attentive, and the children were very comfortable throughout the journey.",
          rating: 5,
        },
        {
          key: "school",
          name: "Suzuki-sensei",
          role: "Sports Coach, Osaka",
          avatar: "avatar8",
          message:
            "We use Japan Buses for all our sports competitions across Japan. They understand how important timing is and always get our teams to matches safely and on schedule.",
          rating: 5,
        },
        {
          key: "school",
          name: "Watanabe-sensei",
          role: "Headmistress, Kyoto",
          avatar: "avatar9",
          message:
            "Safety and reliability are top priorities for our school, and Japan Buses delivers both. Parents appreciate how professional and friendly the service is for school transport in Japan.",
          rating: 5,
        },
      ],
    },

    // How It Works
    howItWorks: {
      badge: "How it works",
      title: "Rent with our simple 3-step process in Japan",
      steps: [
        {
          icon: "MapPin",
          title: "Choose your route in Japan",
          description:
            "Select your pickup and drop-off points anywhere in Japan to plan your journey across the country.",
        },
        {
          icon: "Calendar",
          title: "Pick your date and time",
          description:
            "Choose when you want to travel — one-way or return, we'll be ready when you are anywhere in Japan.",
        },
        {
          icon: "Bus",
          title: "Confirm your booking",
          description:
            "Complete your reservation and our team will assign a modern, comfortable coach with a professional driver for your Japanese journey.",
        },
      ],
    },

    // Why Choose Us
    whyChooseUs: {
      badge: "Why Choose Us",
      title: "Why Japan Buses",
      description:
        "Choose Japan Buses for reliable, comfortable, and affordable group transport throughout Japan.",
      image: "/images/bus2.png",
      vectorImage: "/images/Vector.png",
      features: [
        {
          icon: "ShieldCheck",
          title: "Best Price Guarantee Japan",
          description:
            "With Japan Buses, you always get the best value across Japan. If you find a lower quote for the same journey, we'll match it so you travel for less without compromising comfort.",
        },
        {
          icon: "User",
          title: "Experienced Japanese Drivers",
          description:
            "Our professional and friendly drivers are fully licensed and trained to make every trip safe, smooth, and enjoyable from start to finish anywhere in Japan.",
        },
        {
          icon: "Clock",
          title: "Always Available in Japan",
          description:
            "From early morning airport transfers to late-night returns, our fleet operates 24 hours a day to fit your travel plans anywhere in Japan.",
        },
        {
          icon: "Headset",
          title: "24/7 Support Japan",
          description:
            "Our dedicated customer service team is available around the clock to help with bookings, updates, or travel assistance whenever you need it in Japan.",
        },
      ],
    },

    // Big Numbers/Achievements
    achievements: {
      badge: "Our Achievements",
      title: "Trusted by passengers across Japan",
      description:
        "At Japan Buses, we take pride in delivering safe, reliable, and comfortable travel for thousands of passengers every month throughout Japan. From airport transfers and school trips to private tours and corporate events, we're dedicated to providing exceptional service across the country.",
      stats: [
        {
          value: "400,000+",
          label: "Passengers Transported in Japan",
          description:
            "Every year, more than 400,000 passengers travel with Japan Buses for dependable, comfortable journeys throughout Japan — including Tokyo, Osaka, Kyoto, and Yokohama.",
          highlight: true,
        },
        {
          value: "2,000+",
          label: "Journeys operated annually across Japan",
        },
        {
          value: "24/7",
          label: "Customer support and live updates in Japan",
        },
      ],
    },

    // Partners
    partners: {
      badge: "We've partnered with",
      items: [
        { name: "University of Tokyo", logo: "/images/partner/psg.png" },
        { name: "Apple Japan", logo: "/images/partner/rn.png" },
        {
          name: "Sony Corporation",
          logo: "/images/partner/dlp.png",
        },
        { name: "Japanese Olympic Committee", logo: "/images/partner/ttl.png" },
        { name: "Aeon Mall", logo: "/images/partner/if.png" },
        { name: "Kyoto University", logo: "/images/partner/su.png" },
        { name: "ANA Holdings", logo: "/images/partner/ac.png" },
        { name: "NHK", logo: "/images/partner/rn.png" },
        { name: "NTT Docomo", logo: "/images/partner/ul.png" },
        {
          name: "Japan National Tourism Organization",
          logo: "/images/partner/af.png",
        },
      ],
    },

    // Final CTA
    finalCta: {
      title: "Let's get your Japanese journey started",
      description:
        "Get a quick quote from Japan Buses and travel across Japan with comfort, style, and confidence.",
      image: "/images/contact_support_transparent.png",
    },

    // Service page details
    servicePages: {
      transfers: {
        hero: {
          title: "Door to Door",
          span: "Transfers Japan",
          subTitle:
            "Reliable transfers across Japan with Japan Buses — premium comfort, professional drivers, and on time service wherever you travel in Japan.",
          image: "/images/transfer1.png",
        },
        details: {
          h2: "About Our Transfer Service in Japan",
          title:
            "Japan Buses offers smooth and comfortable door to door transfers across Japan. From airports and hotels to business venues and private destinations, our professional drivers ensure every journey is safe, punctual, and stress free throughout Japan.",
          features: [
            "Meet and greet service included throughout Japan",
            "Real time flight and traffic tracking",
            "Complimentary WiFi and refreshments",
            "Fixed transparent pricing with no surprises",
          ],
          images: [
            { image: "/images/transfer2.png" },
            { image: "/images/transfer3.png" },
          ],
        },
      },
      corporate: {
        hero: {
          title: "Executive",
          span: "Corporate Events Japan",
          subTitle:
            "Japan Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Japan.",
          image: "/images/corporate3.png",
        },
        details: {
          h2: "About Our Corporate Transport Service in Japan",
          title:
            "Japan Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Japan. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.",
          features: [
            "Dedicated account manager for event coordination in Japan",
            "Onboard WiFi and charging ports",
            "Live tracking and real time updates",
            "Uniformed professional drivers",
            "Optional branded vehicles for your company",
            "Transparent fixed pricing with no hidden costs",
          ],
          images: [
            { image: "/images/corporate2.png" },
            { image: "/images/corporate1.png" },
          ],
        },
      },
      school: {
        hero: {
          title: "Safe and Exciting",
          span: "School Trips Japan",
          subTitle:
            "Make every school trip memorable with Japan Buses — safe, comfortable, and expertly managed transport for students and teachers across Japan.",
          image: "/images/scht4.png",
        },
        details: {
          h2: "About Our School Trip Service in Japan",
          title:
            "Japan Buses provides reliable and enjoyable school trip transport across Japan. From cultural sites to educational facilities, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and educational for everyone.",
          features: [
            "Professional, background checked drivers in Japan",
            "Custom itineraries to match school plans",
            "Educational and cultural trip options across Japan",
            "Air conditioned coaches with seat belts",
            "Group discounts and transparent pricing",
            "Live tracking and safety updates for peace of mind",
          ],
          images: [
            { image: "/images/scht1.png" },
            { image: "/images/scht2.png" },
          ],
        },
      },
      shuttles: {
        hero: {
          title: "Reliable",
          span: "Shuttle Services Japan",
          subTitle:
            "Experience seamless travel with Japan Buses — efficient, comfortable, and dependable shuttle solutions across Japan for groups of all sizes.",
          image: "/images/shuttle3.png",
        },
        details: {
          h2: "About Our Shuttle Service in Japan",
          title:
            "Japan Buses provides smooth and scheduled shuttle transport across Japan. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics throughout Japan.",
          features: [
            "Scheduled and on demand shuttle options across Japan",
            "Modern air conditioned coaches",
            "Professional uniformed drivers",
            "Real time tracking and updates",
            "Custom routes for airports, hotels, and events in Japan",
            "Competitive group pricing with no hidden fees",
          ],
          images: [
            { image: "/images/shuttle1.png" },
            { image: "/images/shuttle2.png" },
          ],
        },
      },
    },

    // Google Maps
    maps: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.55287456890295!2d139.7747609494537!3d35.68079392753751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889006b5afa6f%3A0x81cc387b1555027f!2z5ZCI5Lq656S-5rGf5oi45pel5pys5qmL!5e0!3m2!1sen!2sae!4v1763019362023!5m2!1sen!2sae",
    },
  },

  // Add more countries as needed...
};

export const getCountryCodeFromEnv = () => {
  return import.meta.env.VITE_COUNTRY_CODE || "fr";
};

// Helper function to get service page data
export const getServicePageData = (countryCode, serviceType) => {
  const code = countryCode || getCountryCodeFromEnv();
  const country = getCountryData(code);
  return country.servicePages[serviceType] || null;
};

// Helper function to get country data
export const getCountryData = (countryCode) => {
  const code = countryCode || getCountryCodeFromEnv();
  return countryData[code] || countryData.fr;
};
// Helper function to get all available countries
export const getAvailableCountries = () => {
  return Object.keys(countryData);
};

export default countryData;
