import React, { useContext } from "react";

import "./chat-page-layout.scss";

import ChatSelection from "../../containers/ChatSelection/ChatSelection";
import ChatWindow from "../../containers/ChatWindow/ChatWindow";
import AccountSettings from "../AccountSettings/AccountSettings";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";
import { MainContext } from "../../context/MainContext/MainContext";
import {
   SET_CHAT_WINDOW,
   UNSET_CHAT_WINDOW,
} from "../../context/MainContext/Main.actions.types";

function ChatPageLayout() {
   const {
      isChatSelectionVisible,
      isChatWindowVisible,
      isAccountSettingsVisible,
      device,
   } = useContext(LayoutContext);
   const { mainState, mainDispatch } = useContext(MainContext);
   const { friends, current_uid, current_chat_name, current_chat_id } =
      mainState;
   console.log(mainState);
   return (
      <div className="chat-page-layout">
         <ChatSelection
            isVisible={isChatSelectionVisible}
            friendList={friends.filter((item) => item.uid !== current_uid)}
            activeChatId={current_chat_id}
            OnBarClick={(name, id) => {
               mainDispatch({
                  type: SET_CHAT_WINDOW,
                  payload: { name: name, id: id },
               });
            }}
         />
         <ChatWindow
            isVisible={isChatWindowVisible}
            deviceMode={device}
            chatUser={current_chat_name}
            OnBackClick={() => {
               mainDispatch({ type: UNSET_CHAT_WINDOW });
            }}
         />
         <AccountSettings isVisible={isAccountSettingsVisible} />
      </div>
   );
}

export default ChatPageLayout;
