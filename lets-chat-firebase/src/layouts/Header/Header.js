import React, { useContext } from "react";

import NavBar from "../../components/Navbar/NavBar";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";

function Header() {
   const { isNavbarVisible } = useContext(LayoutContext);
   return <NavBar isVisible={isNavbarVisible} />;
}

export default Header;
