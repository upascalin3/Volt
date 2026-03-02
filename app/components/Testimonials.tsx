"use client";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner, London",
        quote: "Volt transformed our home lighting completely. Our energy bills dropped by 35% in the first month, and the smart controls are incredibly intuitive.",
        rating: 5,
    },
    {
        name: "James Crawford",
        role: "Office Manager, Manchester",
        quote: "The installation was seamless and the team was professional from start to finish. Our office now has perfect lighting that adapts throughout the day.",
        rating: 5,
    },
    {
        name: "Emily Chen",
        role: "Restaurant Owner, Birmingham",
        quote: "We wanted mood lighting that could change for different times of day. Volt delivered beyond our expectations — our customers love the ambiance.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0700] to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                        What People Say
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Testimonials From our <span className="gradient-text">Customers</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Hear from the people who&apos;ve experienced the Volt difference firsthand.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group p-6 sm:p-8 rounded-2xl border border-zinc-800/50 bg-surface-light/20 hover:border-accent/30 hover:bg-surface-light/40 transition-all duration-500"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-5">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <svg
                                        key={j}
                                        className="w-4 h-4 text-accent"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-zinc-300 leading-relaxed mb-6 text-sm sm:text-base">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">{t.name}</div>
                                    <div className="text-xs text-zinc-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
