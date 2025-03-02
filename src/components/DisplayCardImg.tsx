import {GoArrowUpRight} from "react-icons/go";
import EventCardButton from "./EventCardButton.tsx";
import GradientText from "./GradientText.tsx";

interface EventCardProps {
    src: string;
    title: string;
    description?: string;
}

export const DisplayCardImg = ({src, title, description}: EventCardProps) => {
    return (
        <div className="relative z-50 size-full rounded-3xl border-2 overflow-hidden [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
            <div className="absolute z-0 size-full justify-between">
                <img src={src} className="w-full h-full object-cover" alt="img"/>
            </div>
            <div className="relative z-10 flex size-full flex-col justify-between p-5">
                <div className="w-full h-full flex items-start">
                    {/*<h1 className="customFont leading-tight p-10 text-[#7F00FE] text-[5rem] md:text-[8rem]">{title}</h1>*/}
                    <GradientText
                        colors={["#fff", "#172033", "#fff", "#172033", "#fff"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="customFont uppercase font-zentry text-6xl md:text-9xl lg:text-[8rem]"
                    >
                        {title}
                    </GradientText>
                </div>
                <div className="w-2/3 h-full flex items-end">
                    <p className="p-10 leading-tight  font-Roobert text-white w-full text-2xl md:text-3xl">{description}</p>
                </div>
                <div className="w-full flex justify-end">
                    <EventCardButton title="Explore" icon={<GoArrowUpRight className="z-10 stroke-1" color="#fff"/>}
                                     link="/events/"/>
                </div>
            </div>
        </div>
    );
};

export default DisplayCardImg;

