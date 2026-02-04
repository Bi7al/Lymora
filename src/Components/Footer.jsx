import React, { useState, useEffect } from 'react'; // Added hooks
import { Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react'; // Added ChevronUp
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact Us", href: "/contact" },
        { name: "Testimonials", href: "/#testimonials" },
    ];

    const services = [
        "Web development", "Mobile App Development", "AI Integration",
        "Quality Assurance", "Technical Assessment", "Support & Maintenance",
        "Out staffing", "IT Project Management", "UI/UX Design", "Digital Marketing", "Shopify Development"
    ];

    return (
        <footer className="bg-[#11395A] text-white px-4  relative">
            <div className="w-full lg:w-10/12 flex flex-col justify-between md:flex-row py-10 md:py-12 gap-8 lg:gap-6">

                {/* Brand/About Column */}
                <div className="w-full md:w-4/6 lg:w-4/6  md:pr-8 md:mr-[6vw]">
                    <div className="mb-6">
                        <img
                            src="/logo_alt.png"
                            alt="Lymora Logo"
                            className="brightness-125 object-cover w-2/3 lg:w-1/2"
                        />
                    </div>
                    <p className="text-[18px] leading-relaxed mb-5 md:mb-8 text-white">
                        We are a development and design studio that works closely with software
                        development agencies to create futuristic products through our skilled
                        resources. How we can help you!
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-[#85E645] text-[18px] font-semibold tracking-wider uppercase">
                            WE'RE ACTIVE ON SOCIAL MEDIA!
                        </h4>
                        <div className="flex gap-3">
                            <SocialIcon icon={<Facebook size={18} />} href="https://www.facebook.com/profile.php?id=61587048731013" />
                            <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/lymorasolutions?igsh=MTNsbDRpd3EyY3Uzeg==" />
                            <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/company/lymore-solutions/" />
                        </div>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="w-full md:w-2/4 ">
                    <h4 className="text-[#85E645] text-[18px] md:text-[22px] font-semibold mb-2 md:mt-4">
                        QUICK LINKS
                    </h4>
                    <ul className="space-y-2 md:space-y-1 ">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="text-white hover:text-[#12ABEE] transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Column */}
                <div className="w-full md:w-2/4">
                    <h4 className="text-[#85E645] text-[18px] md:text-[22px] font-semibold mb-2 md:mt-4">
                        SERVICES
                    </h4>
                    <ul className="space-y-2 md:space-y-1 ">
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

            {/* Back to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-[#85E645] text-[#11395A] p-3 rounded-full shadow-lg hover:bg-[#12ABEE] hover:text-white transition-all duration-300 z-50 animate-bounce md:animate-none"
                    aria-label="Back to top"
                >
                    <ChevronUp size={24} strokeWidth={3} />
                </button>
            )}
        </footer>
    );
};

const SocialIcon = ({ icon, href = "#" }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 border border-[#85E645]/40 rounded-full flex items-center justify-center text-white hover:bg-[#12ABEE] transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;