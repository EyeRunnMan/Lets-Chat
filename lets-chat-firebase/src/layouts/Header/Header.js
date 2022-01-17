import React, { useContext } from "react";

import NavBar from "../../components/Navbar/NavBar";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";
import { MainContext } from "../../context/MainContext/MainContext";
import { SIGN_IN } from "../../context/MainContext/Main.actions.types";
function Header() {
   const { isNavbarVisible } = useContext(LayoutContext);
   const { mainState, mainDispatch } = useContext(MainContext);
   return (
      <NavBar
         isVisible={isNavbarVisible}
         isSignedIn={mainState.isAuthed}
         OnSignin={() => mainDispatch({ type: SIGN_IN })}
      />
   );
}

export default Header;
