import React from "react";

import "./chat-window.scss";

import ChatWindowHeader from "../../components/ChatWindowHeader/ChatWindowHeader";
import ChatingArea from "../../components/ChatingArea/ChatingArea";
import MessageInputBar from "../../components/MessageInputBar/MessageInputBar";

const ChatWindow = () => {
   return (
      <div className="chat-window">
         <ChatWindowHeader />
         <ChatingArea />
         <MessageInputBar />
      </div>
   );
};

export default ChatWindow;
