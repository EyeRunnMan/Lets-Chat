import { arrayUnion, doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../FirebaseApp";
import createMessageDoc from "./helper/createMessageDoc";
import getUserFromName from "./helper/getUserFromName";
import verifyMessageDoc from "./helper/verifyMessageDoc";

const AddFriendFirebase = async (name = "", current_uid) => {
   console.log("ASdf one");
   const { uid } = await getUserFromName(name);
   console.log("ASdf");
   await verifyMessageDoc(current_uid, uid);
   const current_user_docref = doc(db, "users", current_uid);
   await setDoc(
      current_user_docref,
      {
         friends: arrayUnion(uid),
      },
      { merge: true }
   );
   const other_user_docref = doc(db, "users", uid);
   await setDoc(
      other_user_docref,
      {
         friends: arrayUnion(current_uid),
      },
      { merge: true }
   );
   return "";
};

export default AddFriendFirebase;
