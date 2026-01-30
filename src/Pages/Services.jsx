import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../dataStore/Services';











export default function Services() {












    return (
        <>
            <div className='w-full h-[40vh] md:h-[35vh]  lg:h-[70vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 '>
                <div className='bg-white/30 backdrop-blur-md w-full h-full flex justify-center items-center pt-42.5 pb-12.5'>
                    <div className="flex flex-col  items-center py-2.5">
                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-gray-800 mb-4'>Lymora Services</h1>
                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-full md:w-5/7 lg:w-4/7 mb-4'>Comprehensive development solutions crafted with precision and powered by cutting-edge technology to transform your digital vision into reality.</p>
                        <Link to="/contact" className='py-2 px-4 bg-blue-600 text-white mb-8 rounded-md hover:bg-white hover:text-black'>Contact Us</Link>
                    </div>
                </div>
            </div>
            <section className=' w-full flex justify-center items-center py-10 md:py-20 flex-col'>

                <h1 className='font-bold text-[32px] md:text-[36px] mt-3'>What We Deliver</h1>
                <p className='text-center text-[18px]    mt-4 mb-4'>End-to-end solutions tailored to your business objectives</p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="lg:w-10/12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-2.5">
                    {services.map((service, index) => (
                        <div key={index} className="relative w-11/12 md:max-w-sm rounded-2xl overflow-hidden bg-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className='overflow-hidden'><img
                                src={service.imageUrl}
                                alt={service.title}
                                className="h-72 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 "
                            /></div>
                            <div className="p-6 pb-10 space-y-6 text-white">
                                <h2 className="text-xl font-semibold  text-gray-800">
                                    {service.title}
                                </h2>
                                <p className=" text-[18px] leading-relaxed">
                                    {service.description}
                                </p>
                                <Link to={service.link} className="mt-4 inline-block   font-medium absolute bottom-6 hover:text-blue-600 ">
                                    Learn More <ArrowRight className='inline' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </section>
            <section className="w-full h-[35vh] md:h-[32vh] lg:h-[40vh]  bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-no-repeat bg-right text-white ">
                <div className='h-full w-full bg-linear-to-r from-blue-700 via-blue-500 flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48 '>
                    <h2 className='text-[24px] md:text-[45px]'>Let's Build</h2>
                    <h1 className='text-[32px] sm:text-[38px] md:text-[60px] font-bold'>Your Dream Project</h1>
                    <Link to="/quote" className='border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black mt-4 md:mt-0' >Request a Quote</Link>
                </div>
            </section>
        </>
    )
}
