import {
   collection,
   doc,
   getDoc,
   getDocs,
   onSnapshot,
} from "@firebase/firestore";
import { db } from "../FirebaseApp";
const OnMessgeUpdate = async (current_uid, other_id, fn, fn2) => {
   if (!other_id) {
      return;
   }
   onSnapshot(
      collection(db, "messages", other_id + "to" + current_uid, "messages"),
      async (udpatedCollection) => {
         let messages = [];
         udpatedCollection.forEach((doc) => {
            messages = [...messages, doc.data()];
         });
         const unencryptedMessages = messages.filter(
            (item) => item.encryption === false
         );
         const userMsgs = await getDocs(
            collection(
               db,
               "messages",
               current_uid + "to" + other_id,
               "messages"
            )
         );
         const userMesgData = userMsgs.docs.map((doc) => doc.data());
         console.log(userMesgData);
         console.log(messages);

         fn(userMesgData ? userMesgData : []);
         fn2(messages);
      }
   );
};

export default OnMessgeUpdate;
