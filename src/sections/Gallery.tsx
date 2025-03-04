import CircularGallery from "../components/CircularGallery.tsx";
import GradientText from "../components/GradientText.tsx";
import {useFetchEventDetails} from "../data/axios.ts";
import SpotlightCard from "../components/SpotlightCard.tsx";

const Gallery = () => {

    const {data: Response, isLoading, isError} = useFetchEventDetails();
    const images = Response?.gallery
    return (
        <section className=" relative h-lvh w-screen overflow-hidden flex flex-col items-center justify-center my-40">
            <GradientText
                colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                animationSpeed={3}
                showBorder={false}
                className="customFont text-[5rem] md:text-[12rem] leading-tight mix-blend-difference w-full justify-center"
            >
                Into The Past !
            </GradientText>
            {
                isLoading ?
                    <div className="w-full h-full flex flex-center">
                        <div role="status"
                             className="flex animate-pulse items-center justify-center w-full lg:w-1/2 xl:w-1/3 h-[300px] md:h-1/3 rounded-3xl bg-gray-300 dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                            </svg>
                        </div>
                    </div>
                    : isError ?
                        <SpotlightCard
                            className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border">
                            <div className="w-full h-[50vh] flex flex-col flex-center gap-4">
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
                            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} items={images}/>
                        )
            }
        </section>
    )
}
export default Gallery
