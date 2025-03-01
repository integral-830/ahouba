import {GoArrowUpRight} from "react-icons/go";
import EventCardButton from "./EventCardButton.tsx";

interface EventCardProps {
    src: string;
    title: string;
    description?: string;
}

export const DisplayCardImg = ({src, title, description}: EventCardProps) => {
    return (
        <div className="relative size-full rounded-3xl border-2 border-[#00FFC6] overflow-hidden">
            <div className="absolute z-0 size-full justify-between">
                <img src={src} className="w-full h-full object-cover" alt="img"/>
            </div>
            <div className="relative z-10 flex size-full flex-col justify-between p-5">
                <div className="w-full h-full flex items-start">
                    <h1 className="customFont leading-tight p-10 text-[#00FFC6] text-[5rem] md:text-[8rem]">{title}</h1>
                </div>
                <div className="w-2/3 h-full flex items-end">
                    <p className="p-10 leading-tight  font-Roobert text-white w-full text-2xl md:text-3xl">{description}</p>
                </div>
                <div className="w-full flex justify-end">
                    <EventCardButton title="Explore" icon={<GoArrowUpRight className="z-10 stroke-1 group-hover:stroke-black" color="#00FFC6"/>}
                                     link="/events/"/>
                </div>
            </div>
        </div>
    );
};

export default DisplayCardImg;

