export const InputBox = () => {
    return (
        <div className="grid pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-sm text-blue">FROM COMPONENT</p>
            <p className="pb-2 font-black text-xs">Input Box</p>
            <div className="pb-2 inline-block">
                <div className="flex border rounded bg-white items-center p-2 w-44 h-5">
                    <svg className="pr-1" width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.945 21C11.835 21 11.7249 21 11.6149 20.887H11.5049C9.08422 19.6441 3.3627 16.1412 1.38217 10.6045C1.05208 9.58757 0.281877 5.40678 2.70252 2.80791C4.1329 1.22599 5.45325 1 6.33349 1C8.42405 1 10.6246 2.24294 11.945 4.05085C13.2653 2.12994 15.2459 1 17.5565 1C18.4367 1 19.7571 1.22599 21.2975 2.80791C23.7181 5.40678 22.9479 9.70056 22.6178 10.6045C20.6373 16.2542 14.8057 19.6441 12.4951 20.887C12.2751 21 12.055 21 11.945 21Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <input className="bg-white w-40 h-3 focus:outline-none text-xs font-normal" type="text" placeholder="Input your love here"/>
                </div>
            </div>
            <div className="pb-2 inline-block">
                <div className="flex border rounded bg-white items-center p-2 w-44 h-5">
                    <input className="pr-1 bg-white w-40 h-3 focus:outline-none text-xs font-normal" type="text" placeholder="Search with love ..."/>
                    <svg width="24" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9999 21L16.6499 16.65" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="pb-2">
                <div className="flex border-t border-b border-l rounded bg-white items-center w-max h-5">
                    <div className="pr-2">
                    <p className="flex-1 pl-1 text-xs">Choose your love</p>
                    </div>
                    <div className="pl-3">
                    <select className="bg-yellow w-5 border-r rounded-r">
                        <option>hello</option>
                        <option>hai</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="pb-2 inline-block">
                <div className="">
                    <button className="border rounded-lg bg-white px-2 py-1">
                        <p className="text-xs">0</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export const RadioButton = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-xs">Radio Button</p>
        </div>
    )
}
export const CheckBox = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-xs">Check Box</p>
        </div>
    )
}
export const ToggleSwitch = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-xs">Toggle Switch</p>
        </div>
    )
}
export const Tags = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-xs">Tags</p>
        </div>
    )
}
export const Sliderdots = () => {
    return (
        <div className="pl-6 pb-4 bg-green-100">
            <p className="pb-4 font-black text-xs">Slider dots</p>
        </div>
    )
}