import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import TiltedCard from "../components/TiltedCard.tsx";
import {useFetchEventDetails} from "../data/axios.ts";
import GradientText from "../components/GradientText.tsx";
import SpotlightCard from "../components/SpotlightCard.tsx";

const Highlights = () => {

    const {data: Response, isLoading, isError} = useFetchEventDetails();
    const imagesData = Response?.swipper

    return (
        <div className="w-screen h-lvh lg:p-40">
            <GradientText
                colors={["#172033", "#fff", "#172033", "#fff", "#172033"]}
                animationSpeed={3}
                showBorder={false}
                className="customFont text-[5rem] md:text-[8rem] leading-tight mix-blend-difference w-full justify-center"
            >
                Highlight's-2k25
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
                            <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                spaceBetween={30}
                                autoplay={{
                                    delay: 5500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper w-full h-full "
                            >
                                {imagesData?.map((image, index) => {
                                        if (index % 2 === 0) {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="w-full h-full flex flex-center">
                                                        <TiltedCard
                                                            className="w-[300px] h-[300px] md:w-[500px] md:h-[350px] lg:w-[60vw] lg:h-[70vh]"
                                                            imageSrc={image.image}
                                                            altText={image.text}
                                                            captionText={image.text}
                                                            rotateAmplitude={8}
                                                            scaleOnHover={1.09}
                                                            showMobileWarning={false}
                                                            showTooltip={true}
                                                            displayOverlayContent={false}
                                                            overlayContent={
                                                                <p className="w-fit h-fit px-6 py-2 bg-[#fff] rounded-full ">
                                                                    {image.text}
                                                                </p>
                                                            }
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }
                                    }
                                )}

                            </Swiper>
                        )
            }
        </div>
    )
}
export default Highlights
