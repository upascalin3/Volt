import Image from "next/image";

const benefits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Professional Team",
        description: "Certified engineers with 10+ years of experience in smart energy systems.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "24/7 Support",
        description: "Round-the-clock technical support and monitoring for complete peace of mind.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Quality Guaranteed",
        description: "Premium components with extended warranties and guaranteed performance.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Fast Installation",
        description: "Quick and clean installation with minimal disruption to your daily life.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0500] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-14">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                        Why Us
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        Why <span className="gradient-text">Choose</span> Us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Benefit cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {benefits.map((b, i) => (
                            <div
                                key={i}
                                className="group p-5 rounded-2xl border border-zinc-800/50 bg-surface-light/20 hover:border-accent/30 hover:bg-surface-light/50 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-4">
                                    {b.icon}
                                </div>
                                <h3 className="text-base font-semibold mb-2 group-hover:text-accent-light transition-colors">
                                    {b.title}
                                </h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {b.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right — Dashboard preview image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden glow-border">
                            <Image
                                src="/bg-1.png"
                                alt="Volt smart dashboard preview"
                                width={600}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        {/* Floating stat badge */}
                        <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 glass rounded-2xl px-5 py-4 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">40% Saved</div>
                                    <div className="text-xs text-zinc-400">Energy Costs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
