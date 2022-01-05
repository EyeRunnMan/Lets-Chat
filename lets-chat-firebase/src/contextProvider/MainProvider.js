import React, { useReducer } from "react";
import { MainContext } from "../context/MainContext/MainContext";
import { initialState, MainReducer } from "../context/MainContext/MainReducer";
import LayoutProvider from "./LayoutProvider";

function MainProvider() {
   const [mainState, mainDispatch] = useReducer(MainReducer, initialState);
   return (
      <MainContext.Provider value={{ mainState, mainDispatch }}>
         <LayoutProvider />
      </MainContext.Provider>
   );
}

export default MainProvider;
