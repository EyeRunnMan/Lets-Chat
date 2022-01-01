import React from "react";
import SelectChatBar from "../../components/SelectChatBar/SelectChatBar";

import "./chat-selection.scss";

import { CHAT_WINDOW_PATH } from "../../router/Routes.consts";

import { useNavigate } from "react-router-dom";
const ChatSelection = ({ isVisible }) => {
   const theme = "dark";
   const hiddenClass = isVisible ? "" : "hidden";
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
   const navigate = useNavigate();
   return (
      <div className={`select-chat ${hiddenClass}`}>
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
                  OnClick={() => navigate(CHAT_WINDOW_PATH)}
               />
            ))}
         </div>
      </div>
   );
};

export default ChatSelection;
