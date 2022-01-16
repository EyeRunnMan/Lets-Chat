import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { jsonEval } from "@firebase/util";
import GenerateKeyPairs from "../../../../cryptographyfunctions/GenerateKeyPairs";
import SetKeyPairForChat from "../../../../cryptographyfunctions/SetKeyPairForChat";
import { db } from "../../FirebaseApp";
import createMessageDoc from "./createMessageDoc";

const verifyMessageDoc = async (user_id, other_id) => {
   //check if doc exists
   const userToOtherDocRef = doc(db, "messages", user_id + "to" + other_id);
   const OtherToUserDocRef = doc(db, "messages", other_id + "to" + user_id);
   const userToOtherDocSnap = await getDoc(userToOtherDocRef);
   const OtherToUserDocSnap = await getDoc(OtherToUserDocRef);
   console.log(OtherToUserDocSnap.data());
   console.log(userToOtherDocSnap.data());

   if (!userToOtherDocSnap.exists() || !OtherToUserDocSnap.exists()) {
      await createMessageDoc(user_id, other_id);
   } else {
      const userToOtherDocData = userToOtherDocSnap.data();
      const otherToUserDocData = OtherToUserDocSnap.data();
      console.log(userToOtherDocData);
      console.log(otherToUserDocData);

      if (
         userToOtherDocData?.user_public_key === "" ||
         otherToUserDocData?.other_public_key === ""
      ) {
         const { publicKey } = await GenerateKeyPairs(other_id);
         await updateDoc(userToOtherDocRef, {
            user_public_key: JSON.stringify(publicKey),
         });
         await updateDoc(OtherToUserDocRef, {
            other_public_key: JSON.stringify(publicKey),
         });
      } else {
         if (userToOtherDocData?.other_public_key)
            SetKeyPairForChat({
               other_uid: userToOtherDocData?.other_id,
               other_public_key: JSON.parse(
                  userToOtherDocData?.other_public_key
               ),
            });
      }
   }
};

export default verifyMessageDoc;
