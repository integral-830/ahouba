
interface Cardprops {
    title: string;
    description: string;
    image: string;
}
const DisplayCardUi = ({title,description,image}:Cardprops) => {
    return (
        <div id="card" onClick={() => alert("Ayush")} className="relative w-[450px] h-4/5 overflow-hidden hover:scale-105 transition-all ease-in duration-300 rounded-3xl">
            <div className="absolute w-full h-full bg-[#00FFC6] blur(10px) opacity-95">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" width="800" height="800">
                    <g stroke="hsla(0, 0%, 74%, 1.00)" fill="none">
                        <rect width="40" height="1" x="-20" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="-0.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="-20" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="79.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="60" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="159.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="140" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="239.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="220" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="319.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="300" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="399.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="380" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="479.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="460" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="559.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="540" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="639.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="620" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="719.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="700" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="-20" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="-0.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="60" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="79.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="140" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="159.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="220" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="239.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="300" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="319.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="380" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="399.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="460" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="479.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="540" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="559.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="620" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="639.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="700" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="719.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="40" height="1" x="780" y="799.5" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                        <rect width="1" height="40" x="799.5" y="780" stroke="none" fill="hsla(0, 0%, 74%, 1.00)"
                              rx="0.5"></rect>
                    </g>
                </svg>
            </div>
            <div className="card-image absolute w-full h-full z-10 p-6">
                <div className=" w-full h-1/3 overflow-hidden rounded-2xl">
                    <img
                        src={image}
                        alt="image" className="w-full h-full object-cover"/>
                </div>
                <div className="card-content relative w-full h-2/3 flex flex-col">
                    <h1 className="text-[5vh] w-full h-full py-10 flex items-end uppercase font-spac3 leading-tight ">{title}</h1>
                    <div className="w-full h-full">
                        <h2 className="text-[2vh] text-ellipsis font-Trans">{description} </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayCardUi
