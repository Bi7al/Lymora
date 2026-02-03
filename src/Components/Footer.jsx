import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: "About Us", href: "#" },
        { name: "Services", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Technologies", href: "#" },
        { name: "Testimonials", href: "#" },

    ];

    const services = [
        "Web development", "Mobile App Development", "AI Integration",
        "Quality Assurance", "Technical Assessment", "Support & Maintenance",
        "Out staffing", "IT Project Management", "UI/UX Design", "Digital Marketing", "Shopify Development"
    ];

    return (
        <footer className="bg-[#11395A] text-white px-3 md:px-[5vw] lg:px-[12vw]">
            <div className="flex flex-col justify-between md:flex-row py-10 md:py-12 gap-8">

                {/* Brand/About Column */}
                <div className="w-full md:5/6 lg:w-4/6 mb-0 md:pr-8 md:mr-[6vw]">
                    <div className="mb-6">
                        <img
                            src="/logo_alt.png"
                            alt="Lymora Logo"
                            className="brightness-125 object-cover"
                        />
                    </div>
                    <p className="text-[18px] leading-relaxed mb-5 md:mb-8 text-gray-200">
                        We are a development and design studio that works closely with software
                        development agencies to create futuristic products through our skilled
                        resources. How we can help you!
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-[#85E645] text-[18px] font-semibold tracking-wider uppercase">
                            WE'RE ACTIVE ON SOCIAL MEDIA!
                        </h4>
                        <div className="flex gap-3">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                        </div>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="w-full md:w-2/4 mb-0">
                    <h4 className="text-[#85E645] text-[18px] md:text-[22px] font-semibold mb-4 md:mt-4">
                        QUICK LINKS
                    </h4>
                    <ul className="space-y-2 md:space-y-1 text-[13px] md:text-[18px]">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-[#12ABEE] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column */}
                <div className="w-full md:w-2/4">
                    <h4 className="text-[#85E645] text-[18px] md:text-[22px] font-semibold mb-4 md:mt-4">
                        SERVICES
                    </h4>
                    <ul className="space-y-2 md:space-y-1 text-[13px] md:text-[18px]">
                        {services.map((service) => (
                            <li key={service}>
                                <span className="text-white hover:text-[#12ABEE] cursor-pointer transition-colors duration-300">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

// Internal Social Icon Component
const SocialIcon = ({ icon, href = "#" }) => (
    <a
        href={href}
        className="w-9 h-9 border border-[#85E645]/40 rounded-full flex items-center justify-center text-white hover:bg-[#12ABEE] transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;
