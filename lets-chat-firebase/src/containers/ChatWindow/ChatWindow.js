import React, { useContext } from "react";

import "./chat-window.scss";

import ChatWindowHeader from "../../components/ChatWindowHeader/ChatWindowHeader";
import ChatingArea from "../../components/ChatingArea/ChatingArea";
import MessageInputBar from "../../components/MessageInputBar/MessageInputBar";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";
import { useNavigate } from "react-router";
import { CHATS_PATH } from "../../router/Routes.consts";

const ChatWindow = ({ isVisible }) => {
   const hiddenClass = isVisible ? "" : "hidden";
   const { device } = useContext(LayoutContext);
   const navigate = useNavigate();
   return (
      <div className={`chat-window ${hiddenClass}`}>
         <ChatWindowHeader
            mode={device}
            OnBackClick={() => navigate(CHATS_PATH)}
         />
         <ChatingArea />
         <MessageInputBar />
      </div>
   );
};

export default ChatWindow;
