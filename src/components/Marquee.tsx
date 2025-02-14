import {useGSAP} from "@gsap/react";
import gsap from "gsap";


interface MarqueeProps {
    text: string;
    speed?: number;
}

const Marquee = ({text, speed}: MarqueeProps) => {
    useGSAP(() => {
        const marquee = document.querySelectorAll('#clipped-text');

        marquee.forEach(el => {
            const rate = speed || 20;
            const totalDistance = el.clientWidth;
            const time = totalDistance / rate;
            const container = el.parentElement;

            gsap.to(container, time, {
                repeat: -1,
                x: '-' + totalDistance,
                ease: "linear",
            });
        });
    }, []);
    return (
        <div className="w-screen h-[20vh] relative  bg-gradient-to-t from-red-300 from-10% via-transparent to-red-400 to-90% overflow-hidden">
            <div className="flex w-full items-center justify-center">
                <h1 id="clipped-text" className="text-[12vh] px-10 uppercase text-black font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
                <h1 className="text-[12vh] px-10 text-[#f95d53] uppercase font-exwaye font-bold">{text}</h1>
            </div>
        </div>
    )
}
export default Marquee
