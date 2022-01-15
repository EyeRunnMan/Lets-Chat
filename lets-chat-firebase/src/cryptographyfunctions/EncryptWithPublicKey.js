import settings from "./helper/crypto.settings";

const EncryptWithPublicKey = async (msg, publicKeyjwk) => {
   function getMessageEncoding(msg) {
      let enc = new TextEncoder();
      return enc.encode(msg);
   }
   function importPublickKey(jwk) {
      return window.crypto.subtle.importKey(
         "jwk",
         publicKeyjwk,
         {
            ...settings,
         },
         true,
         ["encrypt"]
      );
   }

   let encoded = getMessageEncoding(msg);
   const publicKey = await importPublickKey(publicKeyjwk);
   const ciphertext = await window.crypto.subtle.encrypt(
      {
         ...settings,
      },
      publicKey,
      encoded
   );
   return ciphertext;
};

export default EncryptWithPublicKey;
