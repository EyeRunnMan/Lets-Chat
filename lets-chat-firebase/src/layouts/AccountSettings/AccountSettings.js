import React, { useContext, useReducer } from "react";

import "./account-settings.scss";

import AccountInfo from "../../containers/AccountInfo/AccountInfo";
import ChatSettings from "../../containers/ChatSettings/ChatSettings";
import { MainContext } from "../../context/MainContext/MainContext";
import {
   ADD_FRIEND,
   LOG_OUT,
} from "../../context/MainContext/Main.actions.types";
import DownloadLocalStorage from "../../functions/DownloadLocalStorage";

function AccountSettings({ isVisible }) {
   const hiddenClass = isVisible ? "" : "hidden";
   const { mainState, mainDispatch } = useContext(MainContext);
   const { current_user_name } = mainState;
   return (
      <div className={`account-settings ${hiddenClass}`}>
         <AccountInfo
            AddFriend={(name) => {
               mainDispatch({ type: ADD_FRIEND, payload: name });
            }}
            name={current_user_name}
         />
         <ChatSettings
            onDownloadKeys={DownloadLocalStorage}
            onUploadKeys
            onLogout={() => mainDispatch({ type: LOG_OUT })}
         />
      </div>
   );
}

export default AccountSettings;
