import {useNavigate} from "react-router";

interface EventCardProps {
    src: string;
    title: string;
    description?: string;
}

export const DisplayCardImg = ({src, title, description}: EventCardProps) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{ navigate("/ahouba/events")} } className="relative size-full rounded-3xl border-2 border-[#00FFC6] overflow-hidden">
            <div className="absolute z-0 size-full justify-between p-5">
                <img src={src} className="w-full h-full object-cover scale-150"/>
            </div>
            <div className="relative z-10 flex size-full flex-col justify-between p-5">
                <div className="w-full h-full flex items-start">
                    <h1 className="customFont leading-tight p-10 text-[#00FFC6] text-[5rem] md:text-[8rem]">{title}</h1>
                </div>
                <div className="w-2/3 h-full flex items-end">
                    <p className="p-10 leading-tight  font-Roobert text-white w-full text-2xl md:text-3xl">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayCardImg;

