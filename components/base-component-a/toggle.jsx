export function ToggleOff(props) {
    const { color = "bg-black", color_img ="black"} = props;
    return (
      <div>
        <button className={`flex w-[81px] h-[36px] border-2 border-black ${color} rounded-full`}>
        </button>
        <div className="bg-white w-[36px] h-[36px] rounded-full border-2 -mt-9">
            
        </div>
        <div className="bg-white w-[12px] h-[12px] rounded-full border-2 -mt-6 ml-3">
            
        </div>
      </div>
    );
  }
  export function ToggleOn(props) {
    const { color = "bg-black", color_img ="black"} = props;
    return (
      <div>
        <button className={`flex w-[81px] h-[36px] border-2 border-black ${color} rounded-full`}>
        </button>
        <div className="bg-white w-[36px] h-[36px] rounded-full border-2 -mt-9 ml-11">
            
        </div>
        <div className="bg-white w-[12px] h-[12px] rounded-full border-2 -mt-6 ml-14">
            
        </div>
      </div>
    );
  }