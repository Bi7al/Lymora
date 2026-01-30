import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: "About Us", href: "#" },
        { name: "Services", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Technologies", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "FAQs", href: "#" },
    ];

    const services = [
        "Web development", "Mobile App Development", "AI Integration",
        "Quality Assurance", "Technical Assessment", "Support & Maintenance",
        "Out staffing", "IT Project Management", "UI/UX Design", "Digital Marketing"
    ];

    return (
        <footer className="bg-gray-900 text-white px-3 md:px-[5vw] lg:px-[12vw]">
            <div className="flex flex-col justify-between md:flex-row py-10  md:py-12 gap-8">

                {/* Brand/About Column */}
                <div className="w-full md:5/6 lg:w-4/6 mb-0 md:pr-8 md:mr-[6vw]">
                    <div className="mb-6">
                        {/* Replace with your local lime-green logo asset */}
                        <img
                            src="https://nextpak.org/wp-content/uploads/2025/05/next-pak.png"
                            alt="NextPak Logo"
                            className="w-14 h-auto brightness-125"
                        />
                    </div>
                    <p className="text-[18px]  leading-relaxed mb-5 md:mb-8">
                        We are a development and design studio that works closely with software
                        development agencies to create futuristic products through our skilled
                        resources. How we can help you!
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-blue-500 text-[18px] font-semibold tracking-wider uppercase">
                            WE'RE ACTIVE ON SOCIAL MEDIA!
                        </h4>
                        <div className="flex gap-3 ">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                        </div>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="w-full md:w-2/4 mb-0">
                    <h4 className="text-blue-500 text-[18px] md:text-[22px]  font-semibold mb-4 md:mt-4">QUICK LINKS</h4>
                    <ul className="space-y-2 md:space-y-1 text-[13px] md:text-[18px]">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white hover:text-sky-600 transition-colors duration-300 "
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column */}
                <div className="w-full md:w-2/4">
                    <h4 className="text-blue-500 text-[18px] md:text-[22px] font-semibold mb-4 md:mt-4">SERVICES</h4>
                    <ul className="space-y-2 md:space-y-1 text-[13px] md:text-[18px]">
                        {services.map((service) => (
                            <li key={service}>
                                <span className="text-white hover:text-sky-600 cursor-pointer transition-colors duration-300 ">
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Floating Side Button - Seen in screenshot as 'Book Meeting' */}
            {/* <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col items-center">
                <div className="bg-[#97D749] text-white px-3 py-6 rounded-l-xl shadow-lg cursor-pointer transform hover:-translate-x-1 transition-transform">
                    <span className="[writing-mode:vertical-lr] rotate-180 font-bold tracking-widest text-sm">
                        Book Meeting
                    </span>
                </div>
            </div> */}
        </footer >
    );
};

// Internal Social Icon Component for cleaner code
const SocialIcon = ({ icon, href = "#" }) => (
    <a
        href={href}
        className="w-9 h-9 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;