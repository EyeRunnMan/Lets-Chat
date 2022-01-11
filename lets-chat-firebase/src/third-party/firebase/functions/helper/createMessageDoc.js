import {
   addDoc,
   collection,
   doc,
   serverTimestamp,
   setDoc,
} from "@firebase/firestore";
import { db } from "../../FirebaseApp";

const createMessageDoc = async (user_id, other_id) => {
   try {
      console.log(other_id);
      await setDoc(
         doc(db, "messages", user_id + "to" + other_id),
         {
            user_id,
            other_id,
         },
         { merge: true }
      );
      await setDoc(
         doc(db, "messages", user_id + "to" + other_id, "messages", "first"),
         {
            text: "Hey i added you as a friend",
            timestamp: serverTimestamp(),
            encryption: false,
         }
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await setDoc(
         doc(db, "messages", other_id + "to" + user_id),
         {
            user_id: other_id,
            other_id: user_id,
         },
         { merge: true }
      );
      await setDoc(
         doc(db, "messages", other_id + "to" + user_id, "messages", "first"),
         {
            text: "accepted you automatically!",
            timestamp: serverTimestamp(),
            encryption: false,
         }
      );
      return "";
   } catch (e) {
      console.log(e);
   }
};

export default createMessageDoc;
