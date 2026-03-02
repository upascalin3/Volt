const steps = [
    {
        number: "01",
        title: "Consultation",
        description: "We assess your space and energy needs to design a customized smart lighting plan.",
        color: "bg-accent",
    },
    {
        number: "02",
        title: "Design",
        description: "Our engineers create a detailed blueprint optimized for your environment.",
        color: "bg-amber-500",
    },
    {
        number: "03",
        title: "Installation",
        description: "Professional installation with minimal disruption — typically completed in a day.",
        color: "bg-orange-400",
    },
    {
        number: "04",
        title: "Support",
        description: "Ongoing monitoring, updates, and 24/7 support to keep everything running perfectly.",
        color: "bg-accent",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 block">
                        Process
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="group relative p-6 rounded-2xl border border-zinc-800/50 bg-surface-light/20 hover:border-accent/30 hover:bg-surface-light/50 transition-all duration-500"
                        >
                            {/* Step number */}
                            <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white font-bold text-lg mb-5 shadow-lg shadow-accent/20`}>
                                {step.number}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-light transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {step.description}
                            </p>
                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-zinc-700" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
