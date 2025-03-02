import React from 'react'

const InfoBadge:React.FC<{ icon?: React.ReactNode; text: string }> = ({ icon, text }) => {
    return (
        <div
            className="w-fit h-fit rounded-full flex gap-2 items-center px-4 py-2 bg-[#DFDFF2] overflow-hidden">
            {icon}
            <h2 className=" text-[1.3dvh] font-Roobert text-center">{text}</h2>
        </div>
    )
}
export default InfoBadge
