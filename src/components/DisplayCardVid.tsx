import EventCardButton from "./EventCardButton.tsx";
import {GoArrowUpRight} from "react-icons/go";

interface EventCardProps {
    src: string;
    title: string;
    description?: string;
}

export const DisplayCardVid = ({src, title, description}: EventCardProps) => {
    return (
        <div className="relative size-full rounded-3xl border-2 border-[#00FFC6] overflow-hidden">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5">
                <div className="w-full h-full flex items-start">
                    <h1 className="customFont leading-tight p-10 text-[#00FFC6] text-[5rem] md:text-[8rem]">{title}</h1>
                </div>
                <div className="w-2/3 h-full flex items-end">
                    <p className="p-10 leading-tight  font-Roobert text-white w-full text-2xl md:text-3xl">{description}</p>
                </div>
                <div className="w-full flex justify-end">
                    <EventCardButton title="Explore" icon={<GoArrowUpRight className="z-10 stroke-1 group-hover:stroke-black" color="#00FFC6"/>}
                                     link={`/ahouba/events/${title}`}/>
                </div>
            </div>
        </div>
    );
};

export default DisplayCardVid;

