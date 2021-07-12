import { useState } from "react"

export function CheckBoxBorder(props) {
    const [color1, setColor1] = useState("bg-black-200")
    const [color2, setColor2] = useState("bg-black-200 border-black-200")
    const handleClick = () => {
        if (color1 === "bg-black-200" && color2 === "bg-black-200 border-black-200") {
            setColor1("bg-yellow")
            setColor2("black")
        } else {
            setColor1("bg-black-200")
            setColor2("bg-black-200 border-black-200")
        }
    }
    const { width1, width2, height1, height2} = props;
    return (
      <div>
        <div className="pr-24">
              <div className="flex justify-items-center" onClick={handleClick}>
                <div className="flex -mr-7 items-center">
                <button className={`${width1} ${height1} border ${color1} rounded-lg `}></button>
                </div>
                <div className="flex items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 5.75L8.375 15.375L4 11" stroke={color2} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
              </div>
        </div>
      </div>
    );
  }
export function CheckBox(props) {
    const [color1, setColor1] = useState("bg-black-100")
    const [color2, setColor2] = useState("black-100")
    const handleClick = () => {
        if (color1 === "bg-black-100" && color2 === "black-100") {
            setColor1("bg-yellow")
            setColor2("white")
        } else {
            setColor1("bg-black-100")
            setColor2("black-100")
        }
    }
    const { width1, width2, height1, height2} = props;
    return (
      <div>
        <div className="pr-24">
              <div className="flex justify-items-center" onClick={handleClick}>
                <div className="flex -mr-7 items-center">
                <button className={`${width1} ${height1} ${color1} rounded-lg`}></button>
                </div>
                <div className="flex items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 5.75L8.375 15.375L4 11" stroke={color2} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </div>
              </div>
        </div>
      </div>
    );
  }