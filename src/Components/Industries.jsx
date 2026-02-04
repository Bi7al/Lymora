import { HeartPlus, ShoppingCart, Landmark, Wallet, BaggageClaim, GraduationCap } from 'lucide-react';
import React from 'react';

const industries = [
    {
        title: "Healthcare",
        desc: "Custom healthcare apps for clinics, hospitals, and medical data management.",
        icon: <HeartPlus className='h-12 w-12 text-[#12ABEE]' />
    },
    {
        title: "E-commerce & Retail",
        desc: "Building online stores, POS systems, and inventory management solutions.",
        icon: <ShoppingCart className='h-12 w-12 text-[#12ABEE]' />
    },
    {
        title: "Finance & Fintech",
        desc: "Secure financial tools like wallets, payment gateways, and analytics dashboards.",
        icon: <Wallet className='h-12 w-12 text-[#12ABEE]' />
    },
    {
        title: "Education & E-Learning",
        desc: "Creating LMS platforms, virtual classrooms, and interactive learning mobile apps.",
        icon: <GraduationCap className='h-12 w-12 text-[#12ABEE]' />
    },
    {
        title: "Real Estate & PropTech",
        desc: "Developing property portals, CRM systems, and virtual real estate tours.",
        icon: <Landmark className='h-12 w-12 text-[#12ABEE]' />
    },
    {
        title: "Logistics & Transportation",
        desc: "Fleet tracking, delivery management, and route optimization for logistics companies.",
        icon: <BaggageClaim className='h-12 w-12 text-[#12ABEE]' />
    }
];

const Industries = () => {
    return (
        <section className="py-20 bg-[#11395A] radial_hero_bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Industries We Serve
                    </h2>
                    <p className="text-[#12ABEE] text-lg font-medium">
                        Transforming businesses across diverse sectors
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:border   hover:shadow-[0px_0px_30px_rgba(18,171,238,0.3)] group"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:bg-[#EAF6FD] transition-all">
                                {industry.icon}
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base  ">
                                    {industry.desc}
                                </p>
                            </div>

                            {/* Decorative Lime Accent on Hover */}
                            <div className="w-0 h-1 bg-[#85E645] mt-4 transition-all duration-300 group-hover:w-full rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;