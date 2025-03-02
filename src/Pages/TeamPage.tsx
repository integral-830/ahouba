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
        link: "https://www.linkedin.com/in/shivam-singh-21a8b9258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Shivam Kumar Singh",
        contact: 7005627424,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sks.jpg",
        designation: "eSports Team"
    },
    {
        link: "https://www.linkedin.com/in/rahul-gogra-ba4135203",
        name: "Rahul Gogra",
        contact: 7976608292,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/rg.jpg",
        designation: "Cyber security lead"
    },
    // {
    //     link: "https://www.linkedin.com/in/anurag-kar-769358326",
    //     name: "ANURAG KAR",
    //     contact: 8789253304,
    //     profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ak.jpg",
    //     designation: "Co - Lead, Cyber Security Club"
    // },
    {
        link: "https://www.linkedin.com/in/kushsharma20/",
        name: "Kush Sharma",
        contact: 9837635386,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ks.jpeg",
        designation: "Management head"
    },
    {
        link: "https://www.linkedin.com/in/aknoru",
        name: "Rounak Prajapati",
        contact: 9755618709,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/rp.jpg",
        designation: "Designer and event coordinator , outreach handler"
    },
    {
        link: "https://www.linkedin.com/in/yash-goswami-6a21a1331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Yash Goswami",
        contact: 7850032749,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/yg.jpg",
        designation: "Design Team Lead"
    },
    {
        link: "https://www.linkedin.com/in/ayush-pandey-0b5a88254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Ayush Pandey",
        contact: 9336779708,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ap.webp",
        designation: "eSports Lead"
    },
    {
        link: "https://www.linkedin.com/in/arya-sharma-64b468302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        name: "Arya Sharma",
        contact: 9588211314,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/as.jpeg",
        designation: "PR team"
    },
    {
        link: "https://www.linkedin.com/in/gautam-sharma-3b70b62a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Gautam Sharma",
        contact: 9351731896,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/gs.jpg",
        designation: "E sports pr team"
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
        link: "https://www.linkedin.com/in/ayush-ravi-0b1249257",
        name: "Ayush Ravi",
        contact: 7666539163,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ar.jpg",
        designation: "Event Manager (Club Co-lead)"
    },
    {
        link: "linkedin.com/in/Aryan Singh",
        name: "Aryan Singh",
        contact: 9958667276,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ars.jpg",
        designation: "Event Management"
    },
    {
        link: "www.linkedin.com/in/pabitra-biswas-8b3978257",
        name: "PABITRA BISWAS",
        contact: 9932335056,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/pb.jpg",
        designation: "Event Manager"
    },
    {
        link: "https://www.linkedin.com/in/apoorva-singh-214882323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Apoorva singh",
        contact: 9897537655,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/aps.jpg",
        designation: "PR team member"
    },
    {
        link: "https://www.linkedin.com/in/madhav-kumar-1440a3250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "B.Madhav Kumar",
        contact: 9392618213,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/mk.jpg",
        designation: "Pr team lead"
    },
    {
        link: "https://www.linkedin.com/in/sambodh-gupta-2aa946284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Sambodh gupta",
        contact: 9462580504,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sg.jpg",
        designation: "Sponsorship Team"
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
        link: "https://www.linkedin.com/in/yogita-kumari-090277297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Yogita kumari",
        contact: 7584041059,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/yk.jpg",
        designation: "Design team"
    },
    {
        link: "www.linkedin.com/in/rahulsharma2k4",
        name: "Rahul Sharma",
        contact: 6396165371,
        profile: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/rs.jpg",
        designation: "Design team"
    }
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
