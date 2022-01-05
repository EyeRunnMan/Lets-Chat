import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../FirebaseApp";

const SignupFirebase = async (cb, type) => {
   await signInWithPopup(auth, provider);
   if (auth.currentUser) {
      cb({
         type,
         payload: auth.currentUser,
      });
   }
};

export default SignupFirebase;
