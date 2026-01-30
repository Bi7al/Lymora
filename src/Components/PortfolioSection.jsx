import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioGrid = () => {
    const projects = [
        {
            title: "Tealpot",
            category: "Web & Mobile Application",
            image: "https://nextpak.org/wp-content/uploads/2025/04/1.jpg",
            link: "https://nextpak.org/portfolio/tealpot/"
        },
        {
            title: "EternitAI",
            category: "Web Application",
            image: "https://nextpak.org/wp-content/uploads/2025/04/2.jpg",
            link: "https://nextpak.org/portfolio/eternitai/"
        },
        {
            title: "Tisume",
            category: "Web Application",
            image: "https://nextpak.org/wp-content/uploads/2025/04/3.jpg",
            link: "https://nextpak.org/portfolio/tisume/"
        },
        {
            title: "Sportfolio",
            category: "Web Application",
            image: "https://nextpak.org/wp-content/uploads/2025/04/5.jpg",
            link: "https://nextpak.org/portfolio/sportfolio/"
        }
    ];

    return (
        <section className="py-10 px-5 lg:py-20 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-10 md:mb-16 text-center ">
                    <h2 className="text-[32px] md:text-5xl lg:text-[36px] font-bold text-gray-900">
                        Our Recent Works
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10  px-4 lg:px-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative lg:w-11/13 flex flex-col bg-white rounded-[20px] border border-gray-100 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.11)] overflow-hidden transition-transform duration-300 hover:scale-[1.05]"
                        >
                            {/* Featured Image */}
                            <div className="w-full  aspect-4/3 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full  h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col items-start gap-2 md:gap-4">
                                <div className="space-y-1">
                                    <h4 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-blue-600 ">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-500 text-base md:text-[18px] font-medium tracking-wide ">
                                        {project.category}
                                    </p>
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center border border-blue-600 justify-center px-4 py-2 bg-white text-blue-600 font-semibold text-[14px] md:text-[18px] rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white active:scale-95"
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
                        className="inline-block px-8 py-2 md:py-3 md:text-[18px] border-2 border-blue-600 text-blue-600 font-bold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        See More Projects
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default PortfolioGrid;