import {
   addDoc,
   arrayUnion,
   collection,
   doc,
   getDoc,
   serverTimestamp,
   setDoc,
   updateDoc,
} from "@firebase/firestore";
import { getCurrentTimeUTC } from "./helper/getCurrentTimeUTC";
import { db } from "../FirebaseApp";
const SendMessageToUser = (msg, user_id, other_id) => {
   console.log("twice");

   addDoc(collection(db, "messages", user_id + "to" + other_id, "messages"), {
      timestamp: serverTimestamp(),
      text: msg,
   });
   console.log("once");
   return "";
};

export default SendMessageToUser;
