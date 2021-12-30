import React from "react";
import "./chat-settings.scss";

const ChatSettings = ({ theme = "dark" }) => {
   return (
      <div className="chat-settings-wrapper">
         <h4
            className={`chat-settings-wrapper__heading ${theme}-section-heading`}
         >{`//Settings`}</h4>
         <div className={`chat-settings  ${theme}-chat-settings-bg`}>
            <button
               className={`chat-settings__button ${theme}-chat-settings-btn`}
            >
               <span>Save-Crypto-Keys</span>
               <i
                  className={`chat-settings__icon-save ${theme}-chat-settings-btn-icon`}
               ></i>
            </button>
            <button
               className={`chat-settings__button ${theme}-chat-settings-btn`}
            >
               <span>Upload-Crypto-Keys</span>
               <i
                  className={`chat-settings__icon-upload ${theme}-chat-settings-btn-icon`}
               ></i>
            </button>
            <button className="chat-settings__button">
               <span> Delete-Account</span>
               <i className={`chat-settings__icon-delete`}></i>
            </button>
         </div>
      </div>
   );
};

export default ChatSettings;
