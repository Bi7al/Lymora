import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const steps = ["Contact", "Services", "Project", "Review"];

export default function QuoteForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "",
        companyName: "",
        email: "",
        phone: "",
        services: [],
        description: "",
        budget: "",
        timeline: "",
    });

    const validateStep = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (currentStep === 0) {
            if (!formData.firstName.trim()) newErrors.firstName = "Required";
            if (!formData.companyName.trim()) newErrors.companyName = "Required";
            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = "Enter a valid email address";
            }
        }
        if (currentStep === 1 && formData.services.length === 0) {
            newErrors.services = "Select at least one service";
        }
        if (currentStep === 2) {
            if (!formData.description.trim()) newErrors.description = "Required";
            if (!formData.budget) newErrors.budget = "Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (!validateStep()) return;
        setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    };
    const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

    const toggleService = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    return (
        <>
            {/* HERO */}
            <div className='w-full h-[40vh] md:h-[35vh] lg:h-[60vh] bg-[#11395A]'>
                <div className="bg-[url('bg/bg_home_mobile.png')] md:bg-[url('/bg/bg_home.png')] bg-cover w-full h-full flex justify-center items-center p-2.5">
                    <div className="space-y-4 p-2.5">
                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-[#85E645] mt-12'>Get a Quote</h1>
                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-full md:w-5/7 lg:w-4/7 font-medium'>
                            Share your requirements and receive a personalized quote tailored to your needs.
                        </p>
                    </div>
                </div>
            </div>

            <section className="min-h-screen bg-[#F8FAFC] px-4 py-10 md:py-20">
                <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">

                    {/* STEPS INDICATOR */}
                    <div className="border-b bg-[#EAF6FD]/50 px-6 py-8">
                        <div className="relative flex justify-between">
                            {steps.map((step, i) => (
                                <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all duration-300 ${i <= currentStep
                                            ? "bg-[#12ABEE] text-white shadow-lg ring-4 ring-[#12ABEE]/20"
                                            : "border-2 border-gray-200 bg-white text-gray-400"
                                            }`}
                                    >
                                        {i < currentStep ? <Check size={18} /> : i + 1}
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-wider ${i <= currentStep ? "text-[#11395A]" : "text-gray-400"}`}>
                                        {step}
                                    </span>
                                </div>
                            ))}
                            {/* Connector Line */}
                            <div className="absolute top-5 left-0 h-0.5 w-full bg-gray-200 z-0 hidden md:block" />
                        </div>
                    </div>

                    {/* FORM BODY */}
                    <div className="p-6 md:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {currentStep === 0 && (
                                    <>
                                        <h2 className="text-2xl font-bold text-[#1C1B17]">Contact Details</h2>
                                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                                            <Input label="First Name" value={formData.firstName} error={errors.firstName} onChange={(v) => setFormData((p) => ({ ...p, firstName: v }))} />
                                            <Input label="Company Name" value={formData.companyName} error={errors.companyName} onChange={(v) => setFormData((p) => ({ ...p, companyName: v }))} />
                                        </div>
                                        <Input label="Email Address" type="email" value={formData.email} error={errors.email} onChange={(v) => setFormData((p) => ({ ...p, email: v }))} />
                                        <Input label="Phone Number" value={formData.phone} onChange={(v) => setFormData((p) => ({ ...p, phone: v }))} />
                                    </>
                                )}

                                {currentStep === 1 && (
                                    <>
                                        <h2 className="text-2xl font-bold text-[#1C1B17]">Select Services</h2>
                                        {errors.services && <p className="text-sm font-bold text-red-500">{errors.services}</p>}
                                        <div className="grid gap-4 md:grid-cols-2">
                                            {["Web Development", "Mobile App Development", "UI/UX Design", "Branding", "AI Solutions", "Consulting"].map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => toggleService(s)}
                                                    className={`rounded-xl border-2 p-5 text-left font-bold transition-all ${formData.services.includes(s)
                                                        ? "border-[#12ABEE] bg-[#12ABEE]/5 text-[#11395A]"
                                                        : "border-gray-100 hover:border-[#85E645] bg-gray-50/50"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {currentStep === 2 && (
                                    <>
                                        <h2 className="text-2xl font-bold text-[#1C1B17]">Project Scope</h2>
                                        <Textarea label="Project Description" value={formData.description} error={errors.description} onChange={(v) => setFormData((p) => ({ ...p, description: v }))} />
                                        <Select label="Approximate Budget" value={formData.budget} error={errors.budget} onChange={(v) => setFormData((p) => ({ ...p, budget: v }))} options={["Under $5k", "$5k - $10k", "$10k - $25k", "$25k+"]} />
                                    </>
                                )}

                                {currentStep === 3 && (
                                    <>
                                        <h2 className="text-2xl font-bold text-[#1C1B17]">Review Your Request</h2>
                                        <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6 space-y-2 shadow-inner">
                                            <Review label="Name" value={formData.firstName} />
                                            <Review label="Company" value={formData.companyName} />
                                            <Review label="Email" value={formData.email} />
                                            <Review label="Selected Services" value={formData.services.join(", ")} />
                                            <Review label="Budget Range" value={formData.budget} />
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* NAVIGATION */}
                        <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
                            {currentStep > 0 ? (
                                <button onClick={prevStep} className="flex items-center gap-2 font-bold text-gray-400 hover:text-[#11395A] transition-colors">
                                    <ChevronLeft size={20} /> Back
                                </button>
                            ) : <div />}

                            <button
                                onClick={currentStep === steps.length - 1 ? () => alert("Quote request sent!") : nextStep}
                                className="flex items-center gap-2 rounded-xl bg-[#12ABEE] px-10 py-4 font-extrabold text-white transition-all hover:bg-[#85E645] hover:text-[#1C1B17] hover:scale-105 shadow-lg shadow-[#12ABEE]/20"
                            >
                                {currentStep === steps.length - 1 ? "Submit Quote" : "Continue"}
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ---------------- REUSABLE UI ---------------- */

const Input = ({ label, error, ...props }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs font-extrabold uppercase tracking-widest text-gray-500">{label}</label>
        <input
            {...props}
            className={`rounded-xl border-2 bg-gray-50 p-4 font-medium outline-none transition-all focus:border-[#12ABEE] focus:bg-white ${error ? 'border-red-500' : 'border-transparent'}`}
            onChange={(e) => props.onChange(e.target.value)}
        />
        {error && <span className="text-xs font-bold text-red-500">{error}</span>}
    </div>
);

const Textarea = ({ label, error, value, onChange }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs font-extrabold uppercase tracking-widest text-gray-500">{label}</label>
        <textarea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`rounded-xl border-2 bg-gray-50 p-4 font-medium outline-none transition-all focus:border-[#12ABEE] focus:bg-white ${error ? 'border-red-500' : 'border-transparent'}`}
        />
        {error && <span className="text-xs font-bold text-red-500">{error}</span>}
    </div>
);

const Select = ({ label, options, error, value, onChange }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs font-extrabold uppercase tracking-widest text-gray-500">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`rounded-xl border-2 bg-gray-50 p-4 font-medium outline-none transition-all focus:border-[#12ABEE] focus:bg-white appearance-none ${error ? 'border-red-500' : 'border-transparent'}`}
        >
            <option value="">Choose a range</option>
            {options.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>
        {error && <span className="text-xs font-bold text-red-500">{error}</span>}
    </div>
);

const Review = ({ label, value }) => (
    <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-200/50 py-3 gap-1">
        <span className="text-[12px] font-extrabold uppercase tracking-tighter text-gray-600">{label}</span>
        <span className="font-bold text-[#11395A]">{value || "—"}</span>
    </div>
);