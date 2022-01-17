const SetKeyPairForChat = ({
   other_uid,
   other_public_key,
   user_private_key,
   user_public_key,
}) => {
   const storedData = localStorage.getItem(other_uid);
   const data = JSON.parse(storedData);
   let userPublicKeyFromData = "";
   let userPrivateKeyFromData = "";
   if (data !== null) {
      userPublicKeyFromData = data.user_public_key ? data.user_public_key : "";
      userPrivateKeyFromData = data.user_private_key
         ? data.user_private_key
         : "";
   }

   const toSave = JSON.stringify({
      other_public_key,
      user_public_key: user_public_key
         ? user_public_key
         : userPublicKeyFromData,
      user_private_key: user_private_key
         ? user_private_key
         : userPrivateKeyFromData,
   });
   localStorage.setItem(other_uid, toSave);
};
export default SetKeyPairForChat;
