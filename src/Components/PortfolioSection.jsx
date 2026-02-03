import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioGrid = () => {
    const projects = [
        {
            title: "Elyxar Superfoods",
            category: "Ecommerce Website",
            image: "https://nextpak.org/wp-content/uploads/2025/04/1.jpg",
            link: "https://elyxarsuperfoods.com/"
        },
        {
            title: "Banana Crystal",
            category: "Ecommerce Website",
            image: "https://nextpak.org/wp-content/uploads/2025/04/2.jpg",
            link: "https://www.bananacrystal.com/"
        },
        {
            title: "Bridge Africa",
            category: "Corporate Website",
            image: "https://nextpak.org/wp-content/uploads/2025/04/3.jpg",
            link: "https://bridgeafrica.com/"
        },
        {
            title: "Vini Hazari",
            category: "Ecommerce Website",
            image: "https://nextpak.org/wp-content/uploads/2025/04/5.jpg",
            link: "https://vinihazari.com"
        }
    ];

    return (
        <section className="py-10 px-5 lg:py-20 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-[32px] md:text-5xl lg:text-[40px] font-bold text-[#1C1B17]">
                        Our Recent Works
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 px-4 lg:px-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative lg:w-11/13 flex flex-col bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Featured Image */}
                            <div className="w-full aspect-4/3 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col items-start gap-4">
                                <div className="space-y-1">
                                    <h4 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#12ABEE]">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-500 text-base md:text-[18px] font-medium tracking-wide">
                                        {project.category}
                                    </p>
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center border-2 border-[#12ABEE] justify-center px-6 py-2.5 bg-white text-[#12ABEE] font-bold text-[14px] md:text-[16px] rounded-lg transition-all duration-300 hover:bg-[#85E645] hover:border-[#85E645] hover:text-[#1C1B17] active:scale-95"
                                >
                                    View Live Site
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-16 text-center">
                    <Link
                        to={"/portfolio"}
                        className="inline-block px-10 py-3 md:text-[18px] border-2 border-[#12ABEE] text-[#12ABEE] font-bold rounded-lg transition-all duration-300 hover:bg-[#12ABEE] hover:text-white"
                    >
                        See More Projects
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PortfolioGrid;