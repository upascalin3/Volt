import Image from "next/image";

export default function ProblemSolution() {
    return (
        <section id="problem" className="relative section-padding overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — single composite image (div1.png) */}
                    <div>
                        <div className="relative rounded-2xl overflow-hidden w-full h-80 sm:h-72 lg:h-[520px]">
                            <Image src="/div1.png" alt="Problem visual" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Right — Problem & Solution text */}
                    <div className="pt-6 lg:pt-12 max-w-xl">
                        <h3 className="text-3xl font-extrabold text-accent mb-6">The Problem</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Many homes, schools, and event venues leave lights on unnecessarily. In places where electricity is expensive and sometimes unreliable, inefficient lighting leads to:
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Higher electricity bills</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Energy waste</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Poor lighting management</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Lack of visibility on power consumption</span>
                            </li>
                        </ul>

                        <h3 className="text-3xl font-extrabold text-accent mb-6">The Solution</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            VOLT is a smart lighting and energy monitoring system designed to make electricity usage more efficient. It automatically controls lighting based on human activity while providing real-time insights into energy consumption.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Turns lights on only when needed</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Tracks electricity usage in real time</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Sends alerts when energy use is high</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Works with grid power and solar systems</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <span className="mt-1 text-accent">•</span>
                                <span>Functions even without constant internet</span>
                            </li>
                        </ul>

                        <a href="#about" className="inline-flex items-center px-6 py-3 bg-accent rounded-full text-white font-semibold shadow-lg">
                            Explore More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
