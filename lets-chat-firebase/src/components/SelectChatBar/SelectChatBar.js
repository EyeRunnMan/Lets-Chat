import React from "react";
import "./select-chat-bar.scss";

const SelectChatBar = ({
   variant,
   name,
   message,
   theme = "dark",
   active = false,
   OnClick,
}) => {
   const variantType = `${variant ? "1" : "2"}`;
   const selectChatType = active ? "selected" : `${variantType}`;

   return (
      <div
         className={`chat-bar ${theme}-select-chat-${selectChatType}`}
         onClick={OnClick}
      >
         <img
            className="chat-bar__img"
            src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
            alt="hola"
         />
         <div className="chat-bar__txt-container">
            <span
               className={`chat-bar__name ${theme}-chat-bar-name${
                  active ? "-act" : ""
               }`}
            >
               {name}
            </span>
            <span
               className={`chat-bar__msg ${theme}-chat-bar-msg${
                  active ? "-act" : ""
               }`}
            >
               {message}
            </span>
         </div>
      </div>
   );
};

export default SelectChatBar;
