import useWindowSize from "./useWindowSize";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState, useEffect } from "react";

const WindowSize = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);
  //get custom hook return values
  const size = useWindowSize();
  //https://youtube.com/shorts/vE4yFh_P1Q4?feature=share

  return (
    <>
      <div
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
        }}
      >
        <div>Width : {size.width} px</div>
        <div>Height : {size.height} px</div>
      </div>
    </>
  );
};

export default WindowSize;
