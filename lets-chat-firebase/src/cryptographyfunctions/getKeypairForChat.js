const getKeyPairForChat = (other_id) => {
   const storedData = localStorage.getItem(other_id);
   const { other_public_key, user_private_key, user_public_key } =
      JSON.parse(storedData);
   if (user_private_key === "") {
      console.error(
         "Private Key Not Found,Either Delete the user or upload the downloaded keys"
      );
   }
   return { other_public_key, user_private_key, user_public_key };
};
export default getKeyPairForChat;
