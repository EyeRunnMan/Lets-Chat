import React, { useEffect, useReducer } from "react";
import {
   SIGN_IN_THE_USER,
   SIGN_OUT_THE_USER,
} from "../context/MainContext/Main.actions.types";
import { MainContext } from "../context/MainContext/MainContext";
import { initialState, MainReducer } from "../context/MainContext/MainReducer";
import { auth } from "../third-party/firebase/FirebaseApp";
import LayoutProvider from "./LayoutProvider";

function MainProvider() {
   const [mainState, mainDispatch] = useReducer(MainReducer, initialState);

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (user) {
            mainDispatch({ type: SIGN_IN_THE_USER, payload: user });
         } else {
            // mainDispatch({ type: SIGN_OUT_THE_USER });
         }
      });
   }, []);
   return (
      <MainContext.Provider value={{ mainState, mainDispatch }}>
         <LayoutProvider />
      </MainContext.Provider>
   );
}

export default MainProvider;
