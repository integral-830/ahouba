import {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import ProfileCard from "../components/ProfileCard.tsx";
import Particles from "../utility/Particles.tsx";
import Transition from "../utility/Transition.tsx";
import GradientText from "../components/GradientText.tsx";

interface memberData {
    name: string;
    profile: string;
    designation: string;
    link: string;
    contact: number;
}

const members: Array<memberData> = [
    {
        link: "",
        name: "Ayush Verma",
        contact: 9142781644,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/integral.png",
        designation: "Website Lead"
    },
    {
        link: "https://www.linkedin.com/in/shashwat0903?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Shashwat Kumar",
        contact: 9708912332,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/swt.jpg",
        designation: "Techinal Secretary"
    },
    {
        link: "https://www.linkedin.com/in/madhav-thakur-7019b3202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Madhav",
        contact: 9625500445,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/mdh.JPG",
        designation: "Website Mentor"
    },
    {
        link: "https://www.linkedin.com/in/shivam-kumar-574600144/",
        name: "Shivam Kumar",
        contact: 8826314381,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ll.jpg",
        designation: "E-SPORTS MANAGEMENT HEAD"
    },
    {
        link: "https://www.linkedin.com/in/abhijit-kumar-8b8356310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "ABHIJIT KUMAR",
        contact: 9835005042,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/abhi.jpg",
        designation: "Sponsorship Co-lead"
    },
    {
        link: "https://www.linkedin.com/in/rahulsharma2k4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Rahul Sharma",
        contact: 7976608292,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/rs.jpg",
        designation: "Design Team"
    },
    {
        link: "https://www.linkedin.com/in/apoorva-singh-214882323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Apoorva singh",
        contact: 9897537655,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/aps.jpg",
        designation: "PR team member"
    },
    {
        link: "https://www.linkedin.com/in/dnyandeep-chute/",
        name: "Dnyandeep Anil Chute",
        contact: 8623959964,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/dac.jpg",
        designation: "Sponsorship Lead"
    },
    {
        link: "https://www.linkedin.com/in/yash-goswami-6a21a1331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Yash Goswami",
        contact: 7850032749,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/yg.jpg",
        designation: "Design Team Lead"
    },
    {
        link: "https://www.linkedin.com/in/trishansh-verma-b22a09291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Trishansh Verma",
        contact: 9329750160,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/tv.jpg",
        designation: "Design Team"
    },
    {
        link: "https://www.linkedin.com/in/ayush-pandey-0b5a88254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Ayush Pandey",
        contact: 9336779708,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ap.webp",
        designation: "Esports Lead"
    },
    {
        link: "https://www.linkedin.com/in/arya-sharma-64b468302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        name: "Arya Sharma",
        contact: 9588211314,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/as.jpeg",
        designation: "PR Lead"
    },
    {
        link: "https://www.linkedin.com/in/yogita-kumari-090277297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Yogita kumari",
        contact: 7584041059,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/yk.jpg",
        designation: "Design team"
    },
    {
        link: "https://www.linkedin.com/in/aman-dagar-9993b0205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        name: "Aman Dagar",
        contact: 7838690018,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ad.jpeg",
        designation: "PR Coordinator"
    },
    {
        link: "https://www.linkedin.com/in/shivam-singh-21a8b9258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Shivam Kumar Singh",
        contact: 7005627424,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sks.jpg",
        designation: "eSports Coordinator "
    },
    {
        link: "https://www.linkedin.com/in/prabhasavvaru15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Avvaru Naga Prabhas",
        contact: 9398238042,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ap.webp",
        designation: "Outreach co-lead"
    },
    {
        link: "https://www.linkedin.com/in/akanksha-gupta-a9241028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Akanksha Gupta",
        contact: 9410152288,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ag.jpg",
        designation: "Coordinator and Content Team Member"
    },
    {
        link: "https://www.linkedin.com/in/anjeet-kumar-a23aab325",
        name: "Anjeet Kumar",
        contact: 6299239203,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/anj.jpg",
        designation: "Sponsors Coordinator"
    },
    {
        link: "https://www.linkedin.com/in/mansi-dubey-0b3739271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Mansi Dubey",
        contact: 9644134765,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/md.jpg",
        designation: "PR Team Member"
    },
    {
        link: "https://www.linkedin.com/in/madhav-kumar-1440a3250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "B.Madhav Kumar",
        contact: 9392618213,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/mk.jpg",
        designation: "Pr Lead"
    },
    {
        link: "https://www.linkedin.com/in/om-bharadwaj-916b802a5/",
        name: "Om Bharadwaj",
        contact: 6207803739,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ob.jpg",
        designation: "Co Lead Sponsorship Team"
    },
    {
        link: "https://www.linkedin.com/in/deepak-kush-3a7a10257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Deepak",
        contact: 9812510003,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/dk.jpg",
        designation: "PR team Co. head"
    },
    {
        link: "https://www.linkedin.com/in/harshit-mishra-b778b9219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Harshit Mishra",
        contact: 9628492644,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/hm.jpg",
        designation: "Design Team"
    },
    {
        link: "https://www.linkedin.com/in/aishwary-raj-63b434290",
        name: "Aishwary Raj",
        contact: 9984641146,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ash.jpg",
        designation: "Design team"
    },
    {
        link: "https://www.linkedin.com/in/aman-chahar-9466bb325?",
        name: "Aman chahar",
        contact: 6396165371,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/amc.jpg",
        designation: "PR team"
    },
];

gsap.registerPlugin(ScrollTrigger)

const TeamPage = () => {
    const teamSection = useRef(null);
    const teamHeader = useRef<HTMLDivElement | null>(null);
    const stickyHeight = window.innerHeight * 5;

    useGSAP(() => {
        ScrollTrigger.create(
            {
                trigger: teamSection.current,
                start: "top top",
                end: `+=${stickyHeight}px`,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const maxTranslate = teamHeader?.current?.clientWidth ? teamHeader.current.clientWidth - window.innerWidth : 0;
                    const translateX = -progress * maxTranslate;
                    gsap.set(teamHeader.current,
                        {
                            x: translateX,
                            ease: "power2.inOut",
                        }
                    );
                }
            }
        )
    })

    return (
        <section ref={teamSection} className=" relative min-h-lvh w-screen overflow-hidden">
            <Particles
                particleColors={['#ffffff', '#7000df','#d9b3ff','#5a00b3']}
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div ref={teamHeader}
                 className="relative z-30 w-[1250vw] md:w-[750vw] lg:w-[400vw] h-full flex flex-col will-change-transform ">
                <div className="absolute w-full h-full flex flex-col items-center p-36">
                    <GradientText
                        id="hero-title"
                        colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="customFont text-[22vh] text-[#DFDFF2] w-full"
                    >
                        Tech--Team
                    </GradientText>
                    <GradientText
                        id="hero-title"
                        colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="customFont text-[22vh] text-[#DFDFF2] justify-center"
                    >
                        Bit-Busters
                    </GradientText>
                </div>
                <div className="absolute w-full h-full flex flex-col will-change-transform">
                    <div className="h-full w-full flex items-center justify-around">
                        <div className="w-[50px]"></div>
                        {members.map((organizer, index) => {
                                if (index % 3 === 0) {
                                    return (<ProfileCard name={organizer.name} key={index} contact={organizer.contact}
                                                         image={organizer.profile} position={organizer.designation} link={organizer.link}/>
                                    )
                                }
                            }
                        )
                        }
                        <div className="w-[80px]"></div>
                    </div>
                    <div className="h-full w-full flex items-center justify-around">
                        {members.map((organizer, index) => {
                                if (index % 3 === 1) {
                                    return (
                                        <ProfileCard
                                            name={organizer.name} key={index} contact={organizer.contact}
                                            image={organizer.profile} position={organizer.designation} link={organizer.link}
                                        />
                                    )
                                }
                            }
                        )
                        }

                    </div>
                    <div className="h-full w-full flex items-center justify-around">
                        <div className="w-[200px]"></div>
                        {members.map((organizer, index) => {
                                if (index % 3 === 2) {
                                    return (
                                        <ProfileCard
                                            name={organizer.name} key={index} contact={organizer.contact}
                                            image={organizer.profile} position={organizer.designation} link={organizer.link}
                                        />
                                    )
                                }
                            }
                        )
                        }
                        <div className="w-fit">
                            <GradientText
                                id="hero-title"
                                colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="customFont text-[8vh] text-[#DFDFF2] justify-center"
                            >
                                /your-helping-hands
                            </GradientText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Transition(TeamPage)
