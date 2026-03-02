import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="/bg-4.png"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Large Text */}
                    <div>
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-6 block">
                            About Volt
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            The <span className="gradient-text">VOLT</span> system
                            combines intelligent hardware and smart{" "}
                            <span className="gradient-text">software</span>.
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-8 text-base sm:text-lg">
                            Our integrated platform seamlessly blends cutting-edge LED technology
                            with AI-powered controls to create lighting systems that adapt to
                            your lifestyle, save energy, and enhance every space.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "Renewable Sources",
                                "24/7 Monitoring",
                                "AI Optimization",
                                "Carbon Neutral",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-surface-light/20">
                                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                        <svg
                                            className="w-2.5 h-2.5 text-accent"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-zinc-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Circular Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Outer ring */}
                            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-accent/30 p-3">
                                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/20 relative">
                                    <Image
                                        src="/div3.png"
                                        alt="Power infrastructure — Volt smart systems"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent animate-pulse" />
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent/60 animate-pulse delay-300" />
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-3 animate-float">
                                <div className="text-sm font-semibold gradient-text">99.9% Uptime</div>
                                <div className="text-xs text-zinc-400">Guaranteed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
