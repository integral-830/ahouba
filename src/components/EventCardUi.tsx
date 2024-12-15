import {LuCalendarFold} from "react-icons/lu";
import {IoLocationOutline} from "react-icons/io5";
import {GoArrowUpRight, GoClock} from "react-icons/go";
import Button from "./Button.tsx";
import InfoBadge from "./InfoBadge.tsx";

interface EventCardUiProps {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    location: string;
}

const EventCardUi = (props: EventCardUiProps) => {
    const {title, description, image, date, time, location} = props;
    return (
        <div className="w-full h-fit flex flex-col xl:flex-row gap-8 p-8 bg-[#c4c4ed] rounded-3xl">
            <div className="w-full h-[300px] rounded-2xl overflow-hidden">
                <img className="h-full w-full bg-cover"
                     src={image}
                     alt="image"/>
            </div>
            <div className="w-full h-fit rounded-2xl flex flex-col gap-4 overflow-hidden">
                <h1 className=" text-[5dvh] font-coaster">{title}</h1>
                <div className=" flex w-full h-fit gap-6 justify-items-start overflow-hidden">
                    <InfoBadge icon={<LuCalendarFold/>} text={date} />
                    <InfoBadge icon={<GoClock/>} text={time} />
                    <InfoBadge icon={<IoLocationOutline/>} text={location} />
                </div>
                <p className=" text-[1.3dvh] h-fit font-Roobert overflow-hidden">{description}</p>
                <div className="w-full h-fit flex gap-4">
                    <Button title="Register" icon={<GoArrowUpRight className="z-10 stroke-1"/>}/>
                    <Button title="Explore" icon={<GoArrowUpRight className="z-10 stroke-1"/>}/>
                </div>
            </div>
        </div>
    )
}
export default EventCardUi