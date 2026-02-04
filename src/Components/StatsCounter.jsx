import { Calendar, EarthIcon, Users, ClipboardClock } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const statsData = [
    { icon: <Calendar className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />, label: "Industry Experience", value: 8, suffix: " Years+" },
    { icon: <EarthIcon className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />, label: "Happy Clients", value: 120, suffix: "+" },
    { icon: <Users className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />, label: "Team Strength", value: 25, suffix: "+" },
    { icon: <ClipboardClock className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />, label: "Projects Completed", value: 1, suffix: "k+" },
];

function Counter({ end, suffix }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 } // Triggers when 30% of the component is visible
        );

        if (countRef.current) observer.observe(countRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, hasStarted]);

    return (
        <span ref={countRef} className="mb-0 text-[20px] md:text-[24px] lg:text-[42px] font-bold text-[#12ABEE]">
            {count}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    return (
        <section className="py-18 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center justify-items-center">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-3 group cursor-default transition-all duration-500"
                        >
                            {/* Icon with Action Blue and Lime Hover */}
                            <div className="text-[#12ABEE] group-hover:text-[#85E645] group-hover:scale-110 transition-all duration-300">
                                {stat.icon}
                            </div>

                            <Counter end={stat.value} suffix={stat.suffix} />

                            <p className="md:mt-2 text-gray-500 text-[12px] lg:text-[19px] font-medium uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}