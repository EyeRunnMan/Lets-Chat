import React from "react";

import "./chat-window.scss";

import ChatWindowHeader from "../../components/ChatWindowHeader/ChatWindowHeader";
import ChatingArea from "../../components/ChatingArea/ChatingArea";
import MessageInputBar from "../../components/MessageInputBar/MessageInputBar";

const ChatWindow = ({ isVisible }) => {
   const hiddenClass = isVisible ? "" : "hidden";

   return (
      <div className={`chat-window ${hiddenClass}`}>
         <ChatWindowHeader />
         <ChatingArea />
         <MessageInputBar />
      </div>
   );
};

export default ChatWindow;
