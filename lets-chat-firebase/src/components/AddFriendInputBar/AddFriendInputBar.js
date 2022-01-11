import React, { useRef } from "react";
import "./add-friend-input-bar.scss";
const AddFriendInputBar = ({ onAddFriend = () => {} }) => {
   const inputField = useRef(null);

   const handleBtnClk = () => {
      console.log("asadfaasdf");
      onAddFriend(inputField.current.value);
      inputField.current.value = "";
   };

   return (
      <div className="add-friend-inpt-bar">
         <input
            ref={inputField}
            className={`add-friend-inpt-bar__field`}
            placeholder="Add Friend"
         />
         <button
            className={`add-friend-inpt-bar__button`}
            onClick={handleBtnClk}
         >
            <i className={`add-friend-inpt-bar__icon-add`}></i>
         </button>
      </div>
   );
};

export default AddFriendInputBar;
