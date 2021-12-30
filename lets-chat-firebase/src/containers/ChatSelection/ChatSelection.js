import React from "react";
import SelectChatBar from "../../components/SelectChatBar/SelectChatBar";

import "./chat-selection.scss";

const ChatSelection = () => {
   const theme = "dark";
   const tmp = [
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF", active: true },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
      { name: "ASDf", message: "ASDF" },
   ];
   return (
      <div className="select-chat">
         <h4
            className={`select-chat__heading ${theme}-section-heading`}
         >{`//Chats`}</h4>
         <div className="select-chat__chats">
            {tmp.map((item, idx) => (
               <SelectChatBar
                  key={idx}
                  name={Math.random()}
                  message={item.message}
                  active={item.active}
                  variant={idx % 2 === 0}
               />
            ))}
         </div>
      </div>
   );
};

export default ChatSelection;
