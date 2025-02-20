import {LuCalendarFold} from "react-icons/lu";
import {GoArrowUpRight, GoClock} from "react-icons/go";
import {IoLocationOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import ParticlesComponent from "../components/Particle.tsx";
import Transition from "../utility/Transition.tsx";
import {useCallback, useState} from "react";
import {Model} from "survey-react-ui";
import FormDialog from "../components/FormDialog.tsx";
import {BorderlessLightPanelless} from "survey-core/themes"

const surveyJson = {
    "title": "AHOUBA E-BLITZ",
    "description": "✅ Game: FREEFIRE\r\n✅ Registration Deadline: 25th Feb 2025\r\n✅ Tournament Dates:\r\n\r\nQualifiers: 28th Feb - 1st March\r\nQuarter-Finals: 2nd March - 3rd March\r\nSemi-Finals: 5th March - 6th March\r\nFinals: 8th March\r\n🚀 Key Highlights:\r\n🔥 Open to all: No same-college restriction! Form your dream squad with players from anywhere in India. (Age 16+)\r\n🔥 High-stakes competition with thrilling battles and intense action!\r\n🔥 Live-streamed matches for maximum exposure!\r\n🔥 Exciting prizes & giveaways for top teams and MVPs!\r\n\r\n📢 Registration Instructions:\r\n1️⃣ Fill out this form with accurate details.\r\n2️⃣ Ensure ALL team members have joined the Discord server.\r\n3️⃣ Once registered, await further instructions regarding match schedules and rules.\r\n\r\n⚠️ Failure to follow the instructions may lead to disqualification.\r\n\r\n💥 Get ready for the battleground – Register NOW and let the action begin! 💥\r\nJOIN DISCORD :  https://discord.gg/BGXYkXX93n\r\nJOIN WHATSAPP : https://chat.whatsapp.com/JzcK4xbV7bDATvmD1IcjWm",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "title": "Team Details",
            "description": "\n",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Team Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question4",
                    "title": "Team Leader's Full Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question3",
                    "title": "PLAYER 2 Full Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "PLAYER 3 Full Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question5",
                    "title": "PLAYER 4 Full Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question6",
                    "title": "PLAYER 5(IF ANY) Full Name"
                }
            ]
        },
        {
            "name": "page2",
            "title": "In Game Details",
            "description": "\n",
            "elements": [
                {
                    "type": "text",
                    "name": "question9",
                    "title": "Player 1 (Leader) – In game Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question10",
                    "title": "Player 1 (Leader) - FREEFIRE UID",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question11",
                    "title": "Player 2 – In game Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question12",
                    "title": "Player 2 – FREEFIRE UID",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question13",
                    "title": "Player 3 – In game Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question14",
                    "title": "Player 3 – FREEFIRE UID",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question15",
                    "title": "Player 4 – In game Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question16",
                    "title": "Player 4 – FREEFIRE UID",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question17",
                    "title": "Substitute (if any) – In game Name"
                },
                {
                    "type": "text",
                    "name": "question18",
                    "title": "Substitute (if any) – FREEFIRE UID"
                }
            ]
        },
        {
            "name": "page3",
            "title": "Discord & Contact",
            "description": "JOIN DISCORD :  https://discord.gg/BGXYkXX93n",
            "elements": [
                {
                    "type": "text",
                    "name": "question7",
                    "title": "Team Leader's Contact Number",
                    "isRequired": true,
                    "inputType": "tel"
                },
                {
                    "type": "text",
                    "name": "question8",
                    "title": "TEAM LEADER'S DISCORD ID",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "question19",
                    "title": "Have all your team members joined the Discord server? (Yes/No)",
                    "isRequired": true
                }
            ]
        }
    ]
};

function saveSurveyResults(url:string, json:any) {
    // fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify(json)
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             // Handle success
    //         } else {
    //             // Handle error
    //         }
    //     })
    //     .catch(error => {
    //         // Handle error
    //     });
    alert("Ayush")
}

