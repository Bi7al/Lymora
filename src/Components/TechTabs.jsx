import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TechSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedMobile, setExpandedMobile] = useState(0);

    const categories = [
        {
            title: "Front-End Development",
            items: [
                { name: "React.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Reactjs.png" },
                { name: "Vue.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Vuejs.png" },
                { name: "Next.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Nextjs.png" },
                { name: "Nuxt.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Nuxtjs.png" },
                { name: "Shopify", img: "https://nextpak.org/wp-content/uploads/2025/05/Shopify.png" },
                { name: "WordPress", img: "https://nextpak.org/wp-content/uploads/2025/05/Wordpress.png" },
            ]
        },
        {
            title: "Back-End Development",
            items: [
                { name: "Node.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Nodejs.png" },
                { name: "Nest.js", img: "https://nextpak.org/wp-content/uploads/2025/05/Nestjs.png" },
                { name: "Django", img: "https://nextpak.org/wp-content/uploads/2025/05/Django.png" },
                { name: "Python", img: "https://nextpak.org/wp-content/uploads/2025/05/Python.png" },
                { name: "FastAPI", img: "https://nextpak.org/wp-content/uploads/2025/05/FastAPI.png" },
            ]
        },
        {
            title: "Database Management",
            items: [
                { name: "MySQL", img: "https://nextpak.org/wp-content/uploads/2025/05/Mysql.png" },
                { name: "Firebase", img: "https://nextpak.org/wp-content/uploads/2025/05/Firebase.png" },
                { name: "PostgreSql", img: "https://nextpak.org/wp-content/uploads/2025/05/PostgreSql.png" },
                { name: "Heroku", img: "https://nextpak.org/wp-content/uploads/2025/05/Heroku.png" },
                { name: "MongoDB", img: "https://nextpak.org/wp-content/uploads/2025/05/mongodb.png" },
                { name: "AWS", img: "https://nextpak.org/wp-content/uploads/2025/05/AWS.png" },
            ]
        }
    ];

    return (
        <section className="py-10 lg:py-20 bg-[#EAF6FD]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-10 text-center w-full">
                    <h2 className="text-[32px] md:text-[34px] lg:text-[40px] w-2/3 lg:w-1/4 font-bold text-[#1C1B17] tracking-wide mx-auto">
                        Technologies We Use
                    </h2>
                </div>

                {/* --- MOBILE VIEW (Accordion) --- */}
                <div className="block md:hidden space-y-4">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setExpandedMobile(expandedMobile === idx ? -1 : idx)}
                                className={`w-full flex justify-between items-center p-5 text-left font-bold transition-colors ${expandedMobile === idx ? 'bg-[#12ABEE] text-white' : 'bg-white text-gray-700'
                                    }`}
                            >
                                {cat.title}
                                <ChevronDown className={`transition-transform duration-300 ${expandedMobile === idx ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {expandedMobile === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-white"
                                    >
                                        <div className="grid grid-cols-2 gap-6 p-3">
                                            {cat.items.map((item, i) => (
                                                <TechCard key={i} item={item} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* --- DESKTOP VIEW (Tabs) --- */}
                <div className="hidden md:flex flex-col items-center">
                    <div className="flex gap-8 md:gap-16 lg:gap-20 mt-4 mb-12 border-b border-gray-200">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`pb-4 text-lg font-bold transition-all relative ${activeTab === idx ? 'text-[#12ABEE]' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {cat.title}
                                {activeTab === idx && (
                                    <motion.div
                                        layoutId="desktopUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#12ABEE]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        {categories[activeTab].items.map((item, i) => (
                            <TechCard key={i} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

/* Reusable Tech Item Card */
const TechCard = ({ item }) => (
    <div className="flex flex-col items-center group cursor-default">
        <div className="w-20 h-20 md:w-24 lg:w-32 lg:h-32 md:h-24 p-4 mb-3 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border border-transparent hover:border-[#85E645]">
            <img
                src={item.img}
                alt={item.name}
                className="max-w-full max-h-full object-contain transition-all"
            />
        </div>
        <p className="text-[14px] md:text-sm lg:text-base font-bold text-gray-600 group-hover:text-[#12ABEE] uppercase tracking-tight transition-colors">
            {item.name}
        </p>
    </div>
);

export default TechSection;