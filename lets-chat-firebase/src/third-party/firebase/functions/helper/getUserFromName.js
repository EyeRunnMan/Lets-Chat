import { collection, getDoc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../FirebaseApp";

const getUserFromName = async (name) => {
   console.log("get name fn");
   const q = query(collection(db, "users"), where("user_name", "==", name));
   console.log("get name fn 1");
   const snapshot = await getDocs(q);
   console.log("get name fn 2");
   if (!snapshot.docs[0]) {
      throw console.error("user not found!");
   }
   console.log("get name fn 3");

   const user = snapshot.docs[0].data();
   return { ...user };
};

export default getUserFromName;
