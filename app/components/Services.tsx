import Image from "next/image";

const services = [
    {
        title: "Installation",
        description: "Professional setup of smart lighting systems tailored to your space.",
        image: "/div1.png",
    },
    {
        title: "Maintenance",
        description: "Regular checkups and swift repairs to keep your system running.",
        image: "/div2.png",
    },
    {
        title: "Consultation",
        description: "Expert advice on energy-efficient lighting solutions for any project.",
        image: "/div3.png",
    },
];

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Energy Efficient",
        description: "Up to 40% reduction in energy consumption with smart LED technology.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Smart Control",
        description: "Control your lighting from anywhere with our intelligent app.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Safe & Reliable",
        description: "Built with premium components and backed by a 10-year warranty.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Cost Effective",
        description: "Lower electricity bills from day one with intelligent scheduling.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />

            {/* ===== OUR SERVICES ===== */}
            <div className="relative z-10 section-padding">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-14">
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                            What We Offer
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Comprehensive energy solutions designed to power your world
                            efficiently, sustainably, and affordably.
                        </p>
                    </div>

                    {/* Service cards grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group relative rounded-2xl overflow-hidden glow-border cursor-pointer"
                            >
                                <div className="relative h-64 sm:h-72">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent-light transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                {/* Hover accent line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== KEY FEATURES ===== */}
            <div className="relative z-10 section-padding pt-0">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Key <span className="gradient-text">Features</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            What makes our smart lighting solutions stand out from the rest.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl border border-zinc-800/50 bg-surface-light/30 hover:border-accent/30 hover:bg-surface-light/60 transition-all duration-500 text-center"
                            >
                                <div className="mx-auto w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
