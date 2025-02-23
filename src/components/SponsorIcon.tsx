
const SponsorIcon: React.FC<{ children: React.ReactNode, url: string }> = ({children, url}) => {
    return (
        <a href={url} target="_blank" className="w-[50px] h-[50px] border-[#00FFC6] border-2 p-4 items-center rounded-full m-5">
            {children}
        </a>
    )
}
export default SponsorIcon
