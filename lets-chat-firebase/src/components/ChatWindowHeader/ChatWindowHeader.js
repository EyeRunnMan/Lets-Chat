import React from "react";
import "./chat-window-header.scss";

export const MOBILE = "mobile";
export const DESKTOP = "desktop";

const ChatWindowHeader = ({
   name = "asdfasd",
   theme = "dark",
   mode = DESKTOP,
   OnBackClick,
   toggleCrypt,
}) => {
   const mobileClass = mode === DESKTOP ? "" : "mobile";
   return (
      <div className={`chat-window-header ${mobileClass}`}>
         <i className="chat-window-header__icon-back" onClick={OnBackClick}></i>
         <span className="chat-window-header__name-container">
            <img
               className="chat-window-header__img"
               src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
               alt="hola"
            />
            <span
               className={`chat-window-header__title ${theme}-section-heading`}
            >
               0x{name}
            </span>
         </span>
         <button className="chat-window-header__lock-btn" onClick={toggleCrypt}>
            <i className="chat-window-header__icon-locked"></i>
         </button>
      </div>
   );
};

export default ChatWindowHeader;
