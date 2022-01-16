import settings from "./helper/crypto.settings";
import str2ab from "./helper/StringToArrayBuffer";

const DecryptWithPrivateKey = async (ciphertext, privateKeyjwk) => {
   function importPrivateKey(jwk) {
      return window.crypto.subtle.importKey(
         "jwk",
         privateKeyjwk,
         {
            ...settings,
         },
         true,
         ["decrypt"]
      );
   }
   console.log(ciphertext);
   const cipherBuffer = str2ab(ciphertext);
   console.log(new DataView(cipherBuffer));
   const privateKey = await importPrivateKey(privateKeyjwk);
   console.log(privateKey);

   try {
      const decrypted = await window.crypto.subtle.decrypt(
         {
            ...settings,
         },
         privateKey,
         cipherBuffer
      );
      const dec = new TextDecoder();
      return dec.decode(decrypted);
   } catch (error) {
      console.log(error);
   }

   return "ASDFasdf";
};

export default DecryptWithPrivateKey;
