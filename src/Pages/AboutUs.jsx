import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Code, Users } from 'lucide-react';
import "../../public/img1.jpg"
import { Link } from 'react-router-dom';
function AboutUs() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: 'Lymora Visionaries', icon: <Eye size={20} /> },
        { id: 1, label: 'Our Story', icon: <Code size={20} /> },

    ];
    return (
        <>
            <div className='w-full h-[40vh]   lg:h-[68vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 '>
                <div className='bg-white/30 backdrop-blur-md w-full h-full flex justify-center items-center p-2.5'>
                    <div className="space-y-4 p-2.5">
                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-gray-800 mt-12'>About Lymora</h1>
                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-full md:w-5/7 lg:w-4/7'>We are a development and design studio that works closely with software development agencies to create futuristic products through our skilled resources.How we can help you!</p>
                    </div>
                </div>
            </div>
            <section className=" py-17.5 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 md:px-6 md:py-4  bg-blue-600 text-sm md:text-base font-bold  transition-all rounded-md
                ${activeTab === tab.id ? 'text-white' : 'text-white hover:text-gray-700'}`}
                            >
                                {tab.icon}
                                {tab.label}

                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-125">
                        <AnimatePresence mode="wait">
                            {activeTab === 0 && <VisionariesTab key="vision" />}
                            {activeTab === 1 && <OurStoryTab key="story" />}

                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <section className='w-full md:h-[58vh] lg:h-[82vh] bg-sky-100 flex flex-col justify-center items-center py-8.75 md:py-17.5'>
                <h1 className='text-center text-[28px] md:text-[40px] font-semibold mb-8 md:mb-16 mt-0'>Behind the Scenes</h1>
                <div className='w-full flex justify-center md:flex-row flex-col items-center gap-8 md:gap-12 md:mb-6 px-4'>
                    <div className="h-64 md:h-84 w-full md:w-3/4 lg:w-3/8 bg-[url('/img1.jpg')] bg-cover bg-center rounded-2xl relative">
                        <h1 className='text-white text-[22px] md:text-[25px] font-medium left-5 bottom-10 absolute'>Cutting-Edge Development</h1>
                    </div>
                    <div className="h-64 md:h-84 w-full md:w-3/4 lg:w-3/8 bg-[url('/img2.jpg')] bg-cover bg-center rounded-2xl relative">
                        <h1 className='text-white text-[22px] md:text-[25px] font-medium left-5 bottom-10 absolute'>Strategic Planning</h1>
                    </div>
                </div>

            </section>
            <section className='w-full min-h-[46vh] md:h-[32vh] lg:h-[46vh] bg-blue-600 py-17.5 '>
                <h1 className='text-center text-white text-[32px] md:text-[40px] font-semibold'>Ready to Join Our Story?</h1>
                <p className='text-center text-white text-[18px] mt-6'>Discover opportunities to be part of our innovative journey.</p>
                <div className='flex flex-col justify-center items-center md:flex-row gap-6 mt-7 px-4'>
                    <Link className=' text-white bg-sky-600 text-center w-full md:w-auto px-8 py-2.5 hover:bg-black rounded-md'>Explore Careers</Link>
                    <Link className='text-white border-2 border-white text-center w-full md:w-auto px-8 py-2 hover:bg-white hover:text-black rounded-md'>Start Your Project</Link>
                </div>
            </section>


        </>
    )
};

export default AboutUs

const VisionariesTab = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const leaders = [
        {
            name: "Syed Zill e Husnain Kazmi", role: "Founder & CEO", desc: "Aligning technology with business goals to deliver scalable solutions",
            imgUrl: "/team/z.jpg"
        },
        { name: "Syed Hassan Sajjad Kazmi", role: "Founder & CEO", desc: "Turning every challenge into an opportunity for innovation.", imgUrl: "/team/h.jpg" },
        { name: "Paras Ali Khan", role: "CTO", desc: "Leading teams to deliver cutting-edge digital solutions.", imgUrl: "/team/paras.jpeg" },
        {
            name: "Syed Asad Abbas Kazmi", role: "COO", desc: "Coordinating operations to deliver cutting-edge digital solutions.",
            imgUrl: "/team/asad_abbas.jpg"
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-[40px] font-bold text-gray-900 mb-4">
                    Meet the Visionaries
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto lg:text-[18px]">
                    Meet the visionary leaders who shape Lymora’s innovative future.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {leaders.map((leader, i) => {
                    const isFlipped = flippedIndex === i;

                    return (
                        <div
                            key={i}
                            className="h-80 perspective-[1000px] cursor-pointer"
                            onClick={() => setFlippedIndex(isFlipped ? null : i)}
                        >
                            <div
                                className={`
                  relative h-full w-full rounded-xl transition-transform duration-700
                  transform-3d lg:hover:transform-[rotateY(180deg)]
                  ${isFlipped ? "transform-[rotateY(180deg)]" : ""}
                `}
                            >
                                {/* Front */}
                                <div className="absolute inset-0 bg-white shadow-md rounded-xl flex flex-col items-center justify-center  border border-gray-100 backface-hidden">
                                    <img src={leader.imgUrl} alt={leader.name} className="w-full h-full object-cover rounded-lg" />
                                </div>

                                {/* Back */}
                                <div className="absolute inset-0 rounded-xl bg-blue-600 px-6 text-center text-white flex flex-col items-center justify-center transform-[rotateY(180deg)] backface-hidden">
                                    <h3 className="text-lg font-bold mb-3">{leader.name}</h3>
                                    <h2 className="text-base font-semibold mb-2">{leader.role}</h2>
                                    <p className="text-sm leading-relaxed">{leader.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};


/* --- TAB 2: OUR STORY (Horizontal Timeline) --- */
const OurStoryTab = () => {
    const steps = [
        { title: "The Beginning", text: "Lymora Solutions was born from a simple yet powerful vision: to transform Pakistan's digital landscape through innovative technology solutions. Founded by three visionary entrepreneurs who recognized the untapped potential in Pakistan's tech sector, we started with a mission to bridge the gap between traditional business practices and modern digital solutions." },
        { title: "Growth & Evolution", text: "What began as a small team of passionate developers has evolved into a comprehensive digital solutions provider. We've successfully delivered over 200+ projects, worked with clients across 15+ industries, and built a reputation for excellence in software development, digital transformation, and innovative problem-solving.." },
        { title: "Today & Tomorrow", text: "Today, Lymora Solutions stands as a testament to Pakistani innovation and excellence. We continue to push boundaries, embrace emerging technologies, and help businesses across the globe achieve their digital transformation goals. Our journey is far from over – we're just getting started." },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
            <div className="relative flex justify-between items-center max-w-4xl mx-auto px-10">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-600 -translate-y-1/2 z-0" />
                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center">
                        <div className="w-18 h-18 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg text-[28px]">
                            0{i + 1}
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {steps.map((step, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-400 hover:border-blue-600 hover:scale-[1.05] transition-colors text-center hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]">
                        <h3 className="text-[26px] font-semibold mb-6">0{i + 1}. {step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};