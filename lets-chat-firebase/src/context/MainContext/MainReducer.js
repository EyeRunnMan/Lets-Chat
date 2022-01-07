import { auth } from "../../third-party/firebase/FirebaseApp";
import AddFriendFirebase from "../../third-party/firebase/functions/AddFriendFirebase";
import SignupFirebase from "../../third-party/firebase/functions/SignupFirebase";
import VerifyUserInDb from "../../third-party/firebase/functions/VerifyUserInDb";
import { ADD_FRIEND, SIGN_IN, SIGN_IN_THE_USER } from "./Main.actions.types";

export const initialState = {
   current_user_name: auth.currentUser
      ? auth.currentUser.displayName
      : "loading...",
   isAuthed: false,
};

export const MainReducer = (state, action = {}) => {
   const { type, payload } = action;
   switch (type) {
      case SIGN_IN: {
         SignupFirebase();
         return state;
      }
      case SIGN_IN_THE_USER: {
         VerifyUserInDb({ user_name: payload?.displayName, uid: payload?.uid });
         return {
            ...state,
            current_user_name: payload?.displayName,
            current_uid: payload?.uid,
            isAuthed: true,
         };
      }
      case ADD_FRIEND: {
         AddFriendFirebase(payload, state.current_uid);
         return state;
      }

      default:
         throw new Error();
   }
};
