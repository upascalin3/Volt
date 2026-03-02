"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl transition-all duration-500">
            <div className={`glass rounded-full px-6 py-3 flex items-center w-full ${scrolled ? 'shadow-lg shadow-black/30' : ''}`}>
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Volt"
                            width={36}
                            height={36}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-lg font-bold tracking-wider text-zinc-100">VOLT</span>
                    </a>
                </div>

                {/* Center nav links (desktop) */}
                <div className="hidden md:flex items-center gap-8 mx-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                        </a>
                    ))}
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-4">
                    {/* small user icon */}
                    <button className="hidden md:inline-flex w-9 h-9 rounded-full bg-zinc-800/50 items-center justify-center text-zinc-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.64 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                    >
                        Get Started
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="glass mx-4 mt-3 rounded-2xl p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-zinc-300 hover:text-white transition-colors py-2 text-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-2 px-5 py-3 bg-accent text-white text-center font-semibold rounded-full"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
