import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Swiper styles must be imported for the carousel to render correctly
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Mathew Johnston",
        role: "CEO and founder of 4MILL",
        image: "https://nextpak.org/wp-content/uploads/2025/07/image-77.jpg",
        content: "Lymora went truly above and beyond all of my expectations. They really understood the requirements and were able to offer better solutions than what I had thought of."
    },
    {
        name: "Melissa Wheeler",
        role: "Business owner",
        image: "https://nextpak.org/wp-content/uploads/2025/07/image-78.jpg",
        content: "The expertise and creativity brought my vision to life. The website they crafted not only looks stunning, but also functions flawlessly. Communication was seamless at every step."
    },
    {
        name: "Luke Edwin",
        role: "Company CEO",
        image: "https://nextpak.org/wp-content/uploads/2025/07/image-76.jpg",
        content: "I’ve been working with Lymora for nearly two years on various web projects. They consistently deliver quality work that meets both my expectations and those of my clients."
    },
    {
        name: "Jim Beecham",
        role: "Sports Website Owner",
        image: "https://nextpak.org/wp-content/uploads/2025/07/image-75.jpg",
        content: "I’m a satisfied customer from the USA working with Lymora on my sports website. Their programmers provide daily progress and the team delivers creative, efficient solutions at a great price."
    },
    {
        name: "Enoque Panzo",
        role: "Company CEO",
        image: "https://nextpak.org/wp-content/uploads/2025/07/Rectangle-137.jpg",
        content: "Working with Lymora for almost three years, their dedication to every project has been outstanding. Quick responses and consistent reliability make them a pleasure to work with."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-full py-12 lg:py-18  bg-[#F9FAFB] overflow-hidden">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header Section */}
                <div className="text-center mb-10 md:mb-4">
                    <h2 className="mt-0 text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 tracking-tight wrap-break-word">
                        What Our Clients Say
                    </h2>

                    <p className='mt-4 text-[18px] md:text-base md:tracking-wider'>Discover why businesses trust us. Read these testimonials to see how we’ve helped our clients achieve their goals.</p>
                </div>

                {/* Carousel Section */}
                <div className="relative w-full mt-8">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        /* Fix 2: Dynamic pagination with specific sizing to prevent push */
                        pagination={{
                            clickable: true,
                            el: '.test-pagination',
                        }}
                        navigation={{
                            nextEl: '.test-next',
                            prevEl: '.test-prev',
                        }}
                        className="w-full"
                    >
                        {testimonials.map((test, index) => (
                            <SwiperSlide key={index} className="pb-12 lg:pb-4">
                                {/* Fix 3: Card uses w-full and box-border padding */}
                                <div className="w-full bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">

                                    {/* Avatar Section */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#97D749]/20">
                                            <img
                                                src={test.image}
                                                alt={test.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full text-white shadow-lg">
                                            <Quote size={12} fill="white" />
                                        </div>
                                    </div>

                                    {/* Content - Fix 4: Added break-words to handle long text on narrow screens */}
                                    <div className="w-full max-w-2xl mb-8">
                                        <p className="text-gray-600 text-sm md:text-xl font-medium leading-relaxed italic wrap-break-word">
                                            "{test.content}"
                                        </p>
                                    </div>

                                    {/* Identity */}
                                    <div className="w-full border-t border-gray-50 pt-6">
                                        <h4 className="text-lg font-bold text-gray-900">{test.name}</h4>
                                        <p className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-[11px] mt-1">
                                            {test.role}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Controls - Desktop only */}
                    <button className="test-prev absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 bg-white shadow-lg rounded-full text-gray-400 hover:text-blue-600 hidden xl:flex">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="test-next absolute -right-10 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 bg-white shadow-lg rounded-full text-gray-400 hover:text-blue-600 hidden xl:flex">
                        <ChevronRight size={24} />
                    </button>

                    {/* Pagination container */}
                    <div className="test-pagination flex justify-center gap-2 pb-4" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;