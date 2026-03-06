import { ArrowRight } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-24 bg-gray-200">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                    Open an account in minutes and experience banking designed for your success.
                </p>

                {/* Plain Tailwind Button */}
                <button className="inline-flex items-center justify-center  bg-[#0F1F3D] text-white hover:bg-[#263759] font-bold text-base px-12 py-3 rounded-lg transition-colors duration-300">
                    Open Your Account <ArrowRight className="ml-2 h-4 w-4" />
                </button>
            </div>
        </section>
    );
};

export default CTASection;
