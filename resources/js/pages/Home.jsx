import HeroSection from "../components/sections/HeroSection";
import AreasSection from "../components/sections/AreasSection";
import SaasSection from "../components/sections/SaasSection";
import ClientsSection from "../components/sections/ClientsSection";
import WhySection from "../components/sections/WhySection";
import CtaSection from "../components/sections/CtaSection";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
    usePageTitle('home');

    return (
        <>
            <HeroSection />
            <AreasSection />
            <SaasSection />
            <ClientsSection />
            <WhySection />
            <CtaSection />
        </>
    );
}