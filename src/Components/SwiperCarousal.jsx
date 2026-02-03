import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
    {
        title: "Web Development",
        desc: "We’ve reached significant milestones in providing top-tier web development services.",
        link: "https://nextpak.org/services/web-development/",
        img: "web_dev"
    },
    {
        title: "Mobile Development",
        desc: "We create attractive and highly convenient mobile applications. Our top service is transforming client ideas into reality.",
        link: "https://nextpak.org/services/mobile-app-development/",
        img: "mad"
    },
    {
        title: "Digital Marketing",
        desc: "Guided by our expert marketers’ recommendations, we effectively reach the right customers.",
        link: "https://nextpak.org/services/digital-marketing/",
        img: "digi_market"
    },
    {
        title: "Artificial Intelligence",
        desc: "To expertly implement your AI-driven ideas, we have a team of skilled artificial intelligence specialists.",
        link: "https://nextpak.org/services/artifical-intelligence/",
        img: "ai"
    },
    {
        title: "Software Quality Assurance",
        desc: "To expertly ensure the quality of your software, we have a team of proficient software quality specialists.",
        link: "https://nextpak.org/services/software-quality-assurance/",
        img: "sqa"
    },
    {
        title: "Blockchain",
        desc: "To expertly implement your blockchain ideas, we have a team of skilled blockchain technology specialists.",
        link: "https://nextpak.org/services/blockchain/",
        img: "blockchain"
    }
];

const ServiceCarousel = () => {
    return (
        <section className="py-16 lg:px-4 relative ">
            <div className="w-xs md:w-2xl lg:w-4xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-4 md:pb-8 lg:pb-12"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div
                                style={{ backgroundImage: `url(/services/${service.img}.jpg)` }}
                                className="bg-cover bg-center shadow-lg rounded-2xl overflow-hidden group"
                            >
                                {/* Overlay using Brand Primary Navy #11395A */}
                                <div className='p-8 flex flex-col h-80 md:h-100 lg:h-120 bg-[#11395A]/80 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-[#11395A]/70'>
                                    <h2 className="text-2xl font-bold mb-4 h-16 flex items-center text-white">
                                        {service.title}
                                    </h2>
                                    <p className="mb-8 grow leading-relaxed text-gray-100">
                                        {service.desc}
                                    </p>
                                    <a
                                        href={service.link}
                                        className="inline-block px-6 py-3 bg-[#12ABEE] text-white text-center font-bold rounded-lg transition-all hover:bg-[#85E645] hover:text-[#1C1B17] active:scale-95 shadow-md"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Controls */}
                <button className="hidden lg:flex swiper-prev absolute left-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center text-gray-400 hover:text-[#12ABEE] transition-all lg:-left-12">
                    <ChevronLeft size={28} />
                </button>
                <button className="hidden lg:flex swiper-next absolute right-20 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center text-gray-400 hover:text-[#12ABEE] transition-all lg:-right-12">
                    <ChevronRight size={28} />
                </button>

                {/* Custom Pagination Container */}
                <div className="custom-pagination flex justify-center gap-2 mt-8" />
            </div>

            {/* Pagination Style Override */}
            <style jsx global>{`
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #12ABEE !important;
                    width: 24px;
                    border-radius: 4px;
                }
                .custom-pagination .swiper-pagination-bullet {
                    background: #11395A;
                    opacity: 0.2;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default ServiceCarousel;