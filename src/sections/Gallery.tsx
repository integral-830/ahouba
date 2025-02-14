import CircularGallery from "../components/CircularGallery.tsx";

const Gallery = () => {

    return (
        <section className=" relative h-lvh w-screen overflow-hidden flex flex-col items-center my-40">
            <h1 className="customFont text-[5rem] md:text-[10rem] leading-tight mix-blend-difference text-[#00FFC6] w-fit">Into The Past !</h1>
            <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
        </section>
    )
}
export default Gallery
