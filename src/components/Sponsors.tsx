import babina from "../assets/sponsorImages/babina.png";
import dit from "../assets/sponsorImages/DIT.png";
import handi from "../assets/sponsorImages/Handi.png";
import mphc from "../assets/sponsorImages/MPHC.png";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

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
                <div id="spContainer" className=" w-full flex flex-col p-4 gap-4 items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">TITLE SPONSORS</h1>
                        <img src={dit} className="h-[80px] md:h-[120px] aspect-[1/1]" alt="dit"/>
                </div>
                <div id="spContainer" className="flex flex-col w-full items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">ASSOCIATE SPONSORS</h1>
                    <div className="flex w-full justify-around lg:justify-center gap-8 p-4 items-center">
                    <img src={babina} className="h-[120px] aspect-[1/1]" alt="babina"/>
                    </div>
                </div>
            </div>

            <div className="h-full w-full flex flex-col lg:flex-row justify-around items-center relative m-10">
                <div id="spContainer" className="flex flex-col w-full items-center gap-8">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">FOOD PARTNERS</h1>
                    <div className="flex w-full justify-around lg:justify-center items-center">
                        <img src={handi} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="HANDI"/>
                        {/*<img src={tamanna} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="tamanna"/>*/}
                        {/*<img src={likla} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="likla"/>*/}
                    </div>
                </div>
                <div className="h-full w-full flex justify-around items-center relative">
                    <div id="spContainer" className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">CO-TITLE SPONSORS</h1>
                        <img src={mphc} className="h-[80px] md:h-[120px] aspect-[1/1]" alt="mhpc"/>
                        {/*<img src={icici} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="icici"/>*/}
                    </div>
                </div>
                {/*<div id="spContainer" className=" w-full flex flex-col items-center">*/}
                {/*    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">MEDIA PARTNERS</h1>*/}
                {/*    <div className="flex w-full justify-around lg:justify-center items-center">*/}
                {/*        <img src={tom} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="tom"/>*/}
                {/*        <img src={cubeTen} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="cubeTen"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default Sponsors
