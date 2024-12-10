import Marquee from "../components/Marquee.tsx";

interface MarqueeProps {
    text: string;
    speed?: number;
}
const MarqueeSection = (props:MarqueeProps) => {
 const {text,speed} = props
    return (
        <section className="marquee">
            <Marquee text={text} speed={speed}/>
        </section>
    );
};


export default MarqueeSection;