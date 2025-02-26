import EventCardUi from "../components/EventCardUi.tsx";
import TiltEffect from "../utility/TiltEffect.tsx";
import ParticlesComponent from "../utility/Particle.tsx";
import Transition from "../utility/Transition.tsx";

interface event {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    location: string;
}

const events: Array<event> = [
    {
        id: 0,
        title: "Tech Art",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/htcp.png",
        description: "Blend innovation with artistry in Tech Art! Create stunning digital designs, AI-powered visuals, and futuristic masterpieces that push the boundaries of creativity. 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 1,
        title: "Circuit Debugger",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/cscdch.png",
        description: "Put your debugging skills to the test! In Circuit Debugger, identify faults, troubleshoot circuits, and restore them to perfection. Think fast, debug faster! 🔧🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 2,
        title: "Cyber Sleuth",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/cscdch.png",
        description: "Test your cybersecurity skills in this thrilling ethical hacking challenge. Unravel digital mysteries and outsmart the system! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 3,
        title: "Hackathon",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/htcp.png",
        description: "Dive into an intense coding marathon where innovation meets problem-solving! Build cutting-edge solutions, AI models, and groundbreaking apps in a race against time. Think fast, code faster! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 4,
        title: "Quiz",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/cscdch.png",
        description: "Test your tech knowledge in the ultimate Tech Quiz! From AI to cybersecurity, coding to space tech—challenge your intellect and compete for the title of tech genius! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 5,
        title: "Competetive Prog",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/htcp.png",
        description: "Test your coding skills with challenging problems and intense competition. Optimize, debug, and dominate the leaderboard! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 16,
        title: "VALORANT",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/esports.png",
        description: "Team up, strategize, and dominate in the ultimate Valorant battle! Aim sharp, play smart, and claim victory! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 6,
        title: "Naach(dance)",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/music.png",
        description: "Unleash your energy and set the stage on fire! RhythmX is where passion meets rhythm, blending electrifying moves with unbeatable beats. Get ready to groove, compete, and steal the spotlight! 🔥🎶",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 7,
        title: "Mr & Mrs Ahouba",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/music.png",
        description: "A battle of charisma, intelligence, and talent! Compete in thrilling rounds to claim the title of Mr. & Mrs. Ahouba and showcase your confidence, wit, and skills on the grand stage! 🌟",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 8,
        title: "Scrap Tech Expo",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/games.png",
        description: "Turn scrap into tech marvels! Showcase your creativity by building innovative gadgets, models, or machines from discarded materials. Reuse. Reinvent. Revolutionize! 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 15,
        title: "BGMI",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/esports.png",
        description: "Gear up for an intense BGMI battle where only the best survive! Squad up, strategize, and dominate the battlegrounds to claim victory. Are you ready to be the last one standing? 🏆🎯",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 9,
        title: "Rob war",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/games.png",
        description: "Gear up for the ultimate robotic showdown! Watch as powerful combat robots clash in an intense battle of strategy, strength, and innovation. Build, fight, and dominate the arena! 🚀🔥",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 10,
        title: "Code Hunt",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/cscdch.png",
        description: "Put your coding skills to the test in Code Hunt! Solve challenging puzzles, crack hidden codes, and race against time to emerge as the ultimate coding champion. Are you ready for the hunt? 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 11,
        title: "Cosplay",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/CA.png",
        description: "Step into the world of fantasy and tech at Cosplay! Bring your favorite characters to life with stunning costumes, creativity, and epic performances. Are you ready to steal the spotlight? 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 12,
        title: "Debate",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/music.png",
        description: "Engage in thought-provoking debates on cutting-edge tech topics! Challenge perspectives, defend innovations, and showcase your critical thinking and reasoning skills in this electrifying showdown. 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 13,
        title: "Line Follower",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/games.png",
        description: "Design, build, and program an autonomous robot to navigate a track with precision! Test your skills in sensors, logic, and speed as your bot follows the line to victory. Are you ready for the challenge? 🚀",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 14,
        title: "Drawing",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/CA.png",
        description: "Showcase your artistic talent in Sketch & Draw! Bring your ideas to life with pencil, pen, or digital tools and create stunning illustrations that capture imagination and innovation. 🖌️✨",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 16,
        title: "FREE FIRE",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/eventImages/esports.png",
        description: "Gear up for the ultimate Free Fire tournament! Survive, strategize, and dominate the battlefield to claim victory. Are you ready to be the last one standing? 🚀🏆",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    }

]

const EventPage = () => {
    return (
        <section className="w-screen min-h-lvh pt-36 lg:px-20">
            <ParticlesComponent id="particles" />
            <h1 className="font-coaster text-[5vw] text-start text-[#00FFC6] px-16 w-full">#Dawn-Of-Innovation</h1>
            <div
                className="w-full h-fit relative  flex flex-col md:flex-row gap-20 md:gap-4 lg:gap-20 p-4 sm:px-60 md:px-4 lg:px-20 ">
                <div className="flex flex-col w-full gap-16">
                    {events.map((event, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <TiltEffect key={index}>
                                        <EventCardUi
                                            key={index}
                                            id={event.id}
                                            title={event.title}
                                            description={event.description}
                                            image={event.image}
                                            date={event.date}
                                            time={event.time}
                                            location={event.location}
                                        />
                                    </TiltEffect>
                                )
                            }
                        }
                    )}
                </div>
                <div className="flex flex-col w-full gap-16">
                    {events.map((event, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <TiltEffect key={index}>
                                        <EventCardUi
                                            key={index}
                                            id={event.id}
                                            title={event.title}
                                            description={event.description}
                                            image={event.image}
                                            date={event.date}
                                            time={event.time}
                                            location={event.location}
                                        />
                                    </TiltEffect>
                                )
                            }
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
export default Transition(EventPage)
