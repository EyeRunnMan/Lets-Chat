import React, { useContext } from "react";

import "./chat-window.scss";

import ChatWindowHeader from "../../components/ChatWindowHeader/ChatWindowHeader";
import ChatingArea from "../../components/ChatingArea/ChatingArea";
import MessageInputBar from "../../components/MessageInputBar/MessageInputBar";
import { LayoutContext } from "../../context/LayoutContext/LayoutContext";

const ChatWindow = ({ isVisible }) => {
   const hiddenClass = isVisible ? "" : "hidden";
   const { device } = useContext(LayoutContext);
   return (
      <div className={`chat-window ${hiddenClass}`}>
         <ChatWindowHeader mode={device} />
         <ChatingArea />
         <MessageInputBar />
      </div>
   );
};

export default ChatWindow;
