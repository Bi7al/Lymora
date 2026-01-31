import { HeartPlus, ShoppingCart, Landmark, Calculator, Wallet, BaggageClaim } from 'lucide-react';
import React from 'react';

const industries = [
    {
        title: "Healthcare",
        desc: "Custom healthcare apps for clinics, hospitals, and medical data management.",
        icon: <HeartPlus className='h-12 w-12  text-blue-600' />
    },
    {
        title: "E-commerce & Retail",
        desc: "Building online stores, POS systems, and inventory management solutions.",
        icon: <ShoppingCart className='h-12 w-12  text-blue-600' />
    },
    {
        title: "Finance & Fintech",
        desc: "Secure financial tools like wallets, payment gateways, and analytics dashboards.",
        icon: <Wallet className='h-12 w-12  text-blue-600' />
    },
    {
        title: "Education & E-Learning",
        desc: "Creating LMS platforms, virtual classrooms, and interactive learning mobile apps.",
        icon: <Calculator className='h-12 w-12  text-blue-600' />
    },
    {
        title: "Real Estate & PropTech",
        desc: "Developing property portals, CRM systems, and virtual real estate tours.",
        icon: <Landmark className='h-12 w-12  text-blue-600' />
    },
    {
        title: "Logistics & Transportation",
        desc: "Fleet tracking, delivery management, and route optimization for logistics companies.",
        icon: <BaggageClaim className='h-12 w-12  text-blue-600' />
    }
];

const Industries = () => {
    return (
        <section className="py-20 bg-blue-600 radial_hero_bg">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-100 text-lg">
                        Transforming businesses across diverse sectors
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-8  bg-gray-50/50 border border-white rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-white hover:shadow-xl group"
                        >
                            {/* Icon Wrapper */}
                            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-none transition-all">
                                {industry.icon}
                            </div>

                            {/* Text Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {industry.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;