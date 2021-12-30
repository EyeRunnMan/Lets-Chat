import React from "react";

import "./account-settings.scss";

import AccountInfo from "../../containers/AccountInfo/AccountInfo";
import ChatSettings from "../../containers/ChatSettings/ChatSettings";

function AccountSettings() {
   return (
      <div className="account-settings">
         <AccountInfo />
         <ChatSettings />
      </div>
   );
}

export default AccountSettings;
