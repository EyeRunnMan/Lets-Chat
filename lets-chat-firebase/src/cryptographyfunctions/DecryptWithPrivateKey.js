import settings from "./helper/crypto.settings";

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
   const privateKey = await importPrivateKey(privateKeyjwk);
   let decrypted = await window.crypto.subtle.decrypt(
      {
         ...settings,
      },
      privateKey,
      ciphertext
   );

   let dec = new TextDecoder();
   return dec.decode(decrypted);
};

export default DecryptWithPrivateKey;
