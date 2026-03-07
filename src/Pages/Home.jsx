import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <StatsSection />
            <CTASection />
            <Footer />
        </div>
    )
}

export default Home