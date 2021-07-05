import { useState } from "react"

export const SegmentControl = () => {
    const menuArray = ['Menu 1', 'Menu 2', 'Menu 3']
    const [active, setActive] = useState()
    return (
        <div className="w-375px flex flex-row justify-evenly border-2 border-black rounded-full bg-white">
            {menuArray.map((item) => <Menu key={item} onClick={setActive} active={active}>{item}</Menu>)}
        </div>
    )
}

const Menu = (props) => {
    return (
        <button onClick={() => props.onClick(props.children)} className={`w-125px font-bold ${props.children === props.active ? 'bg-green' : 'bg-white'} py-2 px-4 w-full rounded-full`}>{props.children}</button>
    )
}