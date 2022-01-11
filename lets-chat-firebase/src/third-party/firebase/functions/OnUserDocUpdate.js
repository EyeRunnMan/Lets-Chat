import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../FirebaseApp";
import getUserFromId from "./helper/getUserFromId";
const OnUserDocUpdate = (current_uid, fn) => {
   onSnapshot(doc(db, "users", current_uid), async (udpatedDoc) => {
      const friendsList = udpatedDoc.data().friends;
      const updatedFriendsList = await Promise.all(
         friendsList.map(async (item) => {
            const userDetails = await getUserFromId(item);
            return {
               uid: userDetails.uid,
               user_name: userDetails.user_name,
            };
         })
      );
      const updatedData = { ...udpatedDoc.data(), friends: updatedFriendsList };
      fn(updatedData);
   });
};

export default OnUserDocUpdate;
