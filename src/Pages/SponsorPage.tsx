import SpotlightCard from "../components/SpotlightCard.tsx";
import ParticlesComponent from "../components/Particle.tsx";
import Transition from "../utility/Transition.tsx";

interface Sponsor {
    title: string;
    sponsors: Array<{
        description: string;
        image: string;
    }>;
}

const sponsors: Sponsor[] = [
    {
        title: "TITLE SPONSORS",
        sponsors: [
            {
                description: "CubeTen",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/cubeTen.svg",
            }
        ]
    },
    {
        title: "ASSOCIATE SPONSORS",
        sponsors: [
            {
                description: "CodeXP",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/codeXp.svg",
            },
            {
                description: "STPI",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/stpi.svg",
            }
        ]
    },
    {
        title: "BANK PARTNERS",
        sponsors: [
            {
                description: "ICICI",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/icici.svg",
            }
        ]
    },
    {
        title: "FOOD PARTNERS",
        sponsors: [
            {
                description: "A CUBE",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/A3.svg",
            },
            {
                description: "LIKLA",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/likla.svg",
            }
            ,
            {
                description: "TAMANNA",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/tamanna.svg",
            }
        ]
    },
    {
        title: "MEDIA SPONSORS",
        sponsors: [
            {
                description: "CUBETEN",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/cubeTen.svg",
            },
            {
                description: "TOM",
                image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/tom.svg",
            }
        ]
    },
]

const SponsorPage = () => {

    return (
        <div className="w-full h-fit py-40 flex flex-col items-center gap-4">
            <ParticlesComponent id="particles"/>
            {sponsors.map((sponsor, index) => {
                    return (
                        <div key={index} className="w-full flex flex-col items-center my-10 gap-20">
                            <SpotlightCard>
                                <h1 className="customFont text-[6vh] text-[#00FFc6]">{sponsor.title}</h1>
                            </SpotlightCard>
                            <div className="flex items-center gap-10">
                                {sponsor.sponsors.map((sponsor, index) => {
                                        return (
                                            <div key={index} className="w-full flex flex-col items-center gap-4">
                                                <SpotlightCard>
                                                    <img src={sponsor.image} className="h-[100px] md:h-[150px] aspect-[1/1]"
                                                         alt="stpi"/>
                                                </SpotlightCard>
                                                <h1 className="font-coaster text-5xl text-[#00FFc6]">{sponsor.description}</h1>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}
export default Transition(SponsorPage)
