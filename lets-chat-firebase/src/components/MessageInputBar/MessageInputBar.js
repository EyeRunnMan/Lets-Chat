import React from "react";
import "./message-input-bar.scss";

const MessageInputBar = ({ theme = "dark", onSend }) => {
   return (
      <div className={`input-bar ${theme}-chat-window-bg`}>
         <input className={`input-bar__field ${theme}-msg-input-field`} />
         <button className="input-bar__button">
            <i className={`input-bar__icon-send ${theme}-msg-input-icons`}></i>
         </button>
         <button className="input-bar__button">
            <i
               className={`input-bar__icon-delete ${theme}-msg-input-icons`}
            ></i>
         </button>
      </div>
   );
};

export default MessageInputBar;
