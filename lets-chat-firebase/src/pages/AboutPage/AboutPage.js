import React, { useContext } from "react";
import { UPDATE_SIGN_IN_DETAILS } from "../../context/MainContext/Main.actions.types";
import { MainContext } from "../../context/MainContext/MainContext";
import SignupFirebase from "../../third-party/firebase/functions/SignupFirebase";

function AboutPage() {
   const { mainDispatch } = useContext(MainContext);

   return (
      <>
         <button
            onClick={() => SignupFirebase(mainDispatch, UPDATE_SIGN_IN_DETAILS)}
         >
            Sing up
         </button>
      </>
   );
}

export default AboutPage;
