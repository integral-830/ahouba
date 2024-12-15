import {FaLinkedinIn} from 'react-icons/fa';
import TiltEffect from "../utility/TiltEffect.tsx"; // You can use any icon library, here FaPhoneAlt is used for phone icon.

interface ProfileProps {
    name: string;
    image: string;
    position: string,
    contact: string;
}

const ProfileCard = ({name, image, position, contact}: ProfileProps) => {
    return (
        <TiltEffect>
            <div className="flex items-center w-fit">
                <div className="relative mr-5">
                    <img
                        src={image} // Replace with actual image URL
                        alt="Profile"
                        className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full object-cover"
                    />
                    <div onClick={() => alert("Ayush")}
                         className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md">
                        <FaLinkedinIn className="text-blue-600 text-xl"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[3vh] font-coaster text-black mix-blend-difference font-bold">{name}</h2>
                    <p className="text-[1.5vh] font-Roobert mix-blend-difference">{position}</p>
                    <p className="text-[1.5vh]  mix-blend-difference">{contact}</p>
                </div>
            </div>
        </TiltEffect>
    );
};

export default ProfileCard;
