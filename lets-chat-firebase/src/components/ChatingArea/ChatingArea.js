import react from "react";
import "./chating-area.scss";
function ChatingArea({
   theme = "dark",
   messages = [{ sender: "ASDF", text: "ASDFASDf" }, { text: "ASDFASDf" }],
}) {
   const mappedMessages = messages
      .map((item, id) => {
         const spanClass = `${theme}-chat-area-${
            item.sender ? "other" : "user"
         }`;
         const msgSender = item.sender ? item.sender : "you";
         const currentMsg = (
            <p className="chating-area__msg" key={id}>
               <span className={spanClass}>{`${msgSender} => `}</span>
               {item.text}
            </p>
         );
         return currentMsg;
      })
      .reverse();
   console.log(mappedMessages + " " + messages);
   return (
      <div className={`chating-area ${theme}-chat-window-bg`}>
         {/* <p className="chating-area__msg">
            <span>{"you => "}</span>asdfasdfsdfasdf 1
         </p>
         <p className="chating-area__msg">
            <span className={`${theme}-chat-area-user`}>{"other => "}</span>
            asdfasdf 2
         </p>
         <p className="chating-area__msg">
            <span>{"you => "}</span>asdfasdfsdfasdf 3
         </p> */}
         {mappedMessages}
      </div>
   );
}

export default ChatingArea;
