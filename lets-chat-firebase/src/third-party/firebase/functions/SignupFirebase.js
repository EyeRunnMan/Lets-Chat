import {
   browserLocalPersistence,
   setPersistence,
   signInWithPopup,
} from "@firebase/auth";
import { auth, provider } from "../FirebaseApp";

const SignupFirebase = async () => {
   try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, provider);
   } catch (e) {
      console.log(e);
   }
};

export default SignupFirebase;
