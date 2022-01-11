import React, { useRef } from "react";
import "./message-input-bar.scss";

const MessageInputBar = ({ theme = "dark", onSend }) => {
   const msgInputField = useRef(null);
   const handleSend = () => {
      if (msgInputField.current.value !== "") {
         onSend(msgInputField.current.value);
      }
      msgInputField.current.value = "";
   };
   return (
      <div className={`input-bar ${theme}-chat-window-bg`}>
         <input
            className={`input-bar__field ${theme}-msg-input-field`}
            ref={msgInputField}
         />
         <button className="input-bar__button" onClick={handleSend}>
            <i className={`input-bar__icon-send ${theme}-msg-input-icons`}></i>
         </button>
         <button
            className="input-bar__button"
            onClick={() => {
               msgInputField.current.value = "";
            }}
         >
            <i
               className={`input-bar__icon-delete ${theme}-msg-input-icons`}
            ></i>
         </button>
      </div>
   );
};

export default MessageInputBar;
