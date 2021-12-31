import { createContext } from "react";

const defaultVal = {
   isNavbarVisible: true,
   isChatSelectionVisible: true,
   isChatWindowVisible: true,
   isAccountSettingsVisible: true,
   deviceWidth: 1,
   breakPointWidth: 1,
   device: "ASDF",
};

export const LayoutContext = createContext(defaultVal);
