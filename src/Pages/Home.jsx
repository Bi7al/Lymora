import React from 'react'
import { Link } from 'react-router-dom'
import StatsCounter from '../Components/StatsCounter'
import SwiperCarousal from '../Components/SwiperCarousal'
import { Eye, History, Map, Code, UserCheck } from 'lucide-react'
import TechTabs from '../Components/TechTabs'
import Industries from '../Components/Industries'
import Testimonials from '../Components/Testimonials'
import PortfolioGrid from '../Components/PortfolioSection'

function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className='w-full h-[40vh] md:h-[35vh] lg:h-[82vh] bg-linear-to-r from-[#11395A] via-[#12ABEE] to-[#11395A] flex flex-col justify-center items-center text-white'>
                <div className='md:w-2/3 lg:w-1/2 py-2.5 lg:mt-4'>
                    <h1 className='text-[32px] md:text-[40px] lg:text-[60px] text-center font-extrabold'>Lymora <span className='text-[#85E645]'> Solutions</span></h1>
                    <p className='md:text-[26px] lg:text-[30px] text-center mt-2 text-wrap px-4 font-medium'>
                        Empowering Agencies with Future-Ready Design & Development Talent.
                    </p>
                </div>
            </section>

            <StatsCounter />

            {/* WHAT WE DO SECTION */}
            <section className='pt-16 w-full bg-linear-to-r from-[#11395A] via-[#12ABEE] to-[#11395A] flex flex-col justify-center items-center text-white'>
                <div className='md:px-2.5 px-5 text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[28px] md:text-[34px] lg:text-[40px] font-bold mb-4'>What We Do</h1>
                    <p className='text-[14px] md:text-base lg:text-[18px] w-full md:w-3/4 lg:w-1/2 text-blue-50'>
                        Partner with us to take your digital presence to the next level. Whether you’re looking to build a new website, develop a mobile app, or explore the potential of blockchain, we have the expertise to help you succeed.
                    </p>
                </div>
                <SwiperCarousal />
            </section>

            {/* INTERMEDIATE CTA */}
            <section className="w-full h-[35vh] md:h-[32vh] lg:h-[40vh] bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-no-repeat bg-right bg-white">
                <div className='h-full w-full flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48'>
                    <h2 className='text-[24px] md:text-[45px] text-[#12ABEE] font-bold'>Let's Build</h2>
                    <h1 className='text-[32px] md:text-[60px] font-extrabold text-[#1C1B17]'>Your Dream Project</h1>
                    <Link to="/quote" className='border-2 border-[#12ABEE] rounded-md py-2.5 px-8 text-[#11395A] font-bold hover:bg-[#85E645] hover:border-[#85E645] hover:text-[#1C1B17] transition-all mt-4'>
                        Request a Quote
                    </Link>
                </div>
            </section>

            {/* HOW WE WORK SECTION */}
            <section className='w-full h-auto bg-[#11395A] px-5 text-white py-16 pb-20'>
                <div className='text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[32px] md:text-[40px] font-bold'>How We Work</h1>
                    <p className='text-[18px] mt-4 text-blue-200'>Our proven development process ensures quality results and transparent communication</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-wrap gap-6 mt-12 lg:justify-center'>
                        {/* Process Cards */}
                        {[
                            { step: "01", label: "Idea", icon: <UserCheck />, desc: "We start by understanding your vision and goals through detailed consultation." },
                            { step: "02", label: "Plan", icon: <Map />, desc: "Our team creates a comprehensive roadmap with timelines and specifications." },
                            { step: "03", label: "Develop", icon: <Code />, desc: "Using agile methodologies, we build your solution with regular feedback cycles." },
                            { step: "04", label: "Iterate", icon: <History />, desc: "Build in short cycles, allowing for continuous feedback and improvements." },
                            { step: "05", label: "Review", icon: <Eye />, desc: "Reflect on each sprint to celebrate wins and identify process improvements." }
                        ].map((item, idx) => (
                            <div key={idx} className='w-full lg:w-[18%] flex flex-col items-center gap-6'>
                                <div className='bg-[#85E645] text-[#1C1B17] text-sm rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg'>
                                    {item.step}
                                </div>
                                <div className='bg-white/10 w-full rounded-2xl p-6 hover:bg-white/15 transition-all border border-white/20 backdrop-blur-sm flex flex-col items-center text-center h-full'>
                                    <div className='bg-white p-3 rounded-full mb-4 shadow-md'>
                                        {React.cloneElement(item.icon, { className: 'text-[#11395A] h-6 w-6' })}
                                    </div>
                                    <h3 className='text-xl font-bold mb-3'>{item.label}</h3>
                                    <p className='text-sm text-blue-50 leading-relaxed'>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TechTabs />
            <PortfolioGrid />
            <Industries />
            <Testimonials />

            {/* FINAL CTA SECTION */}
            <section className="w-full h-[40vh] bg-[#11395A] relative overflow-hidden">
                <div className='h-full w-full bg-linear-to-r from-[#11395A] via-[#12ABEE]/40 flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48 relative z-10'>
                    <h2 className='text-[24px] md:text-[45px] text-white'>Let's Build</h2>
                    <h1 className='text-[32px] sm:text-[38px] md:text-[60px] font-extrabold text-white'>Your Dream Project</h1>
                    <Link to="/quote" className='mt-6 border-2 border-[#85E645] text-white font-bold rounded-md py-3 px-10 hover:bg-[#85E645] hover:text-[#11395A] transition-all'>
                        Request a Quote
                    </Link>
                </div>
                {/* Subtle background graphic can go here */}
            </section>
        </>
    )
}

export default Home