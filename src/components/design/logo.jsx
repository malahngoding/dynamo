export const LogoMalahNgoding = (props) => {
    const { size = 1 } = props;
    const handleWidth = (size) => {
        return size * 58
    }
    const handleHeight = (size) => {
        return size * 38
    }
    return (
        <div style={{
            width: handleWidth(size),
            height: handleHeight(size)
        }} className={`flex flex-row items-center justify-center border-[4px] border-black`}>
            <div className="flex flex-1 h-full bg-black-800" />
            <div className="flex flex-[2] border-l-[4px] border-black h-full bg-white" />
        </div>
    )
}