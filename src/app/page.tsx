import {HeroSection} from "@/partials/home/hero-section";
import {Projects} from "@/partials/home/projects";
import {Members} from "@/partials/home/members";
import React from "react";
import {TechStack} from "@/partials/home/tech-stack";

export default function Home() {
    return (
        <div>
            <HeroSection/>
            <TechStack/>

            <Projects/>
            <Members/>
        </div>
    );
}
