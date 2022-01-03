import React, { useContext } from "react";

import "./chat-page-layout.scss";

import ChatSelection from "../../containers/ChatSelection/ChatSelection";
import ChatWindow from "../../containers/ChatWindow/ChatWindow";
import AccountSettings from "../AccountSettings/AccountSettings";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";

function ChatPageLayout() {
   const {
      isChatSelectionVisible,
      isChatWindowVisible,
      isAccountSettingsVisible,
      device,
   } = useContext(LayoutContext);
   return (
      <div className="chat-page-layout">
         <ChatSelection isVisible={isChatSelectionVisible} />
         <ChatWindow isVisible={isChatWindowVisible} deviceMode={device} />
         <AccountSettings isVisible={isAccountSettingsVisible} />
      </div>
   );
}

export default ChatPageLayout;
