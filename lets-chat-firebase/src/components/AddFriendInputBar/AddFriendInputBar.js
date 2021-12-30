import React from "react";
import "./add-friend-input-bar.scss";
const AddFriendInputBar = () => {
   return (
      <div className="add-friend-inpt-bar">
         <input
            className={`add-friend-inpt-bar__field`}
            placeholder="Add Friend"
         />
         <button className={`add-friend-inpt-bar__button`}>
            <i className={`add-friend-inpt-bar__icon-add`}></i>
         </button>
      </div>
   );
};

export default AddFriendInputBar;
