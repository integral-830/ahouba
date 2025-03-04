import {LuCalendarFold} from "react-icons/lu";
import {GoArrowUpRight, GoClock} from "react-icons/go";
import {IoLocationOutline} from "react-icons/io5";
import {useSearchParams} from "react-router-dom";
import Particles from "../utility/Particles.tsx";
import Transition from "../utility/Transition.tsx";
import {useFetchEventDetails} from "../data/axios.ts";
import EventLoading from "../components/EventLoading.tsx";
import SpotlightCard from "../components/SpotlightCard.tsx";

const EventDetailsPage = () => {

    const [searchParams, _] = useSearchParams();
    const id = searchParams.get('id');
    const {data: Response, isLoading, isError} = useFetchEventDetails();
    const eventDetails = Response?.events.filter((item) => item.id.toString() === id)[0];

    return (
        <section className=" relative min-h-lvh w-screen flex flex-center overflow-hidden p-20">
            <Particles
                particleColors={['#ffffff', '#7000df','#d9b3ff','#5a00b3']}
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            {
                isLoading ? <EventLoading/>
                    : isError ?
                        <SpotlightCard>
                            <div className="w-[80vw] h-lvh flex flex-col flex-center gap-4">
                                <div className="flex gap-8">
                                    <span className="customFont hero-heading -rotate-12">4</span>
                                    <span className="customFont hero-heading">0</span>
                                    <span className="customFont hero-heading rotate-12">4</span>
                                </div>
                                <h1 id="hero-title"
                                    className="customFont uppercase font-zentry text-[#DFDFF2] text-6xl md:text-9xl lg:text-[10rem]">Not
                                    Found</h1>
                            </div>
                        </SpotlightCard>
                        : (
                            <SpotlightCard className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                                <h1 className="customFont text-[10vh] text-[#DFDFF2] text-center w-full">Event Details</h1>
                                <div className="w-full h-full flex flex-col lg:flex-row gap-8 p-8 items-center rounded-3xl">
                                    <div
                                        className="w-full lg:w-1/2 xl:w-1/3 h-[300px] md:h-1/2 lg:h-full rounded-3xl overflow-hidden">
                                        <img className="h-full w-full bg-cover"
                                             src={eventDetails?.image}
                                             alt="image"/>
                                    </div>
                                    <div
                                        className="w-full lg:w-2/3 h-fit md:p-10 rounded-2xl flex flex-col gap-4 overflow-hidden">
                                        <h1 className=" text-[5dvh] text-[#DFDFF2] font-coaster">{eventDetails?.title}</h1>
                                        <p className=" text-[2dvh] md:text-[2.5dvh] h-fit text-[#DFDFF2] font-Roobert overflow-hidden">{eventDetails?.description}</p>
                                        <div className=" flex w-full h-fit gap-6 justify-items-start overflow-hidden">
                                            <div
                                                className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#DFDFF2] overflow-hidden">
                                                <LuCalendarFold size="15"/>
                                                <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">{eventDetails?.date}</h2>
                                            </div>
                                            <div
                                                className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#DFDFF2] overflow-hidden">
                                                <GoClock size="15"/>
                                                <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">{eventDetails?.time}</h2>
                                            </div>
                                            <div
                                                className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#DFDFF2] overflow-hidden">
                                                <IoLocationOutline size="15"/>
                                                <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">{eventDetails?.venue}</h2>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-7 grid-rows-4 gap-4">
                                            <div className="col-span-2"><h1
                                                className="text-[2dvh] md:text-[3dvh] text-[#DFDFF2] font-coaster">Cash
                                                Prize</h1></div>
                                            <div className="col-span-2 col-start-1 row-start-2"><h1
                                                className="text-[2dvh] md:text-[3dvh] text-[#DFDFF2] font-coaster">Entry
                                                Fee</h1></div>
                                            <div className="col-span-2 col-start-1 row-start-3"><h1
                                                className="text-[2dvh] md:text-[3dvh] text-[#DFDFF2] font-coaster">Organised
                                                By</h1></div>
                                            <div className="col-span-2 col-start-1 row-start-4"><h1
                                                className="text-[2dvh] md:text-[3dvh] text-[#DFDFF2] font-coaster">Contact</h1>
                                            </div>
                                            <div className="col-start-3 row-start-1"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">:</h1></div>
                                            <div className="col-start-3 row-start-2"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">:</h1></div>
                                            <div className="col-start-3 row-start-3"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">:</h1></div>
                                            <div className="col-start-3 row-start-4"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">:</h1></div>
                                            <div className="col-span-4 col-start-4 row-start-1"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">{eventDetails?.prize}</h1>
                                            </div>
                                            <div className="col-span-4 col-start-4 row-start-2"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">{eventDetails?.fee}</h1>
                                            </div>
                                            <div className="col-span-4 col-start-4 row-start-3"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">{eventDetails?.organiser}</h1>
                                            </div>
                                            <div className="col-span-4 col-start-4 row-start-4"><h1
                                                className=" text-[3dvh] text-[#DFDFF2] font-coaster">{eventDetails?.contact}</h1>
                                            </div>
                                        </div>
                                        <div className="w-full h-fit flex gap-4">
                                            <a href={eventDetails?.regLink || ""} target="_blank"
                                               className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#DFDFF2] border text-3xl after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                                                <h1 className=" no-underline relative z-10 text-[#DFDFF2] font-Roobert group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                                                    Register
                                                </h1>
                                                <GoArrowUpRight className="z-10 stroke-1 stroke-[#DFDFF2]"/>
                                            </a>
                                            <a href={eventDetails?.ruleBook || ""} target="_blank"
                                               className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#DFDFF2] border text-3xl after:absolute after:w-full after:h-full after:bg-[#DFDFF2] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                                                <h1 className=" no-underline relative z-10 text-[#DFDFF2] font-Roobert group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                                                    Rulebook
                                                </h1>
                                                <GoArrowUpRight className="z-10 stroke-1 stroke-[#DFDFF2]"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        )
            }
        </section>
    )
}
export default Transition(EventDetailsPage)
