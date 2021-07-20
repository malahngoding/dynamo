export const DialogModal = () => {
    return (
        <div className="flex flex-col bg-black-200">
            <div>
                <p className="mx-6 mt-5 mb-10 text-blue font-sans text-4xl font-bold tracking-wider">
                    D I A L O G / M O D A L</p>
            </div>

            <div className="flex flex-col border-2 border-black w-[375px] h-[308px] bg-white m-5 rounded-t-2xl">
                <div className="flex flex-row border-b-2 border-black">
                    <div className="flex flex-1 font-sans font-extrabold text-xl mr-12 my-4 ml-6 h-[28px] w-[302px]">Box Title</div>
                    <svg className="mr-6 mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col border-2 border-black w-[375px] h-[468px] bg-white m-5 rounded-t-2xl">
                <div className="flex flex-row border-b-2 border-black">
                    <div className="flex flex-1 font-sans font-extrabold text-xl mr-12 my-4 ml-6 h-[28px] w-[302px]">Box Title</div>
                    <svg className="mr-6 mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row mt-9 ml-6">
                        <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="8" fill="#FFBD12" />
                                <path d="M23.1109 10.6666L13.3331 20.4444L8.88867 16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="text-base font-extrabold ml-4 mt-1">Option to choose</div>
                    </div>
                    <div className="flex flex-row mt-9 ml-6">
                        <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="30" height="30" rx="7" fill="#E9E7FC" stroke="#18191F" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="text-base font-extrabold ml-4 mt-1">Option to choose</div>
                    </div>
                    <div className="flex flex-row mt-9 ml-6">
                        <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="30" height="30" rx="7" fill="#E9E7FC" stroke="#18191F" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="text-base font-extrabold ml-4 mt-1">Option to choose</div>
                    </div>
                    <div className="flex flex-row mt-9 ml-6">
                        <div>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="30" height="30" rx="7" fill="#E9E7FC" stroke="#18191F" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="text-base font-extrabold ml-4 mt-1">Option to choose</div>
                    </div>
                    <button className="mt-9 mx-6 w-[327px] h-[60px] rounded-2xl bg-black text-white font-sans text-xl font-extrabold">
                        Confirm here</button>
                </div>
            </div>

            <div className="flex flex-col border-2 border-black w-[279px] h-[156px] bg-yellow-100 m-5 rounded-2xl">
                <div className="flex flex-col ml-6 mt-6">
                    <div className="font-extrabold text-base">Dialog Title</div>
                    <div className="font-normal text-sm mt-1">Yeah, you always have some extra</div>
                    <div className="font-normal text-sm">details text.</div>
                    <div className="flex flex-row mt-3">
                        <button className="w-[109px] h-[36px] rounded-xl bg-white text-black font-extrabold border-2 border-black text-xs">Cancel</button>
                        <button className="ml-3 w-[109px] h-[36px] rounded-xl bg-black text-white font-extrabold border-2 border-black text-xs">Okay</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col border-2 border-black w-[279px] h-[156px] bg-yellow-100 m-5 rounded-2xl">
                <div className="flex flex-col ml-6 mt-6">
                    <div className="font-extrabold text-base">Dialog Title</div>
                    <div className="font-normal text-sm mt-1">Yeah, you always have some extra</div>
                    <div className="flex flex-row">
                        <div className="font-normal text-sm">details text.</div>
                        <div className="font-normal text-sm">Write it here</div>
                    </div>
                    <div className="flex flex-row mt-3">
                        <button className="w-[231px] h-[36px] rounded-xl bg-black text-white font-extrabold border-2 border-black text-xs">Okay</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center border-2 border-black w-[327px] h-[74px] bg-black m-5 rounded-2xl">
                <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#F95A2C" />
                        <path d="M28 15L17 26L12 21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="text-base font-extrabold text-white ml-4">Given task completed</div>
            </div>
        </div>
    )

}