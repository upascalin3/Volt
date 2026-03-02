import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0" style={{ backgroundColor: '#07080A' }} />

            {/* subtle grid removed to keep background even */}

            {/* Orange 3D ribbon / abstract shape — right side (no dark overlay) */}
            <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none">
                <Image
                    src="/hero-background.png"
                    alt=""
                    fill
                    className="object-cover object-left"
                    priority
                />
                {/* removed additional dark gradient overlay to keep background even */}
            </div>

            {/* Ambient glow removed to ensure an even background */}

            {/* Social icons removed to match provided image */}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-medium tracking-widest uppercase text-accent-light">
                                Powering the Future
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight text-zinc-100 mb-6">
                            Smart Lighting That Saves Energy and Money
                        </h1>

                        {/* Subtext */}
                        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed">
                            VOLT uses AI, motion detection, and real-time energy monitoring to reduce electricity waste in homes, schools, and event spaces.
                        </p>

                        {/* Search / Query box */}
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="flex items-center gap-3 px-4 py-4">
                                    <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center text-accent">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                        </svg>
                                    </div>
                                    <input
                                        className="flex-1 bg-transparent placeholder:text-zinc-400 text-zinc-700 outline-none"
                                        placeholder="Enter any Question You have"
                                    />
                                </div>
                            </div>

                            <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10M7 7h10v10" />
                                </svg>
                            </button>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-8 max-w-xl">
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-100">40%</div>
                                <div className="text-sm text-zinc-400">Saved Power</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-100">100%</div>
                                <div className="text-sm text-zinc-400">Realtime Updates</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-zinc-100">100%</div>
                                <div className="text-sm text-zinc-400">Offline and Clean</div>
                            </div>
                        </div>
                    </div>

                    {/* Right column intentionally left empty because hero art / background image is absolutely positioned on the right */}
                    <div className="hidden lg:block" />
                </div>
            </div>

            {/* Scroll indicator removed to match provided image */}
        </section>
    );
}
