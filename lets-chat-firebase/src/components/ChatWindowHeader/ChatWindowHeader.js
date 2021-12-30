import React from "react";
import "./chat-window-header.scss";
const ChatWindowHeader = ({ name = "asdfasd", theme = "dark" }) => {
   return (
      <div className="chat-window-header">
         <img
            className="chat-window-header__img"
            src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
            alt="hola"
         />
         <span className={`chat-window-header__title ${theme}-section-heading`}>
            0x{name}
         </span>
         {/* <input /> */}
      </div>
   );
};

export default ChatWindowHeader;
