export const ButtonGroup = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-lg text-blue">BUTTON GROUP</p>
            <div className="flex pr-4 pb-4">
                <div className="pr-2">
                <div className="flex bg-white py-2 px-2">
                    <div className="pr-2">
                    <button className="border-2 rounded-md px-3 text-base">
                        Button
                    </button>
                    </div>
                    <div>
                    <button className="border-2 rounded-md px-3 text-base text-white bg-black border-black">
                        Button
                    </button>
                    </div>
                </div>
                </div>
                <div className="pr-2">
                <div className="flex bg-white py-2.5 px-2">
                    <button className="border-2 rounded-md px-10 text-base text-white bg-black border-black">
                        Button
                    </button>
                </div>
                </div>
                <div className="pr-2">
                <div className="flex bg-white py-1.5 px-2 items-center">
                    <div className="pr-8">
                    <p className="font-black text-base">
                        $545
                    </p>
                    </div>
                    <div>
                        <button className="flex border-2 rounded-md px-10 text-base text-white bg-black border-black py-1 items-center">
                            Buy now
                            <svg className="pl-1" width="10" height="10" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 14L8 8L2 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
                <div>
                <div className="flex bg-white py-2 px-2 justify-center">
                    <div className="pr-24 justify-items-center">
                        <div className="pr-1 inline-block radio">
                        <input className="hidden" type="radio" value="1" ></input>
                        <button className="w-2 h-2 border border-yellow bg-yellow rounded-full"></button>
                        </div>
                        <div className="pr-1 inline-block radio">
                        <input className="hidden" type="radio" value="2"></input>
                        <button className="w-2 h-2 border bg-white rounded-full"></button>
                        </div>
                        <div className="inline-block radio">
                        <input className="hidden" type="radio" value="3"></input>
                        <button className="w-2 h-2 border bg-white rounded-full"></button>
                        </div>
                    </div>
                    <div>
                        <button className="flex border-2 border-b-4 rounded-full w-6 h-6 shadow-xl bg-yellow items-center">
                        <svg className="pl-1" width="16" height="14" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16683 14H27.8335" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.6668 22.1667L27.8335 14L19.6668 5.83337" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}