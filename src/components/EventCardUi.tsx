import {LuCalendarFold} from "react-icons/lu";
import {IoLocationOutline} from "react-icons/io5";
import {GoArrowUpRight, GoClock} from "react-icons/go";
import EventCardButton from "./EventCardButton.tsx";
import InfoBadge from "./InfoBadge.tsx";
import SpotlightCard from "./SpotlightCard.tsx";

interface EventCardUiProps {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    venue: string;
}

const EventCardUi = (props: EventCardUiProps) => {
    const {id, title, description, image, date, time, venue} = props;
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div
                className="w-full h-fit flex flex-col xl:flex-row gap-8 p-8 bg-gradient-to-b xl:bg-gradient-to-r from-teal-600 from-5% via-transparent to-transparentto-90% rounded-3xl">
                <div className="w-full h-[300px] rounded-2xl overflow-hidden">
                    <img className="h-full w-full bg-cover"
                         src={image}
                         alt="image"/>
                </div>
                <div className="w-full h-fit rounded-2xl flex flex-col gap-4 overflow-hidden">
                    <h1 className=" text-[4dvh] font-coaster text-[#00FFC6]">{title}</h1>
                    <div className=" flex w-full h-fit gap-6 justify-items-start overflow-hidden">
                        <InfoBadge icon={<LuCalendarFold size="15"/>} text={date}/>
                        <InfoBadge icon={<GoClock size="15"/>} text={time}/>
                        <InfoBadge icon={<IoLocationOutline size="15"/>} text={venue}/>
                    </div>
                    <p className=" text-[1.4dvh] h-fit font-Roobert text-[#fee8e6] overflow-hidden">{description}</p>
                    <div className="w-full h-fit flex gap-4">
                        <EventCardButton title="Explore"
                                         icon={<GoArrowUpRight className="z-10 stroke-1 group-hover:stroke-black"
                                                               color="#00FFC6"/>} link={`/events/${title}?id=${encodeURIComponent(id)}`}/>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    )
}
export default EventCardUi
