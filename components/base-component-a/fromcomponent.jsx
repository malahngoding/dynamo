export const InputBox = () => {
  return (
    <div className="grid pl-6 pb-4 bg-green-100">
      <p className="pb-4 font-black text-lg text-blue">FROM COMPONENT</p>
      <p className="pb-2 font-black text-base">Input Box</p>
      <div className="pb-2 inline-block">
        <div className="flex border rounded-xl bg-white items-center p-3 w-[327px] h-[48px]">
          <svg
            className="pr-1"
            width="22"
            height="18"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.945 21C11.835 21 11.7249 21 11.6149 20.887H11.5049C9.08422 19.6441 3.3627 16.1412 1.38217 10.6045C1.05208 9.58757 0.281877 5.40678 2.70252 2.80791C4.1329 1.22599 5.45325 1 6.33349 1C8.42405 1 10.6246 2.24294 11.945 4.05085C13.2653 2.12994 15.2459 1 17.5565 1C18.4367 1 19.7571 1.22599 21.2975 2.80791C23.7181 5.40678 22.9479 9.70056 22.6178 10.6045C20.6373 16.2542 14.8057 19.6441 12.4951 20.887C12.2751 21 12.055 21 11.945 21Z"
              stroke="#18191F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            className="bg-white border-r-0 border-l-0 w-[302px] h-[48px] focus:outline-none text-base font-normal placeholder-black"
            type="text"
            placeholder="Input your love here"
          />
        </div>
      </div>
      <div className="pb-2 inline-block">
        <div className="flex border rounded-xl bg-white items-center p-3 w-[327px] h-[48px] ">
          <input
            className="pr-1 bg-white border-r-0 border-l-0 w-[302px] h-[48px] focus:outline-none text-base font-normal placeholder-black"
            type="text"
            placeholder="Search with love ..."
          />
          <svg
            width="20"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#18191F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 21L16.6499 16.65"
              stroke="#18191F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="pb-2">
        <div className="flex border-t border-b border-l rounded-xl bg-white items-center p-3 w-[327px] h-[48px]">
          <div className="pr-2">
            <p className="pl-1 text-base w-[251px]">Choose your love</p>
          </div>
          <div className="">
            <select className="bg-yellow w-[48px] h-[48px] border-t border-b border-r rounded-r-xl">
              <option>hello</option>
              <option>hai</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pb-2 inline-block">
        <div className="">
          <button className="border rounded-xl bg-white w-[60px] h-[60px]">
            <p className="text-2xl font-black">0</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export const RadioButton = () => {
  return (
    <div className="pl-6 pb-4 bg-green-100">
      <div>
        <p className="pb-2 font-black text-base">Radio Button</p>
      </div>
      <div className="flex">
        <div className="pr-2">
          <input
            type="radio"
            className="form-radio text-red bg-black-200"
          ></input>
        </div>
        <div className="pr-2">
          <input
            className="bg-blue-100 border-8 border-black"
            type="radio"
          ></input>
        </div>
        <div className="pr-2">
          <input
            className="form-radio text-yellow bg-black-200"
            type="radio"
            checked
          ></input>
        </div>
        <div className="pr-2">
          <input
            className="form-checkbox text-yellow rounded-full border-4 border-red"
            type="checkbox"
            checked
          ></input>
        </div>
      </div>
    </div>
  );
};
export const CheckBox = () => {
  return (
    <div className="pl-6 pb-4 bg-green-100">
      <div>
        <p className="pb-4 font-black text-base">Check Box</p>
      </div>
      <div>
        <input
          className="form-checkbox bg-black-200 text-yellow"
          type="checkbox"
        ></input>
      </div>
      <div>
        <input
          className="form-checkbox bg-blue-100 text-yellow border-8 border-black"
          type="checkbox"
        ></input>
      </div>
      <div>
        <input
          className="form-checkbox text-yellow border-8 border-black"
          type="checkbox"
          checked
        ></input>
      </div>
      <div>
        <input
          className="form-checkbox text-yellow  border-4 border-red"
          type="checkbox"
          checked
        ></input>
      </div>
    </div>
  );
};
export const ToggleSwitch = () => {
  return (
    <div className="pl-6 pb-4 bg-green-100">
      <div>
        <p className="pb-4 font-black text-base">Toggle Switch</p>
      </div>
      <div>
        <label
          htmlFor="unchecked"
          className="mt-3 inline-flex items-center cursor-pointer"
        >
          <span className="relative">
            <span className="border-4 border-black block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
            <span className=" border-4 border-black absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out">
              <input
                id="unchecked"
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
              />
            </span>
          </span>
        </label>
      </div>
      <div>
        <label
          htmlFor="checked"
          className="mt-3 inline-flex items-center cursor-pointer"
        >
          <span className="relative">
            <span className="border-4 border-black block w-10 h-6 bg-gray-400 rounded-full shadow-inner bg-yellow"></span>
            <span className="border-4 border-black absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full">
              <input
                id="checked"
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
              />
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};
export const Tags = () => {
  return (
    <div className="pl-6 pb-4 bg-green-100">
      <div>
        <p className="pb-4 font-black text-base">Tags</p>
      </div>
      <div className="pb-4">
        <div className="flex border-2 w-20 justify-center rounded-full p-1">
          <p className="text-sm text-black font-black">Tag name</p>
        </div>
      </div>
      <div className="pb-4">
        <div className="flex border-2 w-28 justify-center rounded-full p-1 bg-pink-800">
          <p className="text-sm text-black font-black pr-2">Active Tag</p>
          <svg
            className="pt-1 justify-items-center"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 4L12 12"
              stroke="#18191F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex w-10 h-6 justify-center rounded-full bg-red">
          <p className="text-sm text-white font-bold">99+</p>
        </div>
      </div>
    </div>
  );
};
export const Sliderdots = () => {
  return (
    <div className="pl-6 pb-4 bg-green-100">
      <div>
        <p className="pb-4 font-black text-base">Slider dots</p>
      </div>
      <div className="flex pb-4">
        <div className="pr-2">
          <div className="rounded-full w-2 h-2 bg-red"></div>
        </div>
        <div className="pr-2">
          <div className="rounded-full w-2 h-2 bg-white border-2"></div>
        </div>
        <div>
          <div className="rounded-full w-2 h-2 bg-white border-2"></div>
        </div>
      </div>
      <div className="flex">
        <div className="pr-2">
          <div className="rounded-full w-3 h-3 bg-red"></div>
        </div>
        <div className="pr-2">
          <div className="rounded-full w-3 h-3 bg-white border-2"></div>
        </div>
        <div>
          <div className="rounded-full w-3 h-3 bg-white border-2"></div>
        </div>
      </div>
    </div>
  );
};
