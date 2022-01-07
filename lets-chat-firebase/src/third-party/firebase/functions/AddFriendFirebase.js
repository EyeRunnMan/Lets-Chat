import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { db } from "../FirebaseApp";
import getUserFromName from "./helper/getUserFromName";

const AddFriendFirebase = async (name = "", current_uid) => {
   try {
      const user_doc = await getUserFromName(name);
      const { uid } = user_doc;

      const current_user_docref = doc(db, "users", current_uid);

      await updateDoc(
         current_user_docref,
         {
            friends: arrayUnion(uid),
         },
         { merge: true }
      );
      //add userid to current user document
      return "";
   } catch (e) {
      console.log(e);
   }
};

export default AddFriendFirebase;
