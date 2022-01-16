import ab2str from "./helper/ArraybufferToString";
import settings from "./helper/crypto.settings";

const EncryptWithPublicKey = async (msg, publicKeyjwk) => {
   function getMessageEncoding(msg) {
      let enc = new TextEncoder();
      return enc.encode(msg);
   }
   function importPublickKey(jwk) {
      console.log(jwk);
      return window.crypto.subtle.importKey(
         "jwk",
         jwk,
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
   return ab2str(ciphertext);
};

export default EncryptWithPublicKey;
