import React, { useContext } from "react";

import "./chat-page-layout.scss";

import ChatSelection from "../../containers/ChatSelection/ChatSelection";
import ChatWindow from "../../containers/ChatWindow/ChatWindow";
import AccountSettings from "../AccountSettings/AccountSettings";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";
import { MainContext } from "../../context/MainContext/MainContext";

function ChatPageLayout() {
   const {
      isChatSelectionVisible,
      isChatWindowVisible,
      isAccountSettingsVisible,
      device,
   } = useContext(LayoutContext);
   const { mainState } = useContext(MainContext);
   const { friends, current_uid } = mainState;
   console.log(mainState);
   return (
      <div className="chat-page-layout">
         <ChatSelection
            isVisible={isChatSelectionVisible}
            friendList={friends.filter((item) => item.uid !== current_uid)}
         />
         <ChatWindow isVisible={isChatWindowVisible} deviceMode={device} />
         <AccountSettings isVisible={isAccountSettingsVisible} />
      </div>
   );
}

export default ChatPageLayout;
