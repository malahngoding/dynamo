export const PrimaryButton = (props) => {
    const { background = "bg-white" } = props
    return (
        <button className={`flex border-2 border-b-4 border-black rounded-lg py-1 px-4 ${background}`}>
            <p className={`text-base font-bold ${background === "bg-white" ? "text-black" : "text-white"}`}>{props.children}</p>
        </button>
    )
}

export const SecondaryButton = (props) => {
    const { background = "bg-white" } = props
    return (
        <button className={`flex border-2 border-black rounded-lg py-1 px-4 ${background}`}>
            <p className={`text-base font-bold ${background === "bg-white" ? "text-black" : "text-white"}`}>{props.children}</p>
        </button>
    )
}

export const SmallPrimaryButton = (props) => {
    const { background = "bg-white" } = props
    return (
        <button className={`flex border-2 border-black border-b-4 rounded-lg py-1 px-2 ${background}`}>
            <p className={`text-xs font-bold ${background === "bg-white" ? "text-black" : "text-white"}`}>{props.children}</p>
        </button>
    )
}

export const SecondarySmallButton = (props) => {
    const { background = "bg-white" } = props
    return (
        <button className={`flex border-2 border-black rounded-lg py-1 px-2 ${background}`}>
            <p className={`text-xs font-bold ${background === "bg-white" ? "text-black" : "text-white"}`}>{props.children}</p>
        </button>
    )
}
