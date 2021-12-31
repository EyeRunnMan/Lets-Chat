import { useEffect, useState } from "react";

function useWindowSize() {
   const [windowSize, setWindowSize] = useState([1, 1]);
   useEffect(() => {
      function handleResize() {
         setWindowSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return windowSize;
}

export default useWindowSize;
