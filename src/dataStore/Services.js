const serviceDataArray = [{
    hero: {
        titleLine1: "Web",
        titleLine2: "Development",
        description: "Custom web applications built with modern frameworks like React, Next.js, and Nodejs. We create responsive, scalable, and performance-optimized solutions that deliver exceptional user experiences across all devices.",
        image: "/services/web_dev.jpg"
    },
    benefits: [
        "Responsive design that works on all devices",
        "SEO optimized for better search rankings",
        "Fast loading times and smooth performance",
        "Scalable architecture for future growth",
        "Modern security best practices",
        "Cross-browser compatibility"
    ],
    process: [
        {
            title: "Discovery & Planning",
            desc: "Define the app’s objectives, identify the user’s needs, and create a roadmap."
        },
        {
            title: "UI/UX Design & Prototyping",
            desc: "Design intuitive interfaces and build interactive prototypes."
        },
        {
            title: "Development",
            desc: "Develop high-performance web applications with modern frameworks."
        },
        {
            title: "Testing & QA",
            desc: "Performance and usability testing to ensure flawlessness in functionality."
        },
        {
            title: "Deployment & Launch",
            desc: "Launch the web app with full support on all platforms."
        },
        {
            title: "Maintenance & Support",
            desc: "Provide updates, bug fixes, and enhancements regularly."
        }
    ],
    technologies: [
        {
            stack: "Frontend + Styling",
            description: "Modern, responsive, and scalable web interfaces",
            tags: ["React.js", "Next.js", "Vue", "Nuxt.js", "Tailwind CSS", "Bootstrap"]
        },
        {
            stack: "Backend + Server-Side",
            description: "Robust server logic and APIs for web applications",
            tags: ["Python (Django)", "Node.js", "PHP (Laravel)"]
        }
    ],
    relatedServices: [
        {
            title: "Software Quality Assurance",
            desc: "We establish the QA gold standard, transforming development into a high-efficiency engine.",
            image: "/services/sqa.jpg",
            link: "/services/7"
        },
        {
            title: "Cloud Solutions",
            desc: "We engineer secure, multi-cloud environments guaranteeing enterprise resilience and high availability.",
            image: "/services/cloud.jpg",
            link: "/services/6"
        },
        {
            title: "Ecommerce Solution",
            desc: "We deliver breakthrough rapid deployment of robust eCommerce with guaranteed peak performance.",
            image: "/services/ecom.jpg",
            link: "/services/8"
        }
    ]
}, {
    hero: {
        titleLine1: "Mobile App",
        titleLine2: "Development",
        description: "Native and hybrid mobile applications built with modern frameworks. We deliver platform-optimized performance on iOS and Android.",
        image: "/services/mad.jpg"
    },
    benefits: [
        "Seamless user experience across iOS & Android",
        "Optimized performance for smooth interactions",
        "Push notifications to boost engagement",
        "Offline functionality for access",
        "Scalable codebase for growth",
        "Enhanced security with modern standards"
    ],
    process: [
        { title: "Discovery", desc: "We define app goals and create a detailed roadmap." },
        { title: "Design", desc: "We craft intuitive mobile interfaces and build prototypes." },
        { title: "Development", desc: "We develop high-performance apps using modern frameworks." },
        { title: "Testing", desc: "We ensure flawless functionality with rigorous device testing." },
        { title: "Launch", desc: "We publish your app to the stores with full support." },
        { title: "Support", desc: "Ongoing updates and bug fixes for long-term growth." }
    ],
    technologies: [
        {
            stack: "Flutter + Firebase",
            description: "Cross-platform mobile apps with real-time backend",
            tags: ["Flutter", "Firebase", "Dart"]
        },
        {
            stack: "React Native + AWS",
            description: "Native performance with cloud scalability",
            tags: ["React Native", "AWS", "JavaScript"]
        }
    ],
    relatedServices: [
        {
            title: "Web Development",
            desc: "Top-tier web services built for speed and scale.",
            image: "/services/web_dev.jpg",
            link: "/services/0"
        },
        {
            title: "UI/UX Design",
            desc: "Intuitive design that elevates your digital product.",
            image: "/services/ui_ux.jpg",
            link: "/services/2"
        },
        {
            title: "Quality Assurance",
            desc: "Flawless software through rigorous testing standards.",
            image: "/services/sqa.jpg",
            link: "/services/7"
        }
    ]
}, {
    hero: {
        titleLine1: "UI/UX",
        titleLine2: "Design",
        description: "User-centric design systems crafted using industry-standard tools like Figma, Sketch, and Adobe XD. We create intuitive, accessible, and visually stunning interfaces that maximize conversion rates and user engagement across all digital platforms.",
        image: "/services/ui_ux.jpg"
    },
    benefits: [
        "Intuitive interfaces for easier user navigation",
        "Enhanced user satisfaction and engagement",
        "Streamlined workflows that reduce friction",
        "Consistent design system for brand trust",
        "Improved accessibility for all users",
        "Higher conversion rates through optimized flows"
    ],
    process: [
        {
            title: "Discovery & Planning",
            desc: "We analyze your goals, users, and competitors to build a clear design direction."
        },
        {
            title: "Information Architecture",
            desc: "We structure content and user flows for smooth, intuitive navigation."
        },
        {
            title: "Wireframing",
            desc: "We create low-fidelity layouts to map out page structure and interactions."
        },
        {
            title: "UI Design",
            desc: "We craft polished, modern interfaces aligned with your brand identity."
        },
        {
            title: "Prototyping",
            desc: "We build interactive prototypes to visualize the complete user experience."
        },
        {
            title: "User Testing & Refinement",
            desc: "We validate the design with users and refine based on real feedback."
        }
    ],
    technologies: [
        {
            stack: "Figma + FigJam",
            description: "Collaborative interface design and user flow mapping",
            tags: ["Figma", "FigJam"]
        },
        {
            stack: "Adobe Illustrator + Photoshop",
            description: "Branding, icons, product visuals, and UI assets",
            tags: ["Illustrator", "Photoshop"]
        }
    ],
    relatedServices: [
        {
            title: "Cloud Solutions",
            desc: "We engineer secure, multi-cloud environments guaranteeing enterprise resilience and high availability.",
            image: "/services/cloud.jpg",
            link: "/services/6"
        },
        {
            title: "Ecommerce Solution",
            desc: "We deliver breakthrough rapid deployment of robust eCommerce with guaranteed peak performance.",
            image: "/services/ecom.jpg",
            link: "/services/8"
        },
        {
            title: "Artificial Intelligence",
            desc: "We engineer sophisticated AI systems that transform data into actionable intelligence and competitive advantage.",
            image: "/services/ai.jpg",
            link: "/services/4"
        }
    ]
}, {
    hero: {
        titleLine1: "Digital",
        titleLine2: "Marketing",
        description: "Data-driven strategies executed across performance channels like Google Ads, Meta (Facebook/Instagram), and SEO. We implement targeted, scalable, and high-ROI campaigns that maximize lead generation and amplify brand presence across global markets.",
        image: "/services/digi_market.jpg"
    },
    benefits: [
        "Targeted campaigns that reach the right audience",
        "Measurable results with real-time analytics",
        "Cost-effective compared to traditional marketing",
        "Improved brand visibility across digital channels",
        "Increased engagement through personalized content",
        "Scalable strategies that grow with your business"
    ],
    process: [
        {
            title: "Discovery & Strategy",
            desc: "We analyze your goals, target audience, and competitors to build a results-driven strategy."
        },
        {
            title: "Content & Creative Planning",
            desc: "We craft engaging content, visuals, and messaging tailored to your brand."
        },
        {
            title: "Campaign Setup",
            desc: "We configure ads, tracking, and targeting across all relevant digital channels."
        },
        {
            title: "Execution & Optimization",
            desc: "We launch campaigns and continuously optimize for better reach, engagement, and conversions."
        },
        {
            title: "Analytics & Reporting",
            desc: "We track performance with real-time metrics and deliver clear, actionable insights."
        },
        {
            title: "Scaling & Growth",
            desc: "We refine strategies and scale successful campaigns to maximize ROI and long-term growth."
        }
    ],
    technologies: [
        {
            stack: "Google Marketing Suite",
            description: "Data-driven ads, analytics, and performance tracking",
            tags: ["Google Ads", "Google Analytics", "Google Search Console"]
        },
        {
            stack: "Social Media Marketing Tools",
            description: "Brand growth through targeted social media strategies",
            tags: ["Meta Business Suite", "Instagram Insights", "LinkedIn Campaign Manager"]
        }
    ],
    relatedServices: [
        {
            title: "Web Development",
            desc: "We’ve reached significant milestones in providing top-tier web development services.",
            image: "/services/web_dev.jpg",
            link: "/services/0"
        },
        {
            title: "UI/UX Design",
            desc: "Our deep expertise delivers world-class, intuitive UI/UX design that elevates digital products.",
            image: "/services/ui_ux.jpg",
            link: "/services/2"
        },
        {
            title: "Software Quality Assurance",
            desc: "We establish the QA gold standard, transforming development into a high-efficiency engine.",
            image: "/services/sqa.jpg",
            link: "/services/7"
        }
    ]
}, {
    hero: {
        titleLine1: "Artificial",
        titleLine2: "Intelligence",
        description: "Advanced AI/ML models developed using cutting-edge platforms like TensorFlow, PyTorch, and cloud services (AWS/Azure/GCP). We engineer robust, predictive, and scalable systems that automate complex decisions and unlock transformative business intelligence.",
        image: "/services/ai.jpg"
    },
    benefits: [
        "Automates repetitive tasks to save time and cost",
        "Enhances decision-making with data-driven insights",
        "Improves accuracy through advanced algorithms",
        "Boosts productivity with smart process optimization",
        "Scales effortlessly as business demands grow",
        "Delivers personalized user experiences"
    ],
    process: [
        {
            title: "Discovery & Requirement Analysis",
            desc: "We identify business goals, data needs, and AI opportunities for maximum impact."
        },
        {
            title: "Data Collection & Preparation",
            desc: "We gather, clean, and structure data to ensure accurate AI model training."
        },
        {
            title: "Model Development",
            desc: "We design and train AI/ML models using advanced algorithms tailored to your needs."
        },
        {
            title: "Testing & Validation",
            desc: "We rigorously test models for accuracy, reliability, and real-world performance."
        },
        {
            title: "Deployment & Integration",
            desc: "We integrate AI solutions into your systems for seamless operation."
        },
        {
            title: "Monitoring & Optimization",
            desc: "We continuously monitor, fine-tune, and update models to maintain performance."
        }
    ],
    technologies: [
        {
            stack: "Machine Learning & Model Development",
            description: "Building predictive, scalable, and intelligent systems",
            tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"]
        },
        {
            stack: "Data Engineering & Pipelines",
            description: "Reliable data processing for AI-powered applications",
            tags: ["Pandas", "NumPy", "Apache Spark", "MongoDB / MySQL"]
        }
    ],
    relatedServices: [
        {
            title: "Web Development",
            desc: "We’ve reached significant milestones in providing top-tier web development services.",
            image: "/services/web_dev.jpg",
            link: "/services/0"
        },
        {
            title: "Mobile App Development",
            desc: "We’ve achieved impressive landmarks in delivering industry-leading mobile application solutions.",
            image: "/services/mad.jpg",
            link: "/services/1"
        },
        {
            title: "UI/UX Design",
            desc: "Our deep expertise delivers world-class, intuitive UI/UX design that elevates digital products.",
            image: "/services/ui_ux.jpg",
            link: "/services/2"
        }
    ]
}, {
    hero: {
        titleLine1: "Blockchain",
        titleLine2: "", // Single line title in this snippet
        description: "Decentralized applications and custom ledgers engineered using key protocols like Ethereum, Hyperledger Fabric, and Solana. We develop secure, transparent, and immutable platforms that unlock verifiable automation and next-generation tokenization capabilities.",
        image: "/services/blockchain.jpg"
    },
    benefits: [
        "Automates repetitive tasks to save time and cost",
        "Enhances decision-making with data-driven insights",
        "Improves accuracy through advanced algorithms",
        "Boosts productivity with smart process optimization",
        "Scales effortlessly as business demands grow",
        "Delivers personalized user experiences"
    ],
    process: [
        {
            title: "Discovery & Planning",
            desc: "We analyze your business needs and identify blockchain use cases for maximum value."
        },
        {
            title: "Architecture & Design",
            desc: "We design secure, scalable blockchain architectures tailored to your project."
        },
        {
            title: "Smart Contract Development",
            desc: "We create and test smart contracts for automated, trustless transactions."
        },
        {
            title: "Integration & Development",
            desc: "We integrate blockchain solutions with existing systems and develop decentralized applications."
        },
        {
            title: "Testing & QA",
            desc: "We conduct thorough testing to ensure security, performance, and reliability."
        },
        {
            title: "Deployment & Launch",
            desc: "We deploy your blockchain solution to the mainnet with full launch support."
        }
    ],
    technologies: [
        {
            stack: "DApp & Wallet Integration",
            description: "User-friendly interfaces for decentralized applications",
            tags: ["React.js", "Next.js", "MetaMask Integration", "WalletConnect"]
        },
        {
            stack: "Backend & APIs for Web3",
            description: "Building secure and scalable blockchain-powered backends",
            tags: ["Node.js", "Express", "GraphQL", "REST APIs"]
        }
    ],
    relatedServices: [
        {
            title: "Digital Marketing",
            desc: "Mastering the full spectrum of digital channels, we maximize brand visibility and deliver scalable growth.",
            image: "/services/digi_market.jpg",
            link: "/services/3"
        },
        {
            title: "Artificial Intelligence",
            desc: "We engineer sophisticated AI systems that transform data into actionable intelligence and competitive advantage.",
            image: "/services/ai.jpg",
            link: "/services/4"
        },
        {
            title: "Ecommerce Solution",
            desc: "We deliver breakthrough rapid deployment of robust eCommerce with guaranteed peak performance.",
            image: "/services/ecom.jpg",
            link: "/services/8"
        }
    ]
}, {
    hero: {
        titleLine1: "Cloud",
        titleLine2: "Solution",
        description: "Enterprise cloud environments deployed and managed across leading providers like AWS, Microsoft Azure, and Google Cloud Platform (GCP). We architect cost-optimized, secure, and highly scalable infrastructures that guarantee continuous availability and rapid digital transformation.",
        image: "/services/cloud.jpg"
    },
    benefits: [
        "On-demand scalability to match business growth",
        "Reduced infrastructure costs with pay-as-you-go models",
        "High availability and reliable uptime",
        "Secure data storage with advanced cloud protection",
        "Faster deployment and simplified management",
        "Seamless remote access from anywhere"
    ],
    process: [
        {
            title: "Discovery & Assessment",
            desc: "We evaluate your infrastructure, business needs, and cloud readiness."
        },
        {
            title: "Cloud Strategy & Planning",
            desc: "We design a roadmap for migration, deployment, or cloud-native development."
        },
        {
            title: "Architecture & Design",
            desc: "We build secure, scalable, and high-performance cloud architectures."
        },
        {
            title: "Migration & Integration",
            desc: "We seamlessly move your systems to the cloud and integrate with existing platforms."
        },
        {
            title: "Testing & Optimization",
            desc: "We validate performance, security, and reliability for smooth operations."
        },
        {
            title: "Deployment & Launch",
            desc: "We deploy cloud solutions with full monitoring and support for business continuity."
        }
    ],
    technologies: [
        {
            stack: "Cloud Platforms",
            description: "Reliable, scalable, and secure cloud infrastructure",
            tags: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)"]
        },
        {
            stack: "Cloud Hosting & Deployment",
            description: "Fast, optimized hosting for modern applications",
            tags: ["Netlify", "Vercel", "Render", "Docker"]
        }
    ],
    relatedServices: [
        {
            title: "Digital Marketing",
            desc: "Mastering the full spectrum of digital channels, we maximize brand visibility and deliver scalable growth.",
            image: "/services/digi_market.jpg",
            link: "/services/3"
        },
        {
            title: "Artificial Intelligence",
            desc: "We engineer sophisticated AI systems that transform data into actionable intelligence and competitive advantage.",
            image: "/services/ai.jpg",
            link: "/services/4"
        },
        {
            title: "Ecommerce Solution",
            desc: "We deliver breakthrough rapid deployment of robust eCommerce with guaranteed peak performance.",
            image: "/services/ecom.jpg",
            link: "/services/8"
        }
    ]
}, {
    hero: {
        titleLine1: "Software",
        titleLine2: "Quality Assurance",
        description: "Rigorous quality assurance executed using modern testing frameworks like Selenium, Cypress, and TestRail across CI/CD pipelines. We deliver proactive, automated, and comprehensive testing strategies that guarantee high performance and stability across all software releases.",
        image: "/services/sqa.jpg"
    },
    benefits: [
        "Early defect detection to reduce costly fixes",
        "Improved product reliability and performance",
        "Ensures consistent, high-quality user experiences",
        "Strengthens security by identifying vulnerabilities",
        "Faster development cycles through streamlined testing",
        "Increased customer trust and satisfaction"
    ],
    process: [
        {
            title: "Requirement Analysis",
            desc: "We review project specifications to define testing scope and quality goals."
        },
        {
            title: "Test Planning",
            desc: "We design detailed test plans, strategies, and select the right tools."
        },
        {
            title: "Test Case Design",
            desc: "We create comprehensive test cases to cover all functional and non-functional scenarios."
        },
        {
            title: "Test Execution",
            desc: "We perform manual and automated tests to identify defects and ensure functionality."
        },
        {
            title: "Defect Reporting & Tracking",
            desc: "We log issues, track resolutions, and ensure all defects are addressed."
        },
        {
            title: "Final QA & Validation",
            desc: "We conduct final validation to ensure the product meets quality standards."
        }
    ],
    technologies: [
        {
            stack: "API Testing & Validation",
            description: "Ensuring backend systems are stable and secure",
            tags: ["Postman", "Newman", "Swagger", "Rest Assured"]
        },
        {
            stack: "CI/CD & Test Integration",
            description: "Automated pipelines for continuous quality",
            tags: ["Jenkins", "GitHub Actions", "GitLab CI/CD"]
        }
    ],
    relatedServices: [
        {
            title: "Cloud Solutions",
            desc: "We engineer secure, multi-cloud environments guaranteeing enterprise resilience and high availability.",
            image: "/services/cloud.jpg",
            link: "/services/6"
        },
        {
            title: "Digital Marketing",
            desc: "Mastering the full spectrum of digital channels, we maximize brand visibility and deliver scalable growth.",
            image: "/services/digi_market.jpg",
            link: "/services/3"
        },
        {
            title: "Mobile App Development",
            desc: "We’ve achieved impressive landmarks in delivering industry-leading mobile application solutions.",
            image: "/services/mad.jpg",
            link: "/services/1"
        }
    ]
}, {
    hero: {
        titleLine1: "Blockchain",
        titleLine2: "", // Single line in the original source
        description: "Decentralized applications and custom ledgers engineered using key protocols like Ethereum, Hyperledger Fabric, and Solana. We develop secure, transparent, and immutable platforms that unlock verifiable automation and next-generation tokenization capabilities.",
        image: "/services/blockchain.jpg"
    },
    benefits: [
        "Automates repetitive tasks to save time and cost",
        "Enhances decision-making with data-driven insights",
        "Improves accuracy through advanced algorithms",
        "Boosts productivity with smart process optimization",
        "Scales effortlessly as business demands grow",
        "Delivers personalized user experiences"
    ],
    process: [
        {
            title: "Discovery & Planning",
            desc: "We analyze your business needs and identify blockchain use cases for maximum value."
        },
        {
            title: "Architecture & Design",
            desc: "We design secure, scalable blockchain architectures tailored to your project."
        },
        {
            title: "Smart Contract Development",
            desc: "We create and test smart contracts for automated, trustless transactions."
        },
        {
            title: "Integration & Development",
            desc: "We integrate blockchain solutions with existing systems and develop decentralized applications."
        },
        {
            title: "Testing & QA",
            desc: "We conduct thorough testing to ensure security, performance, and reliability."
        },
        {
            title: "Deployment & Launch",
            desc: "We deploy your blockchain solution to the mainnet with full launch support."
        }
    ],
    technologies: [
        {
            stack: "DApp & Wallet Integration",
            description: "User-friendly interfaces for decentralized applications",
            tags: ["React.js", "Next.js", "MetaMask Integration", "WalletConnect"]
        },
        {
            stack: "Backend & APIs for Web3",
            description: "Building secure and scalable blockchain-powered backends",
            tags: ["Node.js", "Express", "GraphQL", "REST APIs"]
        }
    ],
    relatedServices: [
        {
            title: "Digital Marketing",
            desc: "Mastering the full spectrum of digital channels, we maximize brand visibility and deliver scalable growth.",
            image: "/services/digi_market.jpg",
            link: "/services/3"
        },
        {
            title: "Mobile App Development",
            desc: "We’ve achieved impressive landmarks in delivering industry-leading mobile application solutions.",
            image: "/services/mad.jpg",
            link: "/services/1"
        },
        {
            title: "UI/UX Design",
            desc: "Our deep expertise delivers world-class, intuitive UI/UX design that elevates digital products.",
            image: "/services/ui_ux.jpg",
            link: "/services/2"
        }
    ]
}];
export default serviceDataArray;

