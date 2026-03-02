import Image from "next/image";

const footerLinks = {
    Services: ["Solar Energy", "Smart Grid", "Bill Optimization", "Energy Audit"],
    Company: ["About Us", "Careers", "Press", "Partners"],
    Support: ["Help Center", "Documentation", "API Status", "Contact Us"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"],
};

const pricingFeatures = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        title: "Design",
        description: "Custom lighting plans tailored for your space",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Configure",
        description: "Smart controls and automation setup",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Deploy",
        description: "Professional installation and go-live",
    },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-zinc-800/50">
            {/* ===== CTA Banner ===== */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/bg-3.png"
                        alt=""
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Build your dream landing page,{" "}
                            <span className="gradient-text">today.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                            Everything you need to create a stunning, high-converting page for your business.
                        </p>
                    </div>

                    {/* Pricing feature cards */}
                    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                        {pricingFeatures.map((f, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-2xl glass glow-border text-center group hover:border-accent/30 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                    {f.icon}
                                </div>
                                <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                                <p className="text-xs text-zinc-500">{f.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                        >
                            Get Your Free Quote
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* ===== Map + Contact ===== */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Map */}
                    <div className="rounded-3xl overflow-hidden glow-border h-64 lg:h-80 relative">
                        <Image
                            src="/map.png"
                            alt="Volt office location — London, UK"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-accent/5" />
                        {/* Pin */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                            <div className="relative">
                                <div className="w-4 h-4 bg-accent rounded-full animate-pulse-glow" />
                                <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* Skyline image */}
                    <div className="rounded-3xl overflow-hidden glow-border h-64 lg:h-80 relative">
                        <Image
                            src="/bg-5.png"
                            alt="City skyline at night"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </div>
            </div>

            {/* ===== Footer Links ===== */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/logo.png" alt="Volt" width={32} height={32} />
                            <span className="text-lg font-bold gradient-text">VOLT</span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
                            Smart energy solutions for a sustainable future. Powering homes
                            and businesses across London and beyond.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {[
                                { label: "Fb", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                                { label: "Tw", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                                { label: "Ig", icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-5.5a1 1 0 110-2 1 1 0 010 2z" },
                                { label: "Yt", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-zinc-800/50 hover:bg-accent/20 border border-zinc-700/50 hover:border-accent/30 flex items-center justify-center text-zinc-400 hover:text-accent transition-all duration-300"
                                    aria-label={s.label}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-xs text-zinc-500 hover:text-accent transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-zinc-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-zinc-600">
                        © 2026 Volt Energy Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-600">
                        <a href="#" className="hover:text-zinc-400 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-zinc-400 transition-colors">
                            Terms
                        </a>
                        <a href="#" className="hover:text-zinc-400 transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