const EventDetailsPage = () => {

    const [open, setOpen] = useState(false)
    const survey = new Model(surveyJson);
    survey.applyTheme(BorderlessLightPanelless);
    const surveyComplete = useCallback((survey: { setValue: (arg0: string, arg1: string) => void; data: any; }) => {
        const userId = "asdfgfjh"
            survey.setValue("userId", userId);

        saveSurveyResults(
            "https://your-web-service.com/",
            survey.data
        )
    }, []);

    survey.onComplete.add(surveyComplete);

    return (
        <section className=" relative min-h-lvh w-screen overflow-hidden p-20">
            <ParticlesComponent id="particles" />
            <h1 className="customFont text-[10vh] text-[#00FFC6] text-center w-full">Event Details</h1>
            <div className="w-full h-full flex flex-col lg:flex-row gap-8 p-8 items-center rounded-3xl">
                <div className="w-full lg:w-1/2 xl:w-1/3 h-[300px] md:h-1/2 lg:h-full rounded-3xl overflow-hidden">
                    <img className="h-full w-full bg-cover"
                         src="https://plus.unsplash.com/premium_photo-1725408144734-fd60f47ccc72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="image"/>
                </div>
                <div className="w-full lg:w-2/3 h-fit md:p-10 rounded-2xl flex flex-col gap-4 overflow-hidden">
                    <h1 className=" text-[5dvh] text-[#00FFC6] font-coaster">PUBG</h1>
                    <p className=" text-[2dvh] md:text-[2.5dvh] h-fit text-[#00FFC6] font-Roobert overflow-hidden">The Cyber Cleuth
                        Competition
                        invites digital detectives to unravel complex cyber mysteries. Dive into a world of cybercrime,
                        decode encrypted messages, and trace digital footprints to uncover culprits. With challenges
                        ranging from network security to cryptography, it's a thrilling opportunity to showcase your
                        cybersecurity skills and emerge as the ultimate cyber sleuth.</p>
                    <div className=" flex w-full h-fit gap-6 justify-items-start overflow-hidden">
                        <div className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#00FFC6] overflow-hidden">
                            <LuCalendarFold size="15"/>
                            <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">12/11/25</h2>
                        </div><div className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#00FFC6] overflow-hidden">
                        <GoClock size="15"/>
                            <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">11:00 pm</h2>
                        </div>
                        <div className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#00FFC6] overflow-hidden">
                            <IoLocationOutline size="15"/>
                            <h2 className=" text-[1.3dvh] md:text-[2dvh] font-Roobert text-center">Auditorium</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 grid-rows-4 gap-4">
                        <div className="col-span-2"><h1 className="text-[2dvh] md:text-[3dvh] text-[#00FFC6] font-coaster">Cash
                            Prize</h1></div>
                        <div className="col-span-2 col-start-1 row-start-2"><h1 className="text-[2dvh] md:text-[3dvh] text-[#00FFC6] font-coaster">Entry Fee</h1></div>
                        <div className="col-span-2 col-start-1 row-start-3"><h1 className="text-[2dvh] md:text-[3dvh] text-[#00FFC6] font-coaster">Organised By</h1></div>
                        <div className="col-span-2 col-start-1 row-start-4"><h1 className="text-[2dvh] md:text-[3dvh] text-[#00FFC6] font-coaster">Contact</h1></div>
                        <div className="col-start-3 row-start-1"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">:</h1></div>
                        <div className="col-start-3 row-start-2"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">:</h1></div>
                        <div className="col-start-3 row-start-3"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">:</h1></div>
                        <div className="col-start-3 row-start-4"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">:</h1></div>
                        <div className="col-span-4 col-start-4 row-start-1"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">Upto ₹ 5K</h1></div>
                        <div className="col-span-4 col-start-4 row-start-2"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">Free</h1></div>
                        <div className="col-span-4 col-start-4 row-start-3"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">Shashwat</h1></div>
                        <div className="col-span-4 col-start-4 row-start-4"><h1 className=" text-[3dvh] text-[#00FFC6] font-coaster">9708912332</h1></div>
                    </div>


                    <div className="w-full h-fit flex gap-4">
                        <div onClick={() => setOpen((open)=>!open)}
                            className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#00FFC6] border text-3xl after:absolute after:w-full after:h-full after:bg-[#00FFC6] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                            <h1 className=" no-underline relative z-10 text-[#00FFC6] font-Roobert group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                                Register
                            </h1>
                            <GoArrowUpRight className="z-10 stroke-1 stroke-[#00FFC6]"/>
                        </div>
                        <Link to={""}
                            className="group flex gap-4 items-center relative overflow-hidden px-8 py-3 rounded-full w-fit h-fit border-[#00FFC6] border text-3xl after:absolute after:w-full after:h-full after:bg-[#00FFC6] after:left-0 after:-bottom-full after:rounded-full hover:after:bottom-0 hover:after:rounded hover:after:transition-all hover:after:ease-out hover:after:duration-200">
                            <h1 className=" no-underline relative z-10 text-[#00FFC6] font-Roobert group-hover:text-black group-hover:no-underline group-hover:cursor-pointer">
                                Rulebook
                            </h1>
                            <GoArrowUpRight className="z-10 stroke-1 stroke-[#00FFC6]"/>
                        </Link>
                    </div>
                </div>
            </div>
            <FormDialog open={open} setOpen={setOpen} survey={survey}/>
        </section>
    )
}
export default Transition(EventDetailsPage)
