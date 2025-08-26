import {HeroSection} from "@/partials/home/hero-section";
import {Projects} from "@/partials/home/projects";
import {Members} from "@/partials/home/members";
import React from "react";

export default function Home() {
    return (
        <div>
            <HeroSection/>

            <Projects/>

            <Members/>
        </div>
    );
}