const services = [
    {
        title: "Web Development",
        description: "We’ve reached significant milestones in providing top-tier web development services.",
        imageUrl: "/services/web_dev.jpg",
        link: "/services/0"
    }, {
        title: "Mobile App Development",
        description: "We’ve achieved impressive landmarks in delivering industry-leading mobile application solutions.",
        imageUrl: "/services/mad.jpg",
        link: "/services/1"
    },
    {
        title: "UI/UX Design",
        description: "Our deep expertise delivers world-class, intuitive UI/UX design that elevates digital products.",
        imageUrl: "/services/ui_ux.jpg",
        link: "/services/2"
    },
    {
        title: "Digital Marketing",
        description: "Mastering the full spectrum of digital channels, we maximize brand visibility and deliver scalable growth.",
        imageUrl: "/services/digi_market.jpg",
        link: "/services/3"
    }, {
        title: "Artificial Intelligence",
        description: "We engineer sophisticated AI systems that transform data into actionable intelligence and competitive advantage.",
        imageUrl: "/services/ai.jpg",
        link: "/services/4"
    }, {
        title: "Blockchain",
        description: "We deliver scalable, high-throughput blockchain platforms using layer protocol expertise.",
        imageUrl: "/services/blockchain.jpg",
        link: "/services/5"
    },
    {
        title: "Cloud Solutions",
        description: "We engineer secure, multi-cloud environments guaranteeing enterprise resilience and high availability.",
        imageUrl: "/services/cloud.jpg",
        link: "/services/6"
    },
    {
        title: "Software Quality Assurance",
        description: "We establish the QA gold standard, transforming development into a high-efficiency engine.",
        imageUrl: "/services/sqa.jpg",
        link: "/services/7"
    }, {
        title: "Ecommerce Solution",
        description: "We deliver breakthrough rapid deployment of robust eCommerce with guaranteed peak performance.",
        imageUrl: "/services/ecom.jpg",
        link: "/services/8"
    }
]

export { services };