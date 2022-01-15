const SetKeyPairForChat = ({ other_uid, other_pulicKey, user_privateKey }) => {
   const storedData = localStorage.getItem(other_uid);
   const data = JSON.parse(storedData);
   const toSave = JSON.stringify({
      other_pulicKey,
      user_privateKey: user_privateKey ? user_privateKey : data.user_privateKey,
   });
   localStorage.setItem(other_uid, toSave);
};
export default SetKeyPairForChat;
