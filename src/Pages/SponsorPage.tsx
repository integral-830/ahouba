import SpotlightCard from "../components/SpotlightCard.tsx";
import Particles from "../utility/Particles.tsx";
import Transition from "../utility/Transition.tsx";
import GradientText from "../components/GradientText.tsx";
import babina from "../assets/sponsorImages/babina.png";
import dit from "../assets/sponsorImages/DIT.png";
import handi from "../assets/sponsorImages/Handi.png";
import mphc from "../assets/sponsorImages/MPHC.png";

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
                description: "DIT",
                image: dit,
            }
        ]
    },{
        title: "CO-TITLE SPONSORS",
        sponsors: [
            {
                description: "MPHC",
                image: mphc,
            }
        ]
    },
    {
        title: "ASSOCIATE SPONSORS",
        sponsors: [
            {
                description: "BABINA",
                image: babina,
            },
            // {
            //     description: "DIT",
            //     image: dit,
            // },
            // {
            //     description: "MPHC",
            //     image: mphc,
            // }
        ]
    },
    // {
    //     title: "BANK PARTNERS",
    //     sponsors: [
    //         {
    //             description: "ICICI",
    //             image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/icici.svg",
    //         }
    //     ]
    // },
    {
        title: "FOOD PARTNERS",
        sponsors: [
            {
                description: "HANDI",
                image: handi,
            },
            // {
            //     description: "LIKLA",
            //     image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/likla.svg",
            // }
            // ,
            // {
            //     description: "TAMANNA",
            //     image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/tamanna.svg",
            // }
        ]
    },
    // {
    //     title: "MEDIA SPONSORS",
    //     sponsors: [
    //         {
    //             description: "CUBETEN",
    //             image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/cubeTen.svg",
    //         },
    //         {
    //             description: "TOM",
    //             image: "https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/tom.svg",
    //         }
    //     ]
    // },
]

const SponsorPage = () => {

    return (
        <div className="w-full h-fit py-40 flex flex-col items-center gap-4">
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
            {sponsors.map((sponsor, index) => {
                    return (
                        <div key={index} className="w-full flex flex-col items-center my-10 gap-20">
                            <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                                {/*<h1 className="customFont text-[6vh] text-[#00FFc6]">{sponsor.title}</h1>*/}
                                <GradientText
                                    colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                                    animationSpeed={3}
                                    showBorder={false}
                                    className="customFont text-[6vh]"
                                >
                                    {sponsor.title}
                                </GradientText>
                            </SpotlightCard>
                            <div className="flex items-center gap-10">
                                {sponsor.sponsors.map((sponsor, index) => {
                                        return (
                                            <div key={index} className="w-full flex flex-col items-center gap-4">
                                                <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                                                    <img src={sponsor.image} className="h-[100px] md:h-[150px] aspect-[1/1]"
                                                         alt="stpi"/>
                                                </SpotlightCard>
                                                <h1 className="font-coaster text-5xl text-white">{sponsor.description}</h1>
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
