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

    /* ---------------- VALIDATION ---------------- */

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

    /* ---------------- UI ---------------- */

    return (
        <>
            <div className='w-full h-[40vh] md:h-[35vh]  lg:h-[60vh] bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 '>
                <div className='bg-white/30 backdrop-blur-md w-full h-full flex justify-center items-center p-2.5'>
                    <div className="space-y-4 p-2.5">
                        <h1 className='text-[32px] md:text-[40px] lg:text-5xl font-extrabold text-center text-gray-800 mt-12'>Get a Quote</h1>
                        <p className='text-center mx-auto md:text-xl lg:text-2xl text-white w-full md:w-5/7 lg:w-4/7'>Share your requirements and receive a personalized quote tailored to your needs.</p>
                    </div>
                </div>
            </div>
            <section className="min-h-screen bg-white px-4 py-10">
                <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-xl">
                    {/* STEPS */}
                    <div className="border-b bg-gray-50 px-6 py-5">
                        <div className="relative flex justify-between">
                            {steps.map((step, i) => (
                                <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-full font-bold ${i <= currentStep
                                            ? "bg-blue-600 text-white"
                                            : "border bg-white text-gray-400"
                                            }`}
                                    >
                                        {i < currentStep ? <Check size={16} /> : i + 1}
                                    </div>
                                    <span className="text-xs font-bold text-gray-600">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BODY */}
                    <div className="p-6 md:p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-6"
                            >
                                {/* STEP 1 */}
                                {currentStep === 0 && (
                                    <>
                                        <h2 className="text-2xl font-bold">Contact Details</h2>

                                        <div className="grid gap-4 md:grid-cols-2">
                                            <Input
                                                label="First Name"
                                                value={formData.firstName}
                                                error={errors.firstName}
                                                onChange={(v) =>
                                                    setFormData((p) => ({ ...p, firstName: v }))
                                                }
                                            />
                                            <Input
                                                label="Company Name"
                                                value={formData.companyName}
                                                error={errors.companyName}
                                                onChange={(v) =>
                                                    setFormData((p) => ({ ...p, companyName: v }))
                                                }
                                            />
                                        </div>

                                        <Input
                                            label="Email"
                                            type="email"
                                            value={formData.email}
                                            error={errors.email}
                                            onChange={(v) =>
                                                setFormData((p) => ({ ...p, email: v }))
                                            }
                                        />

                                        <Input
                                            label="Phone"
                                            value={formData.phone}
                                            onChange={(v) =>
                                                setFormData((p) => ({ ...p, phone: v }))
                                            }
                                        />
                                    </>
                                )}

                                {/* STEP 2 */}
                                {currentStep === 1 && (
                                    <>
                                        <h2 className="text-2xl font-bold">Services</h2>
                                        {errors.services && (
                                            <p className="text-sm text-red-500">{errors.services}</p>
                                        )}
                                        <div className="grid gap-3 md:grid-cols-2">
                                            {[
                                                "Web Development",
                                                "Mobile App Development",
                                                "UI/UX Design",
                                                "Branding",
                                                "AI Solutions",
                                                "Consulting",
                                            ].map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => toggleService(s)}
                                                    className={`rounded-xl border p-4 text-left transition ${formData.services.includes(s)
                                                        ? "border-blue-600 bg-blue-600/10"
                                                        : "hover:border-gray-300"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* STEP 3 */}
                                {currentStep === 2 && (
                                    <>
                                        <h2 className="text-2xl font-bold">Project Details</h2>

                                        <Textarea
                                            label="Description"
                                            value={formData.description}
                                            error={errors.description}
                                            onChange={(v) =>
                                                setFormData((p) => ({ ...p, description: v }))
                                            }
                                        />

                                        <Select
                                            label="Budget"
                                            value={formData.budget}
                                            error={errors.budget}
                                            onChange={(v) =>
                                                setFormData((p) => ({ ...p, budget: v }))
                                            }
                                            options={["Under $5k", "$5k - $10k", "$10k+"]}
                                        />
                                    </>
                                )}

                                {/* STEP 4 */}
                                {currentStep === 3 && (
                                    <>
                                        <h2 className="text-2xl font-bold">Review</h2>
                                        <div className="rounded-xl bg-gray-50 p-4 text-sm">
                                            <Review label="Name" value={formData.firstName} />
                                            <Review label="Company" value={formData.companyName} />
                                            <Review label="Email" value={formData.email} />
                                            <Review label="Services" value={formData.services.join(", ")} />
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* NAV */}
                        <div className="mt-10 flex  gap-4 flex-row">
                            {currentStep > 0 && (
                                <button
                                    onClick={prevStep}
                                    className="flex items-center gap-2 font-semibold text-gray-500 hover:text-gray-900"
                                >
                                    <ChevronLeft size={18} /> Back
                                </button>
                            )}

                            <button
                                onClick={
                                    currentStep === steps.length - 1
                                        ? () => alert("Submitted!")
                                        : nextStep
                                }
                                className="ml-auto flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:scale-95"
                            >
                                {currentStep === steps.length - 1 ? "Submit" : "Next"}
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ---------------- REUSABLE FIELDS ---------------- */

const Input = ({ label, error, ...props }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-bold uppercase text-gray-600">{label}</label>
        <input
            {...props}
            className="rounded-xl bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-blue-600"
            onChange={(e) => props.onChange(e.target.value)}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);

const Textarea = ({ label, error, value, onChange }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-bold uppercase text-gray-600">{label}</label>
        <textarea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-xl bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-blue-600"
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);

const Select = ({ label, options, error, value, onChange }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-bold uppercase text-gray-600">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-xl bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-blue-600"
        >
            <option value="">Select</option>
            {options.map((o) => (
                <option key={o}>{o}</option>
            ))}
        </select>
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
);

const Review = ({ label, value }) => (
    <div className="flex justify-between border-b py-2">
        <span className="text-xs font-bold uppercase text-gray-500">{label}</span>
        <span className="font-medium">{value || "—"}</span>
    </div>
);
