



const portfolioItems = [
    {
        title: "Making Law Simple",
        tagline: "Custom Lawyer Portal",
        description: "A custom-built lawyer portal designed to simplify legal workflows and client communication.",
        type: "Web Application",
        duration: "3 months",
        country: "Australia",
        tech: ["Vue.js"],
        link: "https://makinglawsimple.com.au/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/1.jpg"
    },
    {
        title: "Believe Hypnosis",
        tagline: "Custom Designed Website",
        description: "A modern, conversion-focused website built for a hypnosis and wellness brand.",
        type: "Website",
        duration: "4 weeks",
        country: "United States",
        tech: ["Vue.js"],
        link: "https://believehypnosis.app/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/2.jpg"
    },
    {
        title: "Dvago",
        tagline: "Ecommerce Pharmacy Platform",
        description: "A scalable Shopify-based ecommerce platform for healthcare and pharmacy products.",
        type: "Shopify Store",
        duration: "5 weeks",
        country: "Pakistan",
        tech: ["Shopify", "Liquid"],
        link: "https://dvago.pk/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/15.jpg"
    },
    {
        title: "Illumin8 Skin",
        tagline: "Skin Treatment Center Website",
        description: "A premium website designed for a skin treatment and aesthetics clinic.",
        type: "Website",
        duration: "3 weeks",
        country: "United Kingdom",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://illumin8skin.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/3.jpg"
    },
    {
        title: "Nozomi Fund",
        tagline: "NFT Landing Page",
        description: "A custom-designed NFT landing page focused on branding and investor engagement.",
        type: "Landing Page",
        duration: "2 weeks",
        country: "Japan",
        tech: ["Vue.js"],
        link: "https://nozomifund.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/4.jpg"
    },
    {
        title: "Anson Belt",
        tagline: "Premium Accessories Ecommerce",
        description: "A high-end Shopify ecommerce store for premium belts and accessories.",
        type: "Shopify Store",
        duration: "4 weeks",
        country: "United States",
        tech: ["Shopify", "Liquid"],
        link: "https://ansonbelt.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/5.jpg"
    },
    {
        title: "Vini Hazari",
        tagline: "Choreographer Ecommerce Website",
        description: "An ecommerce website for a professional choreographer offering services and merchandise.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "India",
        tech: ["WooCommerce", "WordPress"],
        link: "https://vinihazari.com",
        image: "https://nextpak.org/wp-content/uploads/2025/04/6.jpg"
    },
    {
        title: "St. Albert Physiotherapy",
        tagline: "Chiropractic Center Website",
        description: "A WordPress website built for a chiropractic and physiotherapy clinic.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "Canada",
        tech: ["WordPress"],
        link: "https://stalbertphysiotherapy.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/7.jpg"
    },
    {
        title: "TalentBook",
        tagline: "Social Media Platform",
        description: "A social media platform built on WordPress for talent discovery and networking.",
        type: "Web Platform",
        duration: "2 months",
        country: "United States",
        tech: ["WordPress"],
        link: "https://talentbook.us/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/8.jpg"
    },
    {
        title: "MHS Collections",
        tagline: "WordPress Ecommerce Store",
        description: "An ecommerce website developed on WordPress for fashion and lifestyle products.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "United States",
        tech: ["WordPress", "WooCommerce"],
        link: "https://mhscollections.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/9.jpg"
    },
    {
        title: "TrackPal",
        tagline: "Custom Designed Web Application",
        description: "A custom-designed Vue.js application for tracking and performance monitoring.",
        type: "Web Application",
        duration: "6 weeks",
        country: "United States",
        tech: ["Vue.js"],
        link: "https://trackpal.co/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/10.jpg"
    },
    {
        title: "Landmark Equity Estates",
        tagline: "Construction Company Website",
        description: "A corporate website designed for a real estate and construction company.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "United States",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://landmarkequityestates.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/11.jpg"
    },
    {
        title: "Manitobah",
        tagline: "Lifestyle Ecommerce Brand",
        description: "A Shopify ecommerce store for a globally recognized lifestyle brand.",
        type: "Shopify Store",
        duration: "5 weeks",
        country: "Canada",
        tech: ["Shopify", "Liquid"],
        link: "https://www.manitobah.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/12.jpg"
    },
    {
        title: "Green Boom",
        tagline: "Wix Business Website",
        description: "A Wix-powered website designed for an eco-friendly consumer brand.",
        type: "Business Website",
        duration: "2 weeks",
        country: "United States",
        tech: ["Wix"],
        link: "https://www.greenboom.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/13.jpg"
    },
    {
        title: "Allbirds",
        tagline: "Global Ecommerce Website",
        description: "A world-class ecommerce platform for sustainable footwear and apparel.",
        type: "Ecommerce Website",
        duration: "Ongoing",
        country: "United States",
        tech: ["Shopify"],
        link: "https://www.allbirds.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/14.jpg"
    },
    {
        title: "Knights Hill Consultants",
        tagline: "Consultancy Agency Website",
        description: "A custom-designed corporate website for a consultancy agency with a professional and modern layout.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "United Kingdom",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://knightshillconsultants.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/16.jpg"
    },
    {
        title: "Apotheka Superfoods",
        tagline: "Custom Ecommerce Website",
        description: "A WordPress-based ecommerce website built for a superfoods and wellness brand.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "United States",
        tech: ["WordPress", "WooCommerce"],
        link: "https://apothekasuperfoods.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/17.jpg"
    },
    {
        title: "Dr John Mayer",
        tagline: "Corporate Portfolio Website",
        description: "A professional portfolio website showcasing personal brand, services, and expertise.",
        type: "Portfolio Website",
        duration: "2 weeks",
        country: "United States",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://drjohnmayer.com",
        image: "https://nextpak.org/wp-content/uploads/2025/04/18.jpg"
    },
    {
        title: "Arab Watch Guide",
        tagline: "Ecommerce Watch Store",
        description: "An ecommerce platform designed for showcasing and selling premium watches.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "United Arab Emirates",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "http://arabwatchguide.com",
        image: "https://nextpak.org/wp-content/uploads/2025/04/19.jpg"
    },
    {
        title: "Scientech Labs",
        tagline: "Laboratory Website",
        description: "A WordPress website developed for a scientific laboratory with service listings and company information.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "United States",
        tech: ["WordPress"],
        link: "https://scientech-labs.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/20.jpg"
    },
    {
        title: "Adweb Studio",
        tagline: "Corporate Agency Website",
        description: "A corporate website built for a digital and creative agency to showcase services and portfolio.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "United States",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://www.adwebstudio.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/21.jpg"
    },
    {
        title: "Icy Cold Records",
        tagline: "Music Company Ecommerce Website",
        description: "An ecommerce website developed for a music company offering merchandise and digital content.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "United States",
        tech: ["Ecommerce"],
        link: "https://www.icycoldrecords2.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/22.jpg"
    },
    {
        title: "Red Helfer Media",
        tagline: "Marketing Agency Website",
        description: "A modern corporate website designed for a marketing agency with strong branding and visuals.",
        type: "Corporate Website",
        duration: "3 weeks",
        country: "United States",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://redhelfermedia.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/23.jpg"
    },
    {
        title: "Headshots by Reem",
        tagline: "Photographer Ecommerce Website",
        description: "An ecommerce website for a professional headshot photographer offering booking and services.",
        type: "Ecommerce Website",
        duration: "3 weeks",
        country: "United States",
        tech: ["Ecommerce"],
        link: "https://www.headshotsbyreem.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/24.jpg"
    },
    {
        title: "Haven Comic",
        tagline: "Comic Ecommerce Website",
        description: "An ecommerce platform built for selling comics and graphic novels with a custom design.",
        type: "Ecommerce Website",
        duration: "4 weeks",
        country: "United States",
        tech: ["Ecommerce"],
        link: "https://haven-comic.com/",
        image: "https://nextpak.org/wp-content/uploads/2025/04/25.jpg"
    }

];

export default portfolioItems;
