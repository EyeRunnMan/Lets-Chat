import { useEffect, useState } from "react";

//This is a react hook used to get the updated screen size whenever there is a screen size update as in the window size
function useWindowSize() {
   const [windowSize, setWindowSize] = useState([1, 1]);
   useEffect(() => {
      function handleResize() {
         setWindowSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
      return window.removeEventListener("resize", handleResize);    
      };
   }, []);

   return windowSize;
}

export default useWindowSize;
