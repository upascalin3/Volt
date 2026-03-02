import Image from "next/image";

export default function Customers() {
    return (
        <section className="relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/bg-2.png"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Left */}
                    <div className="lg:w-1/2">
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                            Trusted Worldwide
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Recent <span className="gradient-text">Customers</span>
                        </h2>
                        <p className="text-zinc-400 leading-relaxed max-w-lg">
                            Join thousands of satisfied homes and businesses that trust Volt
                            for their smart energy and lighting needs.
                        </p>
                    </div>

                    {/* Right — customer showcase images */}
                    <div className="lg:w-1/2 flex items-center gap-4">
                        {["/div1.png", "/bg-3.png", "/div3.png"].map((src, i) => (
                            <div
                                key={i}
                                className="relative flex-1 h-40 sm:h-48 rounded-2xl overflow-hidden glow-border group"
                            >
                                <Image
                                    src={src}
                                    alt={`Customer project ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats bar */}
                <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "10,000+", label: "Happy Customers" },
                        { value: "500+", label: "Projects Done" },
                        { value: "50+", label: "Cities Covered" },
                        { value: "15+", label: "Years Experience" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                            <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
