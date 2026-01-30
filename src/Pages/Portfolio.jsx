import React from 'react';
import { ArrowUpRight, Globe, Clock, Monitor } from 'lucide-react';
import portfolioItems from '../dataStore/Portfolio';

const PortfolioPage = () => {


    return (
        <div className="bg-white min-h-screen">
            {/* HERO */}
            <div className='w-full h-[68vh]   md:h-[50vh]  lg:h-[73vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 '>
                <div className='bg-white/30 backdrop-blur-md w-full h-full flex justify-center items-start pb-12.5 pt-42.5'>
                    <div className="flex flex-col  items-center py-2.5 w-11/12  ">
                        <h1 className='w-9/12 lg:w-1/2 text-[36px] md:text-[40px] lg:text-[50px] font-semibold lg:font-bold text-center lg:leading-15 text-gray-800 mb-6 md:mb-4'>Showcasing a Legacy of Digital Innovation</h1>
                        <p className='text-center mx-auto md:text-[19px]  text-white w-full md:w-11/12 lg:w-7/12   mb-2 leading-6 '>At Nextpak, we specialize in crafting transformative digital experiences that go beyond functionality to inspire and engage. Our portfolio highlights a diverse range of high-impact applications designed to elevate brands, streamline operations, and foster user delight across the globe.</p>

                    </div>
                </div>
            </div>

            {/* PORTFOLIO */}
            <section className="py-16 px-4 md:px-6">
                <div className="max-w-7xl lg:max-w-6xl mx-auto space-y-20">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`flex flex-col-reverse border border-gray-200 p-2 rounded-3xl lg:flex-row gap-10 items-center group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'ps-4'
                                }`}
                        >
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600">
                                    {item.title}
                                </h2>
                                <p className="text-blue-600 font-bold uppercase">
                                    {item.tagline}
                                </p>
                                <p className="text-gray-600">{item.description}</p>

                                <div className="grid grid-cols-2 gap-4 py-4 border-t">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Monitor size={16} /> {item.type}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Clock size={16} /> {item.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Globe size={16} /> {item.country}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-gray-100 text-xs font-bold rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold"
                                >
                                    Visit Site <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
