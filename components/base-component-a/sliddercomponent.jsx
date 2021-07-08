export function Slidder(props) {
    const { width, height, color1 = "bg-black", color2 = "bg-black", color3 = "bg-black" } = props;
    return (
      <div>
        <div className="pr-24 justify-items-center">
              <div className="pr-1 inline-block radio">
                <button className={`${width} ${height} border ${color1}  rounded-full`}></button>
              </div>
              <div className="pr-1 inline-block radio">
                <button className={`${width} ${height} border ${color2}  rounded-full`}></button>
              </div>
              <div className="inline-block radio">
                <button className={`${width} ${height} border ${color3} rounded-full`}></button>
              </div>
        </div>
      </div>
    );
  }