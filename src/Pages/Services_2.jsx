import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Tv, Star } from 'lucide-react';
import Testimonials from '../Components/Testimonials';
import serviceDataArray from '../dataStore/Services';

const ServiceTemplate = () => {
    const { index } = useParams();
    const data = serviceDataArray[Number(index)];
    if (!data) {
        return (
            <main className="w-full h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Service not found</h1>
            </main>
        );
    }

    return (
        <main className="w-full overflow-hidden bg-white">

            {/* HERO SECTION */}
            <section className="relative py-15 md:py-20 lg:pt-32 bg-[#F8FAFC] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="space-y-8">
                        <div className="flex items-center mt-4 gap-3 bg-[#12ABEE]/10 w-fit px-4 py-2 rounded-full border border-[#12ABEE]/20">
                            <div className="bg-[#12ABEE] p-1.5 rounded-full text-white">
                                <Tv size={16} />
                            </div>
                            <span className="text-sm font-bold text-[#11395A] uppercase tracking-wider">Professional Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1C1B17] leading-tight">
                            {data.hero.titleLine1}<br />
                            <span className="text-[#12ABEE]">{data.hero.titleLine2}</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">{data.hero.description}</p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to="/contact"><button className="flex items-center gap-2 px-8 py-4 bg-[#12ABEE] text-white font-bold rounded-xl shadow-lg hover:bg-[#11395A] transition-all active:scale-95">
                                Get Started <ArrowRight size={20} />
                            </button></Link>
                            {/* <button className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 text-[#1C1B17] font-bold rounded-xl hover:border-[#12ABEE] transition-all">
                                Schedule Consultation <ArrowRight size={20} className="text-[#12ABEE]" />
                            </button> */}
                        </div>
                    </div>
                    <div className="relative ">
                        <div className="absolute -inset-4 bg-[#85E645]/20 rounded-3xl blur-2xl -z-10" />
                        <img src={data.hero.image} alt={data.hero.titleLine1} className="aspect-video rounded-3xl shadow-2xl w-full h-auto object-cover border border-white" />
                    </div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1B17] mb-12 text-center">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-[#F8FAFC] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-[#12ABEE]/20">
                                <CheckCircle2 className="text-[#85E645] shrink-0" size={24} />
                                <span className="font-bold text-[#11395A] leading-snug">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROCESS */}
            <section className="py-20 bg-[#11395A] text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {data.process.map((step, idx) => (
                            <div key={idx} className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl font-black text-[#12ABEE]/20 group-hover:text-[#85E645] transition-colors">{idx + 1}</span>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6 group-hover:border-[#12ABEE] transition-all">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES WE USE */}
            <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1B17] mb-12 text-center">Technologies We Use</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.technologies.map((tech, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-[#85E645]/50 transition-all group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-[#12ABEE]/10 rounded-lg text-[#12ABEE]">
                                        <Star size={24} fill="currentColor" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#11395A]">{tech.stack}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{tech.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    {tech.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-[#12ABEE] group-hover:text-white transition-colors">
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

            {/* MORE SERVICES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1B17] mb-12 text-center">More Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.relatedServices.map((service, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all">
                                <div className="h-56 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-8 space-y-4">
                                    <h3 className="text-2xl font-bold text-[#11395A]">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                                    <Link to={service.link} className="inline-flex items-center gap-2 font-bold text-[#12ABEE] hover:text-[#85E645] transition-colors">
                                        Learn More <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
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
        </main>
    );
};

export default ServiceTemplate;