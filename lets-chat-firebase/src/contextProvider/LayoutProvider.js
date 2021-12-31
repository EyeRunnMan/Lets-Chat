import React from "react";

import breakpoints from "../stylesheets/partials/_mixins.scss";

import { LayoutContext } from "../context/LayoutContext/LayoutContext";
import useWindowSize from "../hooks/useWindowSize";
import ChatPage from "../pages/ChatPage/ChatPage";
import {
   DESKTOP,
   MOBILE,
} from "../components/ChatWindowHeader/ChatWindowHeader";

export const SELECT_CHAT = "SelectChat";
export const CHAT_WINDOW = "ChatWindow";
export const ACCOUNT_SETTINGS = "AccountSettings";

function LayoutProvider({ mode = SELECT_CHAT }) {
   const [width] = useWindowSize();
   const bpWidth = parseInt(breakpoints.desktop);
   const isDesktop = width > bpWidth;
   const defalutContext = {
      isNavbarVisible: mode !== CHAT_WINDOW || isDesktop,
      isChatSelectionVisible: mode === SELECT_CHAT || isDesktop,
      isChatWindowVisible: mode === CHAT_WINDOW || isDesktop,
      isAccountSettingsVisible: mode === ACCOUNT_SETTINGS || isDesktop,
      deviceWidth: width,
      breakPointWidth: bpWidth,
      device: isDesktop ? DESKTOP : MOBILE,
   };
   console.log(mode !== CHAT_WINDOW);
   return (
      <LayoutContext.Provider value={defalutContext}>
         <ChatPage />
      </LayoutContext.Provider>
   );
}

export default LayoutProvider;
