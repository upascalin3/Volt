"use client";

import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Write a <span className="gradient-text">Message</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a question or ready to get started? Drop us a line and our
                        team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Contact Form */}
                    <div className="p-8 rounded-3xl glass glow-border">
                        <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-sm text-zinc-400 mb-2 block">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-zinc-400 mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm text-zinc-400 mb-2 block">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-400 mb-2 block">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 mt-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right — Skyline Image + Contact Info */}
                    <div className="flex flex-col gap-6">
                        {/* Skyline image */}
                        <div className="relative rounded-3xl overflow-hidden glow-border flex-1 min-h-[280px]">
                            <Image
                                src="/bg-5.png"
                                alt="City skyline"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white mb-1">Visit Our Office</h3>
                                <p className="text-sm text-zinc-300">London, UK • Open Mon–Fri</p>
                            </div>
                        </div>

                        {/* Contact cards row */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl glass glow-border">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-1 text-sm">Our Office</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    123 Energy Way, South Bank
                                    <br />
                                    London, SE1 7PB
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl glass glow-border">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold mb-1 text-sm">Email Us</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    hello@voltenergy.co.uk
                                    <br />
                                    +44 20 7946 0958
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
