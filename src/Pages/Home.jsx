import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StatsCounter from '../Components/StatsCounter'
import SwiperCarousal from '../Components/SwiperCarousal'
import { Eye, History, Map, Code, UserCheck, Section } from 'lucide-react'
import TechTabs from '../Components/TechTabs'
import Industries from '../Components/Industries'
import Testimonials from '../Components/Testimonials'
import PortfolioGrid from '../Components/PortfolioSection'

function Home() {

    return (
        <>
            <section className='w-full h-[40vh] md:h-[35vh]  lg:h-[82vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 flex flex-col justify-center items-center text-white'>
                <div className='md:w-2/3 lg:w-1/2 py-2.5 lg:mt-4'>
                    <h1 className='text-[32px] md:text-[40px] lg:text-[50px] text-center font-semibold '>Lymora Solutions</h1>
                    <p className='md:text-[26px] lg:text-[35px] text-center mt-2 text-wrap px-4'> Empowering Agencies with Future-Ready Design & Development Talent.

                    </p>
                </div>
                {/* Companies */}
                {/* <div className='flex justify-center items-center text-white gap-6 pt-22'>
                    <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="/companies/Travos.svg" />
                    </svg>
                    <img className='h-10' src={"/companies/Travos.svg"} alt="" />
                    <img className='h-10' src={"/companies/Totolk.svg"} alt="" />
                    <img className='h-10' src={"/companies/Vicon.svg"} alt="" />
                    <img className='h-10' src={"/companies/Happy-Horizon.svg"} alt="" />
                </div> */}
            </section>

            <StatsCounter />
            <section className='pt-16 w-full bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 flex flex-col justify-center items-center text-white '>
                <div className=' md:px-2.5 px-5  text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[28px] md:text-[34px] lg:text-[40px] font-bold mb-4'>What We Do</h1>
                    <p className='text-[14px] md:text-base lg:text-[18px]  w-full md:w-3/4 lg:w-1/2'>Partner with us to take your digital presence to the next level. Whether you’re looking to build a new website, develop a mobile app, or explore the potential of blockchain, we have the expertise to help you succeed. We’ve reached significant milestones in providing top-tier web development services.</p>
                </div>
                <SwiperCarousal />
            </section>

            <section className="w-full h-[35vh] md:h-[32vh] lg:h-[45vh]  bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-no-repeat bg-right text-white ">
                <div className='h-full w-full flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48 '>
                    <h2 className='text-[24px] md:text-[45px] text-blue-600'>Let's Build</h2>
                    <h1 className='text-[38px] md:text-[60px] font-extrabold text-black'>Your Dream Project</h1>
                    <Link to="/quote" className='border-2 border-blue-600 rounded-md py-2 px-4 text-black hover:bg-blue-600 mt-4 md:mt-0' >Request a Quote</Link>
                </div>
            </section>
            {/* How we work section */}
            <section className='w-full h-auto bg-blue-600 px-5 text-white'>
                <div className='py-10 text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[32px] font-bold'>How We Work</h1>
                    <p className='text-[18px] mt-4'>Our proven development process ensures quality results and transparent communication</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-wrap gap-6 lg:gap-4 w-full lg:justify-evenly'>


                        {/* Card 1 */}
                        <div className='w-full lg:w-1/6  flex flex-col items-center gap-6 mt-10'>
                            <div className='bg-white text-black text-sm rounded-full px-6 py-5 w-min font-semibold'>01</div>
                            <div className='bg-white/15  w-full rounded-xl h-60 md:min-h-80 lg:h-auto px-3.5 py-5 hover:scale-[1.01] hover:bg-white/20 transition-all border border-white/30'>
                                <div className='bg-gray-200 w-min py-2 px-2 rounded-full mx-auto'>
                                    <UserCheck className='text-black h-8 w-8 mx-auto' />
                                </div>
                                <h1 className='text-[18px] mt-4 mb-4 md:font-semibold'>Idea</h1>
                                <p className='text-[14px] md:text-[18px]  tracking-wider md:tracking-normal'>We start by understanding your vision, goals, and requirements through detailed consultation.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='w-full lg:w-1/6 flex flex-col items-center gap-6 mt-10'>
                            <div className='bg-white text-black text-sm rounded-full px-5 py-5 w-min font-semibold'>02</div>
                            <div className='bg-white/15 w-full rounded-xl h-60 md:min-h-80 lg:h-auto px-3.5 py-5 hover:scale-[1.01] hover:bg-white/20 transition-all border border-white/30'>
                                <div className='bg-gray-200 w-min py-2 px-2 rounded-full mx-auto'>
                                    <Map className='text-black h-8 w-8 mx-auto' />
                                </div>
                                <h1 className='text-[18px] mt-4 mb-4 md:font-semibold'>Plan</h1>
                                <p className='text-[14px] tracking-wider  md:text-[18px] md:tracking-normal'>Our team creates a comprehensive roadmap with timelines, milestones, and technical specifications.

                                </p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/6 flex flex-col items-center gap-6 mt-10'>
                            <div className='bg-white text-black text-sm rounded-full px-5 py-5 w-min font-semibold'>03</div>
                            <div className='bg-white/15 w-full rounded-xl h-60 md:min-h-80 lg:h-auto px-3.5 py-5 hover:scale-[1.01] hover:bg-white/20 transition-all border border-white/30'>
                                <div className='bg-gray-200 w-min py-2 px-2 rounded-full mx-auto'>
                                    <Code className='text-black h-8 w-8 mx-auto' />
                                </div>
                                <h1 className='text-[18px] mt-4 mb-4 md:font-semibold'>Develop</h1>
                                <p className='text-[14px] tracking-wider  md:text-[18px] md:tracking-normal'>Using agile methodologies, we build your solution with regular updates and feedback cycles.

                                </p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/6 flex flex-col items-center gap-6 mt-10'>
                            <div className='bg-white text-black text-sm rounded-full px-5 py-5 w-min font-semibold'>04</div>
                            <div className='bg-white/15 w-full rounded-xl h-60 md:min-h-80 lg:h-auto px-3.5 py-5 hover:scale-[1.01] hover:bg-white/20 transition-all border border-white/30'>
                                <div className='bg-gray-200 w-min py-2 px-2 rounded-full mx-auto'>
                                    <History className='text-black h-8 w-8 mx-auto' />
                                </div>
                                <h1 className='text-[18px] mt-4 mb-4 md:font-semibold'>Iterative Development</h1>
                                <p className='text-[14px] tracking-wider  md:text-[18px] md:tracking-normal'>Build in short cycles, allowing for contunuous feedback and rapid improvements.
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-auto lg:w-1/6 flex flex-col items-center gap-6 mt-10'>
                            <div className='bg-white text-black text-sm rounded-full px-5 py-5 w-min font-semibold'>05</div>
                            <div className='bg-white/15 w-full rounded-xl h-60 md:min-h-80 lg:h-auto px-3.5 py-5 hover:scale-[1.01] hover:bg-white/20 transition-all border border-white/30'>
                                <div className='bg-gray-200 h-auto w-min py-2 px-2 rounded-full mx-auto'>
                                    <Eye className='text-black h-8 w-8 mx-auto' />
                                </div>
                                <h1 className='text-[18px] mt-4 mb-4 md:font-semibold'>Retrospectives</h1>
                                <p className='text-[14px] tracking-wider md:text-[18px] md:tracking-normal'>Continiously Reflect on each sprint to celebrate wins and identify opportunity for process improvements.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
            {/* Tech Tabs Section */}
            <TechTabs />
            <PortfolioGrid />

            <Industries />
            <section id='testimonials'></section>
            <Testimonials />
            <section className="w-full h-[35vh] md:h-[32vh] lg:h-[40vh]  bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-no-repeat bg-right text-white ">
                <div className='h-full w-full bg-linear-to-r from-blue-700 via-blue-500 flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48 '>
                    <h2 className='text-[24px] md:text-[45px]'>Let's Build</h2>
                    <h1 className='text-[32px] sm:text-[38px] md:text-[60px] font-extrabold'>Your Dream Project</h1>
                    <Link to="/quote" className='border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black mt-4 md:mt-0' >Request a Quote</Link>
                </div>
            </section>
        </>
    )
}

export default Home