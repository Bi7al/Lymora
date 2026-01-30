import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Tv, Star, Monitor, Database, ShieldCheck, Zap, Bell, WifiOff, Layers } from 'lucide-react';
import Testimonials from '../Components/Testimonials';
import serviceDataArray from '../dataStore/Services';









const ServiceTemplate = () => {
    const { index } = useParams();
    const data = serviceDataArray[index];









    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO SECTION */}
            <section className="relative py-15 md:py-20 lg:pt-45 bg-blue-50 overflow-hidden radial_hero_bg">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center mt-4 gap-3 bg-blue-600/10 w-fit px-4 py-2 rounded-full border border-blue-600/20">
                            <div className="bg-blue-600 p-1.5 rounded-full text-white">
                                <Tv size={16} />
                            </div>
                            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Professional Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            {data.hero.titleLine1}<br />
                            <span className="text-blue-600">{data.hero.titleLine2}</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">{data.hero.description}</p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all active:scale-95">
                                Get Started <ArrowRight size={20} />
                            </button>
                            <button className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                                Schedule Consultant <ArrowRight size={20} className="text-blue-600 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={data.hero.image} alt={data.hero.titleLine1} className="rounded-3xl shadow-2xl w-full h-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all border border-gray-50">
                                <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                                <span className="font-bold text-gray-800 leading-snug">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROCESS */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {data.process.map((step, idx) => (
                            <div key={idx} className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">{idx + 1}</span>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-6 group-hover:border-blue-600 transition-all">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: TECHNOLOGIES WE USE */}
            <section className="py-20 bg-blue-50 radial_hero_bg">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center ">Technologies We Use</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.technologies.map((tech, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:scale-[1.05] transition-transform group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
                                        <Star size={24} fill="currentColor" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{tech.stack}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{tech.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {tech.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Testimonials />
            {/* NEW: MORE SERVICES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">More Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.relatedServices.map((service, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group">
                                <div className="h-56 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-8 space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                                    <a href={service.link} className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-gray-900 transition-colors">
                                        Learn More <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="w-full h-[35vh] md:h-[32vh] lg:h-[40vh]  bg-[url('/bg_services.png')] bg-cover md:bg-contain bg-no-repeat bg-right text-white ">
                <div className='h-full w-full bg-linear-to-r from-blue-700 via-blue-500 flex flex-col justify-center items-center md:items-start md:ps-4 lg:ps-48 '>
                    <h2 className='text-[24px] md:text-[45px]'>Let's Build</h2>
                    <h1 className='text-[32px] sm:text-[38px] md:text-[60px] font-extrabold'>Your Dream Project</h1>
                    <Link to="/quote" className='border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black mt-4 md:mt-0' >Request a Quote</Link>
                </div>
            </section>
        </main>
    );
};

export default ServiceTemplate;