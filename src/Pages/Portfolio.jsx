import React from 'react';
import { ArrowUpRight, Globe, Clock, Monitor } from 'lucide-react';
import portfolioItems from '../dataStore/Portfolio';

const PortfolioPage = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <div className='w-full h-[75vh] md:h-[50vh] lg:h-[73vh] bg-[#11395A]'>


                <div className='bg-[url("/bg/bg_home.png")] bg-cover w-full h-full flex justify-center items-start pb-12.5 pt-42.5'>
                    <div className="flex flex-col items-center py-2.5 w-11/12">

                        <h1 className='w-11/12 md:w-9/12 lg:w-1/2 text-[36px] md:text-[40px] lg:text-[50px] font-semibold lg:font-bold text-center lg:leading-15 text-[white] mb-6 md:mb-4 leading-tight'>
                            Showcasing a Legacy of <span className='text-[#85E645]'>Digital Innovation</span>
                        </h1>

                        <p className='text-center mx-auto md:text-[19px] text-white w-full md:w-11/12 lg:w-7/12 mb-2 leading-6'>
                            At Lymora, we specialize in crafting transformative digital experiences that go beyond functionality to inspire and engage. Our portfolio highlights a diverse range of high-impact applications designed to elevate brands, streamline operations, and foster user delight across the globe.
                        </p>

                    </div>
                </div>

            </div>

            {/* PORTFOLIO */}
            <section className="py-16 px-4 md:px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl lg:max-w-6xl mx-auto space-y-20">

                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`flex flex-col-reverse border border-gray-200 bg-white p-3 rounded-3xl lg:flex-row gap-10 items-center group hover:shadow-xl transition
                            ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:ps-4'}`}
                        >

                            {/* TEXT */}
                            <div className="w-full lg:w-1/2 space-y-6">

                                <h2 className="text-3xl font-bold text-[#1C1B17] group-hover:text-[#12ABEE] transition">
                                    {item.title}
                                </h2>

                                <p className="text-[#12ABEE] font-bold uppercase">
                                    {item.tagline}
                                </p>

                                <p className="text-gray-600">{item.description}</p>

                                <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
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
                                    {item.tech?.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-[#EAF6FD] text-xs font-bold rounded-md text-[#11395A]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#12ABEE] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#85E645] hover:text-[#1C1B17] transition"
                                >
                                    Visit Site <ArrowUpRight size={18} />
                                </a>
                            </div>

                            {/* IMAGE */}
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
