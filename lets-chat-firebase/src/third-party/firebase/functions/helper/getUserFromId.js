import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../FirebaseApp";

const getUserFromId = async (id) => {
   try {
      const q = query(collection(db, "users"), where("uid", "==", id));
      const snapshot = await getDocs(q);
      if (!snapshot.docs[0]) {
         throw console.error("user not found!");
      }
      const user = snapshot.docs[0].data();

      return user;
   } catch (e) {
      console.log("something went wrong");
   }
};

export default getUserFromId;
