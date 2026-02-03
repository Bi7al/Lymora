import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/about" },
        { name: "Services", to: "/services" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Testimonials", to: "/#testimonials" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-[#11395A]/80 backdrop-blur-md md:shadow-sm"
        >
            <div className="w-full px-2 md:px-10 lg:px-12">
                <div className="flex justify-between items-center p-4 ps-0  md:p-2 h-16 md:h-20 lg:h-24">

                    {/* Logo */}
                    <Link to="/" className="shrink w-1/2 md:w-50 h-50">
                        <img
                            className="w-full h-full object-contain"
                            src="/logo_nav.png"
                            alt="Lymora Logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-7">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.name}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link
                                    to={link.to}
                                    className="relative font-semibold text-[#ffffff] hover:text-[#12ABEE] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <Link
                            to="/contact"
                            className="font-semibold text-[#ffffff] hover:text-[#12ABEE]"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to={"/quote"}
                        className="hidden lg:flex ml-4 px-5 py-2 bg-[#12ABEE] text-white rounded-md hover:bg-[#85E645] hover:text-[#adadad] transition active:scale-95 shadow-md"
                    >
                        Get a Quote
                    </Link>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-[#ffffff] hover:text-[#12ABEE]"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-2 text-[14px] font-medium text-[#1C1B17] hover:bg-[#12ABEE] hover:text-white rounded-md"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-[14px] font-medium text-[#ffffff] hover:bg-[#12ABEE] hover:text-white rounded-md"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
