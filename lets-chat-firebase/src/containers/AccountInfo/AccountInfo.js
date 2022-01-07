import React from "react";
import "./account-info.scss";

import AddFriendInputBar from "../../components/AddFriendInputBar/AddFriendInputBar";

const AccountInfo = ({ name = "ASDf", AddFriend }) => {
   return (
      <div className="account-info">
         <img
            className="account-info__img"
            src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
            alt="hola"
         />
         <span className={`account-info__name`}>{name}</span>
         <AddFriendInputBar onAddFriend={AddFriend} />
      </div>
   );
};

export default AccountInfo;
