import React from "react";

import "./chat-page-layout.scss";

import ChatSelection from "../../containers/ChatSelection/ChatSelection";
import ChatWindow from "../../containers/ChatWindow/ChatWindow";
import AccountSettings from "../AccountSettings/AccountSettings";

function ChatPageLayout() {
   const [
      isVisibleChatSelection,
      isVisibleChatWindow,
      isVisibleAccountSettings,
   ] = [false, false, true];
   return (
      <div className="chat-page-layout">
         <ChatSelection isVisible={isVisibleChatSelection} />
         <ChatWindow isVisible={isVisibleChatWindow} />
         <AccountSettings isVisible={isVisibleAccountSettings} />
      </div>
   );
}

export default ChatPageLayout;
