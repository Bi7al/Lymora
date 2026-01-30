import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Handle form logic here
    };
    return (
        <>
            <div className='w-full h-[40vh] md:h-[35vh]  lg:h-[70vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 '>
                <div className='bg-white/30 backdrop-blur-md w-full h-full flex justify-center items-center p-2.5'>
                    <div className="space-y-4 p-2.5">
                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-gray-800 mt-12'>Get in Touch With Us</h1>
                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-full md:w-5/7 lg:w-4/7'>Have questions, need support, or want to discuss your project? We’re here to help! Contact Lymora below or reach out directly — our team will get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
            <div className='w-full  flex flex-col py-20 px-2.5'>
                <div className=" mx-auto flex flex-col md:flex-row gap-12 items-start justify-center px-2.5 py-2">

                    {/* Left Column: Contact Info */}
                    <div className="w-full lg:w-2/7 space-y-6">
                        <div className="space-y-4">
                            <h5 className="font-semibold text-[22px]  tracking-wide">
                                Keep In Touch With Us.
                            </h5>
                            <p className="text-gray-600 lg:text-lg leading-relaxed">
                                We drive growth for your business by making your brand more compelling online.
                                Let’s get in touch with our digital strategists for a kickstart into the Digital World.
                            </p>
                        </div>

                        <div className="space-y-4 ps-2">
                            <ContactInfoItem
                                icon={<MapPin size={24} />}
                                text="205-B, Satellite Town, Rawalpindi, Punjab 46300"
                            />
                            <ContactInfoItem
                                icon={<Phone size={24} />}
                                text="+92 343 689 3822"
                            />
                            <ContactInfoItem
                                icon={<Mail size={24} />}
                                text="Info@lymora.com"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/9  ">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-1">
                                <label className=" font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className=" font-semibold text-gray-700">Email *</label>
                                <input
                                    required
                                    type="email"
                                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className=" font-semibold text-gray-700">Contact Number *</label>
                                <input
                                    required
                                    type="tel"
                                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className=" font-semibold text-gray-700">Company Name *</label>
                                <input
                                    required
                                    type="text"
                                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col space-y-1 md:col-span-2">
                                <label className=" font-semibold text-gray-700">Message</label>
                                <textarea
                                    rows="3"
                                    className="p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-500 transition-colors shadow-md active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
const ContactInfoItem = ({ icon, text }) => (
    <div className="flex items-center space-x-4 group">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg transition-transform group-hover:scale-110">
            {icon}
        </div>
        <span className="text-gray-800 text-sm ">{text}</span>
    </div>
);
