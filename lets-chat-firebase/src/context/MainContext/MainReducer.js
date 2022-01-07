import { auth } from "../../third-party/firebase/FirebaseApp";
import SignupFirebase from "../../third-party/firebase/functions/SignupFirebase";
import VerifyUserInDb from "../../third-party/firebase/functions/VerifyUserInDb";
import { SIGN_IN, SIGN_IN_THE_USER } from "./Main.actions.types";

export const initialState = {
   user_name: auth.currentUser ? auth.currentUser.displayName : "loading...",
};

export const MainReducer = (state, action = {}) => {
   const { type, payload } = action;
   switch (type) {
      case SIGN_IN: {
         SignupFirebase();
         return;
      }
      case SIGN_IN_THE_USER: {
         VerifyUserInDb({ user_name: payload?.displayName, uid: payload?.uid });
         return {
            ...state,
            current_user_name: payload?.displayName,
            current_uid: payload?.uid,
         };
      }

      default:
         throw new Error();
   }
};
