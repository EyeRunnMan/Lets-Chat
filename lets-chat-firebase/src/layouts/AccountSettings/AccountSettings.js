import React, { useContext, useReducer } from "react";

import "./account-settings.scss";

import AccountInfo from "../../containers/AccountInfo/AccountInfo";
import ChatSettings from "../../containers/ChatSettings/ChatSettings";
import { MainContext } from "../../context/MainContext/MainContext";

function AccountSettings({ isVisible }) {
   const hiddenClass = isVisible ? "" : "hidden";
   const { mainState } = useContext(MainContext);
   const { user_name } = mainState;
   console.log(mainState);
   return (
      <div className={`account-settings ${hiddenClass}`}>
         <AccountInfo onFriendAdd name={"0x" + user_name} />
         <ChatSettings onDownloadKeys onUploadKeys onDeleteAccount />
      </div>
   );
}

export default AccountSettings;
