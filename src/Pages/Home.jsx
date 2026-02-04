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

    const processCards = [
        { step: "01", label: "Idea", icon: <UserCheck />, desc: "We start by understanding your vision and goals through detailed consultation." },
        { step: "02", label: "Plan", icon: <Map />, desc: "Our team creates a comprehensive roadmap with timelines and specifications." },
        { step: "03", label: "Develop", icon: <Code />, desc: "Using agile methodologies, we build your solution with regular feedback cycles." },
        { step: "04", label: "Iterate", icon: <History />, desc: "Build in short cycles, allowing for continuous feedback and improvements." },
        { step: "05", label: "Review", icon: <Eye />, desc: "Reflect on each sprint to celebrate wins and identify process improvements." }
    ]
    return (
        <>
            {/* HERO SECTION */}
            <section className=' w-full h-[40vh] md:h-[35vh] lg:h-[82vh] bg-[url("/bg/bg_main.jpeg")] bg-center bg-cover  text-white'>
                <div className="w-full h-full  flex flex-col justify-center items-center bg-black/50 ">
                    <div className='md:w-2/3 lg:w-1/2 py-2.5 lg:mt-4'>
                        <h1 className='text-[32px] md:text-[40px] lg:text-[60px] text-center font-extrabold'>Lymora <span className='text-[#85E645]'>&nbsp;Solutions</span></h1>
                        <p className='md:text-[26px] lg:text-[30px] text-center mt-2 text-wrap px-4 font-medium'>
                            Empowering Agencies with Future-Ready Design & Development Talent.
                        </p>
                    </div>
                </div>
            </section>

            <StatsCounter />

            {/* WHAT WE DO SECTION */}
            <section className='pt-16 w-full bg-[url("/bg/bg_main.jpeg")] bg-center bg-cover  flex flex-col justify-center items-center text-white'>
                <div className='md:px-2.5 px-5 text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] md:text-[40px] font-bold mb-4'>What We Do</h1>
                    <p className='text-[14px] md:text-base lg:text-[18px] w-full md:w-3/4 lg:w-1/2 text-blue-50'>
                        Partner with us to take your digital presence to the next level. Whether you’re looking to build a new website, develop a mobile app, or explore the potential of blockchain, we have the expertise to help you succeed.
                    </p>
                </div>
                <SwiperCarousal />
            </section>

            {/* INTERMEDIATE CTA */}
            <section className="w-full h-[35vh] md:h-[35vh] lg:h-[38vh] bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-center md:bg-right bg-no-repeat bg-white relative overflow-hidden flex items-center">

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

            {/* HOW WE WORK SECTION */}
            <section className='w-full h-auto bg-[url("/bg/bg_main.jpeg")] bg-center bg-cover px-5 text-white py-16 pb-20'>
                <div className='text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] md:text-[40px] font-bold'>How We Work</h1>
                    <p className='text-[20px] mt-4 text-blue-200'>Our proven development process ensures quality results and transparent communication</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-wrap gap-6 mt-12 lg:justify-center'>
                        {/* Process Cards */}
                        {processCards.map((item, idx) => (
                            <div key={idx} className='w-full lg:w-[18%] flex flex-col items-center gap-6'>
                                <div className='bg-[#85E645] text-[#1C1B17] text-sm rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg'>
                                    {item.step}
                                </div>
                                <div className='bg-white/10 w-full rounded-2xl p-6 hover:bg-white/15 transition-all border border-white/20  flex flex-col items-center text-center h-full'>
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
            <section className='w-full h-[32vh] md:h-[35vh] lg:h-[38vh] bg-[url("/bg/bg_main.jpeg")] bg-center bg-cover relative overflow-hidden flex items-center'>
                {/* Background Gradient Overlay */}
                <div className='h-full w-full text-white  flex flex-col justify-center items-center md:items-start px-6 md:px-[8vw] lg:px-[12vw] relative z-10'>

                    <h2 className='text-[16px] md:text-[20px] lg:text-[22px]  font-semibold uppercase tracking-[0.2em] mb-2'>
                        Let's Build
                    </h2>

                    <h1 className='text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-extrabold  leading-tight'>
                        Your Dream Project
                    </h1>

                    <Link
                        to="/quote"
                        className='mt-6 border-2 border-[#12ABEE] text-white font-bold rounded-md py-3 px-10 text-base hover:bg-[#85E645] hover:border-[#85E645] hover:text-[#11395A] transition-all duration-300 shadow-lg'
                    >
                        Request a Quote
                    </Link>
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#12ABEE]/15 rounded-full blur-3xl"></div>
            </section>
        </>
    )
}

export default Home