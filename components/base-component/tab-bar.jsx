import { useState } from "react"

export const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className="flex flex-row justify-evenly border-2 border-black my-2 w-[375px] bg-white">
            <button className="flex flex-col text-sm justify-center items-center m-4 hover:cursor-pointer" onClick={() => setActiveTab(1)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill={activeTab === 1 ? '#00C6AE' : '#EEEFF4'} stroke="#474A57" strokeWidth="2" />
                </svg>
                <p className="font-extrabold mt-2">Home</p>
            </button>
            <button className="flex flex-col text-sm justify-center items-center m-4 hover:cursor-pointer" onClick={() => setActiveTab(2)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill={activeTab === 2 ? '#00C6AE' : '#EEEFF4'} stroke="#474A57" strokeWidth="2" />
                </svg>
                <p className="font-extrabold mt-2">Learn</p>
            </button>
            <button className="flex flex-col text-sm justify-center items-center m-4 hover:cursor-pointer" onClick={() => setActiveTab(3)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill={activeTab === 3 ? '#00C6AE' : '#EEEFF4'} stroke="#474A57" strokeWidth="2" />
                </svg>
                <p className="font-extrabold mt-2">Quiz</p>
            </button>
            <button className="flex flex-col text-sm justify-center items-center m-4 hover:cursor-pointer" onClick={() => setActiveTab(4)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill={activeTab === 4 ? '#00C6AE' : '#EEEFF4'} stroke="#474A57" strokeWidth="2" />
                </svg>
                <p className="font-extrabold mt-2">Profile</p>
            </button>
        </div>
    )
}