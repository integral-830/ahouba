
const SponsorIcon: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="w-[50px] h-[50px] border-[#00FFC6] border-2 p-4 items-center rounded-full">
            {children}
        </div>
    )
}
export default SponsorIcon
