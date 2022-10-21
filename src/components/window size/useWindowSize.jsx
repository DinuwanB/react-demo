import { useState, useEffect } from "react";

// custom hook
export default function useWindowSize() {
  //initialize state
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //window size handle function
    function handleWindowSizeFunc() {
      //set window size to state
      setWindowSize({
        width: window.innerHeight,
        height: window.innerHeight,
      });
    }

    //event listner
    window.addEventListener("resize", handleWindowSizeFunc);

    //call handlewindowfunc function
    handleWindowSizeFunc();

    //remove event listner using cleanup
    return () => {
      window.removeEventListener("resize", handleWindowSizeFunc);
    };
  }, []);

  //return state
  return windowSize;
}
