import { doc, setDoc, arrayUnion, collection } from "firebase/firestore";
import { db } from "../FirebaseApp";

const VerifyUserInDb = async ({ user_name, uid }) => {
   try {
      const userDocRef = doc(db, "users", uid);
      // const doc = await userDocRef.get();
      // if (!userDocRef.exists) {
      //    return;
      // }

      console.log("called");
      await setDoc(
         doc(db, "users", uid),
         {
            user_name,
            uid,
            friends: arrayUnion(uid),
         },
         { merge: true }
      );
   } catch (e) {
      console.error("Error adding document: ", e);
   }

   // console.log(washingtonRef);
};

export default VerifyUserInDb;
