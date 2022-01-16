const getKeyPairForChat = (other_id) => {
   const storedData = localStorage.getItem(other_id);
   const { other_public_key, user_private_key, user_public_key } =
      JSON.parse(storedData);
   return { other_public_key, user_private_key, user_public_key };
};
export default getKeyPairForChat;
