import { collection, doc, getDocs, onSnapshot } from "@firebase/firestore";
import DecryptWithPrivateKey from "../../../cryptographyfunctions/DecryptWithPrivateKey";
import getKeyPairForChat from "../../../cryptographyfunctions/getKeypairForChat";
import SetKeyPairForChat from "../../../cryptographyfunctions/SetKeyPairForChat";
import { db } from "../FirebaseApp";
const OnMessgeUpdate = async (
   current_uid,
   other_id,
   fnUseMsg,
   fnOthrMsg,
   encrypted = true
) => {
   try {
      if (!other_id) {
         return;
      }
      onSnapshot(doc(db, "messages", current_uid + "to" + other_id), (doc) => {
         if (doc.data()?.other_public_key)
            SetKeyPairForChat({
               other_uid: doc.data()?.other_id,
               other_public_key: JSON.parse(doc.data()?.other_public_key),
            });
      });
      onSnapshot(
         collection(db, "messages", other_id + "to" + current_uid, "messages"),
         async (udpatedCollection) => {
            let messages = [];
            udpatedCollection.forEach((doc) => {
               messages = [...messages, doc.data()];
            });

            const otherMesgData = await Promise.all(
               messages.map(async (data) => {
                  const msgData = data;
                  const { user_private_key } = getKeyPairForChat(other_id);
                  console.log(user_private_key);
                  if (msgData.text !== "") {
                     return msgData;
                  }
                  const text = await DecryptWithPrivateKey(
                     msgData?.text_cipher_other,
                     user_private_key
                  );

                  console.log(text);
                  return {
                     ...msgData,
                     text: text,
                  };
               })
            );
            const otherMesgDataEncrypted = await Promise.all(
               messages.map(async (data) => {
                  const msgData = data;
                  const { user_private_key } = getKeyPairForChat(other_id);
                  console.log(user_private_key);
                  if (msgData.text !== "") {
                     return msgData;
                  }
                  const text = msgData?.text_cipher_other;

                  console.log(text);
                  return {
                     ...msgData,
                     text: text,
                  };
               })
            );

            const userMsgs = await getDocs(
               collection(
                  db,
                  "messages",
                  current_uid + "to" + other_id,
                  "messages"
               )
            );
            // const userMesgData = userMsgs.docs.map((doc) => doc.data());
            const userMesgData = await Promise.all(
               userMsgs.docs.map(async (doc) => {
                  const msgData = doc.data();
                  const { user_private_key } = getKeyPairForChat(other_id);
                  if (msgData.text !== "") {
                     return msgData;
                  }
                  // const decrypted = await DecryptWithPrivateKey(
                  //    msgData?.text_cipher_user,
                  //    user_private_key
                  // );
                  // console.log(decrypted);
                  const text = await DecryptWithPrivateKey(
                     msgData?.text_cipher_user,
                     user_private_key
                  );

                  return {
                     ...msgData,
                     text: text,
                  };
               })
            );
            const userMesgDataEncrypted = await Promise.all(
               userMsgs.docs.map(async (doc) => {
                  const msgData = doc.data();
                  const { user_private_key } = getKeyPairForChat(other_id);
                  if (msgData.text !== "") {
                     return msgData;
                  }
                  // const decrypted = await DecryptWithPrivateKey(
                  //    msgData?.text_cipher_user,
                  //    user_private_key
                  // );
                  // console.log(decrypted);
                  const text = msgData?.text_cipher_user;

                  return {
                     ...msgData,
                     text: text,
                  };
               })
            );

            fnUseMsg({
               decrypted: userMesgData ? userMesgData : [],
               encrypted: userMesgDataEncrypted ? userMesgDataEncrypted : [],
            });
            fnOthrMsg({
               decrypted: otherMesgData ? otherMesgData : [],
               encrypted: otherMesgDataEncrypted ? otherMesgDataEncrypted : [],
            });
         }
      );
   } catch (error) {
      console.log(error);
   }
};

export default OnMessgeUpdate;
