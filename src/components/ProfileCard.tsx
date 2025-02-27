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
                        className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full object-cover border-[#00FFC6] border-2 p-1"
                    />
                    <a href={link} target="_blank" className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md">
                        <FaLinkedinIn className="text-blue-600 text-xl"/>
                    </a>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[3vh] font-coaster text-[#00FFC6] mix-blend-difference font-bold">{name}</h2>
                    <p className="text-[1.5vh] text-[#00FFC6] font-Roobert mix-blend-difference">{position}</p>
                    <p className="text-[1.5vh] text-[#00FFC6] mix-blend-difference">{contact}</p>
                </div>
            </div>
        </TiltEffect>
    );
};

export default ProfileCard;
