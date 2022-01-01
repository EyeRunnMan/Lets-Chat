import React from "react";

import breakpoints from "../stylesheets/partials/_mixins.scss";

import { LayoutContext } from "../context/LayoutContext/LayoutContext";
import useWindowSize from "../hooks/useWindowSize";
import {
   DESKTOP,
   MOBILE,
} from "../components/ChatWindowHeader/ChatWindowHeader";
import AppRouter from "../router/AppRouter";
import { useLocation } from "react-router";

import {
   CHATS_PATH,
   CHAT_WINDOW_PATH,
   SETTINGS_PATH,
} from "../router/Routes.consts";

function LayoutProvider() {
   const [width] = useWindowSize();
   const bpWidth = parseInt(breakpoints.desktop);
   const isDesktop = width > bpWidth;
   const { pathname } = useLocation();
   const defalutContext = {
      isNavbarVisible: pathname !== CHAT_WINDOW_PATH || isDesktop,
      isChatSelectionVisible: pathname === CHATS_PATH || isDesktop,
      isChatWindowVisible: pathname === CHAT_WINDOW_PATH || isDesktop,
      isAccountSettingsVisible: pathname === SETTINGS_PATH || isDesktop,
      deviceWidth: width,
      breakPointWidth: bpWidth,
      device: isDesktop ? DESKTOP : MOBILE,
   };
   return (
      <LayoutContext.Provider value={defalutContext}>
         <AppRouter />
      </LayoutContext.Provider>
   );
}

export default LayoutProvider;
