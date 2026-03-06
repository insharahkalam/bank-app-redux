import { Shield, TrendingUp, CreditCard, Building2 } from "lucide-react";

const services = [
    {
        icon: CreditCard,
        title: "Deposit Money",
        desc: "Easily add funds to your account with instant processing and zero hidden fees.",
    },
    {
        icon: TrendingUp,
        title: "Withdraw Money",
        desc: "Quick and secure withdrawals anytime, anywhere with real-time balance updates.",
    },
    {
        icon: Building2,
        title: "Secure Transactions",
        desc: "Bank-grade encryption keeps your money and personal data safe at all times.  ",
    },
]

const ServicesSection = () => {
    return (
        <section className="py-18 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-yellow-600 font-bold font-serif text-sm tracking-[0.15em] uppercase mb-8">What We Offer</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold">
                        Financial Services
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="p-8 rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg bg-yellow-100/40 flex items-center justify-center mb-4">
                                <s.icon className="h-6 w-6 text-yellow-500" />
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
