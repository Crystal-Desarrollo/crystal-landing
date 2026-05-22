import HeroSection from '../components/sections/HeroSection';
import AreasSection from '../components/sections/AreasSection';
import SaasSection from '../components/sections/SaasSection';
import ClientsSection from '../components/sections/ClientsSection';
import WhySection from '../components/sections/WhySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AreasSection />
            <SaasSection />
            <ClientsSection />
            <WhySection />
            <TestimonialsSection />
            <CtaSection />
        </>
    );
}
