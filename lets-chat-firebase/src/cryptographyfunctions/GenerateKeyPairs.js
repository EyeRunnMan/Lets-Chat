import settings from "./helper/crypto.settings";
import SetKeyPairForChat from "./SetKeyPairForChat";

const GenerateKeyPairs = async (other_uid = "Asdf") => {
   const keyPair = await window.crypto.subtle.generateKey(
      {
         ...settings,
      },
      true,
      ["encrypt", "decrypt"]
   );

   const publicKeyJwk = await window.crypto.subtle.exportKey(
      "jwk",
      keyPair.publicKey
   );

   const privateKeyJwk = await window.crypto.subtle.exportKey(
      "jwk",
      keyPair.privateKey
   );
   SetKeyPairForChat({
      other_uid: other_uid,
      user_private_key: privateKeyJwk,
      user_public_key: publicKeyJwk,
   });

   return { publicKey: publicKeyJwk, privateKey: privateKeyJwk };
};

export default GenerateKeyPairs;
