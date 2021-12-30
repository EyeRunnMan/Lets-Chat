import React from "react";
import "./chating-area.scss";
function ChatingArea({ theme = "dark" }) {
   return (
      <div className={`chating-area ${theme}-chat-window-bg`}>
         <p className="chating-area__msg">
            <span></span>asdfasdf
         </p>
         <p className="chating-area__msg">
            <span></span>asdfasdf
         </p>
      </div>
   );
}

export default ChatingArea;
