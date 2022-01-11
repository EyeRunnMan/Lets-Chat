import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { db } from "../FirebaseApp";
const SendMessageToUser = (msg, user_id, other_id, msg_id = "nowhere") => {
   console.log("twice");

   setDoc(doc(db, "messages", user_id + "to" + other_id, "messages", msg_id), {
      timestamp: serverTimestamp(),
      text: msg,
   });
   console.log("once");
   return "";
};

export default SendMessageToUser;
