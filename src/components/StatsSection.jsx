const stats = [
    { value: "$48B+", label: "Assets Under Management" },
    { value: "2.5M", label: "Active Customers" },
    { value: "120+", label: "Branches Nationwide" },
    { value: "99.9%", label: "Uptime Reliability" },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-[#0F1F3D]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="font-serif text-4xl md:text-5xl font-bold text-[#E7B623] mb-2">{s.value}</p>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
