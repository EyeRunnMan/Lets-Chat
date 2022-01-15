import DecryptWithPrivateKey from "../DecryptWithPrivateKey";
import EncryptWithPublicKey from "../EncryptWithPublicKey";
import GenerateKeyPairs from "../GenerateKeyPairs";
import ab2str from "./ArraybufferToString";
import str2ab from "./StringToArrayBuffer";

const CryptoTest = async (msg = "hi my name is karan") => {
   const keyPair = await GenerateKeyPairs();
   const publickKey = keyPair.publicKeyJwk;
   const privateKey = keyPair.privateKeyJwk;
   console.log(keyPair);
   const encrypted = await EncryptWithPublicKey(msg, publickKey);

   console.log(ab2str(encrypted));

   const decrypted = await DecryptWithPrivateKey(
      str2ab(ab2str(encrypted)),
      privateKey
   );

   console.log(decrypted);
   console.log("done");
};

export default CryptoTest;
