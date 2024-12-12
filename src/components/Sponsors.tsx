import cubeTen from "../assets/sponsorImages/cubeTen.svg";
import tom from "../assets/sponsorImages/tom.svg";
import a3 from "../assets/sponsorImages/A3.svg";
import tamanna from "../assets/sponsorImages/tamanna.svg";
import likla from "../assets/sponsorImages/likla.svg";
import codeXp from "../assets/sponsorImages/codeXp.svg";
import stpi from "../assets/sponsorImages/stpi.svg";
import icici from "../assets/sponsorImages/icici.svg";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
    const sponsorContainerRef = useRef(null);
    useGSAP(()=>{
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
        <div ref={sponsorContainerRef} className="min-h-lvh w-full flex flex-col relative">
            <div className="h-full w-full flex flex-col lg:flex-row justify-around items-center relative ">
                <div id="spContainer" className=" w-full flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">TITLE SPONSORS</h1>
                    <img src={cubeTen} className="h-[150px] aspect-[1/1]" alt="cubeTen"/>
                </div>
                <div id="spContainer" className="flex flex-col w-full items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">ASSOCIATE SPONSORS</h1>
                    <div className="flex w-full justify-around lg:justify-center items-center">
                        <img src={codeXp} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="codeXp"/>
                        <img src={stpi} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="stpi"/>
                    </div>
                </div>
            </div>
            <div className="h-full w-full flex justify-around items-center relative">
                <div id="spContainer" className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">BANK PARTNERS</h1>
                    <img src={icici} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="icici"/>
                </div>
            </div>
            <div className="h-full w-full flex flex-col lg:flex-row justify-around items-center relative">
                <div id="spContainer" className="flex flex-col w-full items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">FOOD PARTNERS</h1>
                    <div className="flex w-full justify-around lg:justify-center items-center">
                        <img src={a3} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="a3"/>
                        <img src={tamanna} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="tamanna"/>
                        <img src={likla} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="likla"/>
                    </div>
                </div>
                <div id="spContainer" className=" w-full flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl font-coaster text-black items-start">MEDIA PARTNERS</h1>
                    <div className="flex w-full justify-around lg:justify-center items-center">
                        <img src={tom} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="tom"/>
                        <img src={cubeTen} className="h-[100px] md:h-[150px] aspect-[1/1]" alt="cubeTen"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sponsors
