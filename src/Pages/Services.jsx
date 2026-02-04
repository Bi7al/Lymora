import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { services } from '../dataStore/Services';


export default function Services() {
    return (
        <>
            {/* HERO */}
            <div className='w-full h-[55vh] md:h-[35vh] lg:h-[70vh] bg-[#11395A]'>
                <div className="bg-[url('/bg/bg_home_mobile.png')] md:bg-[url('/bg/bg_home.png')] bg-center bg-contain md:bg-cover w-full h-full flex justify-center items-center pt-42.5 pb-12.5">
                    <div className="flex flex-col items-center py-2.5">

                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-white mb-4'>
                            <span className='text-[#85E645]'>Lymora</span>&nbsp;Services
                        </h1>

                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-10/12 md:w-5/7 lg:w-4/7 mb-4'>
                            Comprehensive development solutions crafted with precision and powered by cutting-edge technology to transform your digital vision into reality.
                        </p>

                        <Link
                            to="/contact"
                            className='py-2 px-6 bg-[#12ABEE] text-white mb-8 rounded-md font-semibold hover:bg-[#85E645] hover:text-[#1C1B17] transition'
                        >
                            Contact Us
                        </Link>

                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <section className='w-full flex justify-center items-center py-10 md:py-20 flex-col bg-[#F8FAFC]'>

                <h1 className='font-bold text-[32px] md:text-[36px] mt-3 text-[#1C1B17]'>
                    What We Deliver
                </h1>

                <p className='text-center text-[18px] mt-4 mb-4 text-gray-600'>
                    End-to-end solutions tailored to your business objectives
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:w-10/12 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 p-2.5"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative w-11/12 md:max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 group"
                        >
                            <div className='overflow-hidden'>
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="h-72 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6 pb-10 space-y-6">
                                <h2 className="text-xl font-semibold text-[#1C1B17]">
                                    {service.title}
                                </h2>

                                <p className="text-[18px] leading-relaxed text-gray-600">
                                    {service.description}
                                </p>

                                <Link
                                    to={service.link}
                                    className="mt-4 inline-block font-medium absolute bottom-6 text-[#12ABEE] hover:text-[#85E645] transition"
                                >
                                    Learn More <ArrowRight className='inline' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </section>

            {/* CTA SECTION */}
            <section className="w-full h-[35vh] md:h-[35vh] lg:h-[38vh]  bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-center md:bg-right bg-no-repeat bg-white relative overflow-hidden flex items-center">

                {/* Content Container: Centered on mobile, Left-aligned on md+ */}
                <div className='w-full px-6 md:px-[8vw] lg:px-[12vw] relative z-10 flex flex-col items-center md:items-start text-center md:text-left'>

                    <h2 className='text-[14px] md:text-[20px] lg:text-[22px] text-[#12ABEE] font-semibold uppercase tracking-[0.2em] mb-2'>
                        Let's Build
                    </h2>

                    <h1 className='text-[30px] sm:text-[34px] md:text-[48px] lg:text-[54px] font-extrabold text-[#1C1B17] leading-tight'>
                        Your Dream Project
                    </h1>

                    <Link
                        to="/quote"
                        className='inline-block mt-6 border-2 border-[#12ABEE] text-[#1C1B17] font-bold rounded-md py-3 px-8 text-sm md:text-base hover:bg-[#85E645] hover:border-[#85E645] hover:text-[#11395A] transition-all duration-300 shadow-md'
                    >
                        Request a Quote
                    </Link>
                </div>

                {/* Optional: Mobile overlay to ensure text stays readable over the background image */}
                <div className="absolute inset-0 bg-white/40 md:hidden z-0"></div>
            </section>
        </>
    )
}
