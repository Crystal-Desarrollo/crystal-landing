'use client';

import {Section} from "@/src/components/craft";
import ProfileCard from "@/src/components/ProfileCard/ProfileCard";

export const Members = () => {

    return (
        <Section>
            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="https://reactbits.dev/assets/person.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
                <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="https://reactbits.dev/assets/person.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
                <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="https://reactbits.dev/assets/person.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>
        </Section>
    )

}