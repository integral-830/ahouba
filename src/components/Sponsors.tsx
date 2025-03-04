import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SpotlightCard from "./SpotlightCard.tsx";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
    const sponsorContainerRef = useRef(null);
    useGSAP(() => {
        gsap.from("#spContainer", {
            scale: 0.75,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: sponsorContainerRef.current,
                start: "top center",
                end: "bottom bottom",
                scrub: 2,
            }
        })
    })
    return (
        <div ref={sponsorContainerRef} className=" w-full flex flex-col relative">
            <div className=" w-full pb-24 flex flex-col lg:flex-row justify-around items-center relative ">
            </div>
            <div id="spContainer" className=" w-full flex flex-col p-4 gap-4 items-center">
                <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">TITLE SPONSORS</h1>
                <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                <img src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sponsors/DepIT.svg"
                     className="h-[80px] md:h-[120px] aspect-[1/1]" alt="dit"/>
                </SpotlightCard>
            </div>
            <div className="h-full w-full flex flex-col lg:flex-row justify-around items-center relative m-10">
                <div className="h-full w-full flex justify-around items-center relative">
                    <div id="spContainer" className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">CO-TITLE SPONSORS</h1>
                        <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                        <img src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sponsors/mphc.svg"
                             className="h-[80px] md:h-[120px] aspect-[1/1]" alt="mhpc"/>
                        </SpotlightCard>
                    </div>
                </div>
                <div id="spContainer" className="flex flex-col w-full items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">ASSOCIATE SPONSORS</h1>
                    <div className="flex w-full justify-around lg:justify-center gap-8 p-4 items-center">
                        <SpotlightCard
                            className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                            <img src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sponsors/babina.svg"
                                 className="h-[120px] aspect-[1/1]" alt="babina"/>

                        </SpotlightCard>
                        <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                        <img src="https://pub-c94b02dd33c14b448990be89eff7f07f.r2.dev/sponsors/canara.svg" className="h-[80px] md:h-[120px] aspect-[1/1]" alt="canara"/>

                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sponsors
