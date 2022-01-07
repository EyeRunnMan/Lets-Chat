import React, { useContext } from "react";
import { SIGN_IN } from "../../context/MainContext/Main.actions.types";
import { MainContext } from "../../context/MainContext/MainContext";

function AboutPage() {
   const { mainDispatch } = useContext(MainContext);

   return (
      <>
         <button onClick={() => mainDispatch({ type: SIGN_IN })}>
            Sign up
         </button>
      </>
   );
}

export default AboutPage;
