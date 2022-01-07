import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseApp";

const VerifyUserInDb = async ({ user_name, uid }) => {
   try {
      console.log("called");
      await setDoc(doc(db, "users", uid), {
         user_name,
         uid,
      });
   } catch (e) {
      console.error("Error adding document: ", e);
   }

   // console.log(washingtonRef);
};

export default VerifyUserInDb;
