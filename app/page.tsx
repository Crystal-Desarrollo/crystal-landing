import {Projects} from "@/src/partials/home/projects";
import HeroSection from "@/src/partials/home/hero-section";
import {Members} from "@/src/partials/home/members";


export default function Home() {
    return (
        <div>
            <HeroSection/>

            <Projects/>

            <Members/>
        </div>
    );
}
