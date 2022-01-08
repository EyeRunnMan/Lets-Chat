import React from "react";
import SelectChatBar from "../../components/SelectChatBar/SelectChatBar";

import "./chat-selection.scss";

import { CHAT_WINDOW_PATH } from "../../router/Routes.consts";

import { useNavigate } from "react-router-dom";
const ChatSelection = ({
   isVisible,
   OnBarClick = () => {},
   friendList = [],
}) => {
   const theme = "dark";
   const hiddenClass = isVisible ? "" : "hidden";
   const navigate = useNavigate();
   return (
      <div className={`select-chat ${hiddenClass}`}>
         <h4
            className={`select-chat__heading ${theme}-section-heading`}
         >{`//Chats`}</h4>
         <div className="select-chat__chats">
            {friendList.map((item, idx) => (
               <SelectChatBar
                  key={item.uid}
                  name={item.user_name}
                  variant={idx % 2 === 0}
                  // TODO
                  OnClick={() => navigate(CHAT_WINDOW_PATH)}
               />
            ))}
         </div>
      </div>
   );
};

export default ChatSelection;
