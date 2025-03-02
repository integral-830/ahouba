import {FaLinkedinIn} from 'react-icons/fa';
import TiltEffect from "../utility/TiltEffect.tsx"; // You can use any icon library, here FaPhoneAlt is used for phone icon.

interface ProfileProps {
    name: string;
    image: string;
    position: string,
    contact: number;
    link: string;
}

const ProfileCard = ({name, image, position, contact, link}: ProfileProps) => {
    return (
        <TiltEffect>
            <div className="flex items-center w-fit">
                <div className="relative mr-5">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full object-cover border-[#DFDFF2] border-2 p-1 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border-transparent animate-border"
                    />
                    <a href={link} target="_blank" className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md">
                        <FaLinkedinIn className="text-blue-600 text-xl"/>
                    </a>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[3vh] font-coaster text-[#DFDFF2] mix-blend-difference font-bold">{name}</h2>
                    <p className="text-[1.5vh] text-[#DFDFF2] font-Roobert mix-blend-difference">{position}</p>
                    <p className="text-[1.5vh] text-[#DFDFF2] mix-blend-difference">{contact}</p>
                </div>
            </div>
        </TiltEffect>
    );
};

export default ProfileCard;
