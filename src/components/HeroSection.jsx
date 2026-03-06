import heroBg from '../assets/download.png'
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="City skyline at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-[#0F1F3D]/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-up">

          {/* Small Subtitle */}
          <p className="text-yellow-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Trusted Since 1987
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Banking That <span className="text-yellow-400">Builds</span> Your Future
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
            Experience world-class financial services designed to protect and grow your wealth with confidence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary Button */}
            <button className="flex items-center justify-center gap-2 px-8 h-12 text-sm text-white font-serif bg-yellow-500 font-semibold rounded-md hover:bg-yellow-500 transition">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>

            {/* Outline Button */}
            <button className="flex items-center justify-center font-serif text-sm gap-2 px-8 h-12 text-white border border-white/30 rounded-md font-semibold hover:bg-white/10 transition">
              Explore Services
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
