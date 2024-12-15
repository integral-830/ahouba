import {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import ProfileCard from "../components/ProfileCard.tsx";

interface organizerData {
    name: string;
    image: string;
    position: string;
    linkedin: string;
    phone: string;
}

const organizerData: Array<organizerData> = [
    {
        name: "Alok",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Gen Tech Secretary",
        linkedin: "#",
        phone: "7417418837"
    },
    {
        name: "Aditi",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Joint Tech Secretary",
        linkedin: "https://in.linkedin.com/in/aditi-vidyarthi-7a9b36253",
        phone: "9026252723"
    },
    {
        name: "Aaryan Kumar",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Joint Tech Technical",
        linkedin: "https://www.linkedin.com/in/aaryankumarsinha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        phone: "9528314394"
    },
    {
        name: "NIDHI",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/nidhi.jpg",
        position: "Account & Registration Head",
        linkedin: "https://www.linkedin.com/in/nidhi-hk108",
        phone: "9142348481"
    },
    {
        name: "Shreedhar",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/shreedhar.jpg",
        position: "Sponsorship & Tech Event lead",
        linkedin: "https://in.linkedin.com/in/shreedhar-anand-23a699214",
        phone: "9060749243"
    },
    {
        name: "Shashwat  ",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/shashwat.jpg",
        position: "Sponsorship & Tech team",
        linkedin: "https://www.linkedin.com/in/shashwat-kumar-41a610245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        phone: "9708912332"
    },
    {
        name: "Dnyandeep ",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Sponsorship & Tech team",
        linkedin: "#",
        phone: "8623959964"
    },
    {
        name: "Anubhav",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Hackathon Event Organiser",
        linkedin: "#",
        phone: "7355122717"
    },
    {
        name: "Deepanshu ",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/deepanshu.jpg",
        position: "Sponsorship and Hackathon event",
        linkedin: "https://www.linkedin.com/in/deepanshu-singh-gautam-422318258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        phone: "9936142546"
    },
    {
        name: "Aman Ahmad",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/aman.jpg",
        position: "Design lead",
        linkedin: "https://www.linkedin.com/in/aman-ahmad",
        phone: "6306823356"
    },
    {
        name: "Ayush Pandey",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ayush.jpg",
        position: "Esports Event Lead",
        linkedin: "#",
        phone: "9336779708"
    },
    {
        name: "Chetan Pyasi",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/chetan.jpg",
        position: "Sponsor team, hackathon team.",
        linkedin: "https://www.linkedin.com/in/chetan-pyasi-956173256",
        phone: "8618543784"
    },
    {
        name: "Balkishan Bajpay",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "CP EVENT ORGANISER",
        linkedin: "www.linkedin.com/in/balkishan-bajpay",
        phone: "07877058098"
    },
    {
        name: "Vishal Srinivasan",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "CP EVENT ORGANISER ",
        linkedin: "https://www.linkedin.com/in/vishal-srinivasan-661ab5257",
        phone: "8248910030"
    },
    {
        name: "Ayush Ravi",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Event Lead",
        linkedin: "https://www.linkedin.com/in/ayush-ravi-0b1249257",
        phone: "7666539163"
    },
    {
        name: " Sameer Reddy",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sameer.jpg",
        position: "Esports Team",
        linkedin: "https://www.linkedin.com/in/sameerreddy213/",
        phone: "9652877199"
    },
    {
        name: "Trishansh Verma",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/trishansh.jpg",
        position: "Poster designer",
        linkedin: "https://www.linkedin.com/in/trishansh-verma-b22a09291",
        phone: "9329750160"
    },
    {
        name: "Yash Goswami",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Design team member",
        linkedin: "#",
        phone: "7850032749"
    },
    {
        name: "Shivam singh",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Member of eSports Event",
        linkedin: "#",
        phone: "+917005627424"
    },
    {
        name: "Piyush Prasad",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Poster design",
        linkedin: "#",
        phone: "9142396828"
    },
    {
        name: "Aishwary Raj",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Designer, Video Editor",
        linkedin: "#",
        phone: "9984641146"
    },
    {
        name: "Yogita Kumari",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Designing team poster designer",
        linkedin: "https://www.linkedin.com/in/yogita-kumari-090277297",
        phone: "7584041059"
    },
    {
        name: "Prince Yadav",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Design team",
        linkedin: "#",
        phone: "9120409207"
    },
    {
        name: "Rahul Sharma",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Design team",
        linkedin: "https://www.linkedin.com/in/rahul-sharma-91b2bb2a3",
        phone: "6396165371"
    },
    {
        name: "Ritesh Singh",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "In Sponsorship team and member of volunteers",
        linkedin: "https://www.linkedin.com/in/ritesh-singh-377b95255",
        phone: "9161753661"
    },
    {
        name: "Arvind Pathak",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Hackathon Event Organiser",
        linkedin: "#",
        phone: "9971647357"
    },
    {
        name: "Shashi Bhushan",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Web support team",
        linkedin: "https://www.linkedin.com/in/shashi-bhushan-kumar-796b53259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        phone: "7782899732"
    },
    {
        name: "Ram Ashish Yadav",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Web support team",
        linkedin: "https://www.linkedin.com/in/ram-ashish-yadav-851320282",
        phone: "8318158744"
    },
    {
        name: "Aryan kashyap",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "support team",
        linkedin: "https://www.linkedin.com/in/aryan-kashyap-335a61257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        phone: "9973293999"
    },
    {
        name: "Yash Dehariya",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Event lead for robo war and line follower",
        linkedin: "https://www.linkedin.com/in/yash-dehariya-82b91b257",
        phone: "6009312042"
    },
    {
        name: "Aman Kumar",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Editing Team",
        linkedin: "https://www.linkedin.com/in/aman-kumar-a21a94257",
        phone: "9311209203"
    },
    {
        name: "Ayush Kumar",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ayushK.jpg",
        position: "Design and Media",
        linkedin: "https://www.linkedin.com/in/ayush-kumar-792916257",
        phone: "8239322263"
    },
    {
        name: "Rahul Gogra",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: " Bug Bounty Event Organizer",
        linkedin: "https://www.linkedin.com/in/rahul-gogra-ba4135203",
        phone: "7976608292"
    },
    {
        name: "Akanksha Gupta",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Working and Support Team Member",
        linkedin: "www.linkedin.com/in/akanksha-gupta-a9241028b",
        phone: "9410152288"
    },
    {
        name: "Alaukik Patel",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Sponsorship Team",
        linkedin: "https://www.linkedin.com/in/alaukik-patel-614152257",
        phone: "6386695484"
    },
    {
        name: "Ashutosh Ranjan",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Sponsorship team",
        linkedin: "https://www.linkedin.com/in/ashutosh-ranjan-558964248",
        phone: "6200807526"
    },
    {
        name: "Anish Kumar",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Event lead (robo soccer)",
        linkedin: "https://www.linkedin.com/in/anish-kumar-478389290/",
        phone: "9905468566"
    },
    {
        name: "RUPAK BARMAN",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "Event Head of Apex Arena Esports tournament",
        linkedin: "linkedin.com/in/rupak-barman-286621303",
        phone: "9593927778"
    },
    {
        name: "Ankit Yadav",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/ankit.jpg",
        position: "Poster design team and volunteer",
        linkedin: "https://www.linkedin.com/in/ankit-yadav-7a1624284",
        phone: "8176064263"
    },
];

gsap.registerPlugin(ScrollTrigger)

const TeamSection = () => {
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
        <section ref={teamSection} className=" relative h-lvh w-screen overflow-hidden bg-[#a8a8d7]">

            <div ref={teamHeader}
                 className="relative z-30 w-[1250vw] md:w-[750vw] lg:w-[400vw] h-full flex flex-col will-change-transform ">
                <div className="absolute w-full h-full flex flex-col items-center p-36">
                    <h1 className="customFont text-[22vh] text-[#dfdff2] w-full">Tech--Team</h1>
                    <h1 className="customFont text-[28vh] text-[#dfdff2] w-full h-full text-center">Bit-Busters</h1>
                </div>
                <div className="absolute w-full h-full flex flex-col will-change-transform">
                    <div className="h-full w-full flex items-center justify-around">
                        <div className="w-[50px]"></div>
                        {organizerData.map((organizer, index) => {
                                if (index % 3 === 0) {
                                    return (<ProfileCard name={organizer.name} key={index} contact={organizer.phone}
                                                         image={organizer.image} position={organizer.position}/>
                                    )
                                }
                            }
                        )
                        }
                        <div className="w-[80px]"></div>
                    </div>
                    <div className="h-full w-full flex items-center justify-around">
                        {organizerData.map((organizer, index) => {
                                if (index % 3 === 1) {
                                    return (
                                        <ProfileCard
                                            name={organizer.name} key={index} contact={organizer.phone}
                                            image={organizer.image} position={organizer.position}
                                        />
                                    )
                                }
                            }
                        )
                        }

                    </div>
                    <div className="h-full w-full flex items-center justify-around">
                        <div className="w-[200px]"></div>
                        {organizerData.map((organizer, index) => {
                                if (index % 3 === 2) {
                                    return (
                                        <ProfileCard
                                            name={organizer.name} key={index} contact={organizer.phone}
                                            image={organizer.image} position={organizer.position}
                                        />
                                    )
                                }
                            }
                        )
                        }
                        <div className="w-fit">
                            <h1 id="hero-title"
                                className="customFont text-[8vh] text-[#DFDFF2]">/your-helping-hands</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TeamSection
