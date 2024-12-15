import {FaLinkedinIn} from 'react-icons/fa'; // You can use any icon library, here FaPhoneAlt is used for phone icon.

interface ProfileProps {
    name: string;
    image: string;
    position: string,
    contact: string;
}

const ProfileCard = ({name,image,position,contact}:ProfileProps) => {
    return (
        <div className="flex items-center w-fit">
            <div className="relative mr-5">
                <img
                    src={image} // Replace with actual image URL
                    alt="Profile"
                    className="w-[150px] h-[150px] rounded-full object-cover"
                />
                <div onClick={()=>alert("Ayush")} className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md">
                    <FaLinkedinIn className="text-blue-600 text-xl" />
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[3vh] font-coaster text-[#dfdff2] mix-blend-difference font-bold">{name}</h2>
                <p className="text-xl font-Roobert mix-blend-difference">{position}</p>
                <p className="text-xl  mix-blend-difference">{contact}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
