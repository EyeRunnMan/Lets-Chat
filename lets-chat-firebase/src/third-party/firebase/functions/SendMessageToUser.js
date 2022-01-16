import { doc, serverTimestamp, setDoc } from "@firebase/firestore";
import EncryptWithPublicKey from "../../../cryptographyfunctions/EncryptWithPublicKey";
import getKeyPairForChat from "../../../cryptographyfunctions/getKeypairForChat";
import { db } from "../FirebaseApp";
const SendMessageToUser = async (
   msg,
   user_id,
   other_id,
   msg_id = "nowhere"
) => {
   console.log("twice");
   const { other_public_key, user_public_key } = getKeyPairForChat(other_id);

   const encryptedTxtuser = await EncryptWithPublicKey(msg, user_public_key);

   const encryptedTxtOther = other_public_key
      ? await EncryptWithPublicKey(msg, other_public_key)
      : "";
   let text = "";
   if (!other_public_key) {
      text = msg;
   }
   await setDoc(
      doc(db, "messages", user_id + "to" + other_id, "messages", msg_id),
      {
         timestamp: serverTimestamp(),
         text: text,
         text_cipher_other: encryptedTxtOther,
         text_cipher_user: encryptedTxtuser,
      }
   );
   console.log("once");
   return "";
};

export default SendMessageToUser;
