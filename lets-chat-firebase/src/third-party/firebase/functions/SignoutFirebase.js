import { auth } from "../FirebaseApp";

function SignoutFirebase() {
   auth.signOut();
   return "";
}

export default SignoutFirebase;
