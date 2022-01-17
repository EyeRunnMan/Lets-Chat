import React from "react";
import UploadToLocalStorage from "../../functions/UploadToLocalStorage";
import "./chat-settings.scss";

const ChatSettings = ({
   theme = "dark",
   onDownloadKeys,
   onUploadKeys,
   onDeleteAccount,
}) => {
   return (
      <div className="chat-settings-wrapper">
         <h4
            className={`chat-settings-wrapper__heading ${theme}-section-heading`}
         >{`//Settings`}</h4>
         <div className={`chat-settings  ${theme}-chat-settings-bg`}>
            <button
               className={`chat-settings__button ${theme}-chat-settings-btn`}
               onClick={onDownloadKeys}
            >
               <span>Save-Crypto-Keys</span>
               <i
                  className={`chat-settings__icon-save ${theme}-chat-settings-btn-icon`}
               ></i>
            </button>
            <label
               htmlFor={"file-upload"}
               className={`chat-settings__button ${theme}-chat-settings-btn`}
            >
               <input
                  type="file"
                  id={"file-upload"}
                  onChange={(e) => UploadToLocalStorage(e)}
                  style={{ display: "none" }}
               />
               <span>Upload-Crypto-Keys</span>
               <i
                  className={`chat-settings__icon-upload ${theme}-chat-settings-btn-icon`}
               ></i>
            </label>
            <button className="chat-settings__button">
               <span> Delete-Account</span>
               <i className={`chat-settings__icon-delete`}></i>
            </button>
         </div>
      </div>
   );
};

export default ChatSettings;
