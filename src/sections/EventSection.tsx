import EventCardUi from "../components/EventCardUi.tsx";
import TiltEffect from "../utility/TiltEffect.tsx";
import ParticlesComponent from "../components/Particle.tsx";

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
        title: "PUBG",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/1.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 1,
        title: "Circuit Debugger",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/3.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 2,
        title: "Cyber Sluth",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/4.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 3,
        title: "Football",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/6.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 4,
        title: "Hackathon",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/8.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 5,
        title: "Line Follower",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/9.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 6,
        title: "Free Fire",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/7.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 7,
        title: "Code Hunt",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/2.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 8,
        title: "Competitive Programing",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/5.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 9,
        title: "Robo Soccer",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/10.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 10,
        title: "Valorant",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/12.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 11,
        title: "Robo Wars",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/11.png",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    },
    {
        id: 12,
        title: "Scrap Tech Expo",
        image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/13.jpg",
        description: "The Cyber Cleuth Competition invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime, decode encrypted messages, and trace digital footprints to uncover culprits. With challenges ranging from network security to cryptography, it's a thrilling opportunity to showcase your cybersecurity skills and emerge as the ultimate cyber sleuth.",
        date: "11/01/24",
        time: "11:00 pm",
        location: "IIIT MANIPUR"
    }

]

const EventSection = () => {
    return (
        <section className="w-screen min-h-lvh pt-36 lg:px-20">
            <ParticlesComponent id="particles" />
            <h1 className="font-coaster text-[5vw] text-start text-[#00FFC6] px-16 w-full">#Dawn-Of-Innovation</h1>
            <div
                className="w-full h-fit relative  flex flex-col md:flex-row gap-20 md:gap-4 lg:gap-20 p-4 sm:px-60 md:px-4 lg:px-20 ">
                <div className="flex flex-col w-full gap-12">
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
                <div className="flex flex-col w-full gap-12">
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
export default EventSection
