import { auth } from "../../third-party/firebase/FirebaseApp";
import AddFriendFirebase from "../../third-party/firebase/functions/AddFriendFirebase";
import SignupFirebase from "../../third-party/firebase/functions/SignupFirebase";
import VerifyUserInDb from "../../third-party/firebase/functions/VerifyUserInDb";
import {
   ADD_FRIEND,
   SET_CHAT_WINDOW,
   SIGN_IN,
   SIGN_IN_THE_USER,
   UNSET_CHAT_WINDOW,
   UPDATE_DETAILS,
} from "./Main.actions.types";

export const initialState = {
   current_user_name: auth.currentUser
      ? auth.currentUser.displayName
      : "loading...",
   friends: [],
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
      case UPDATE_DETAILS: {
         console.log(payload);
         if (state.isAuthed)
            return {
               ...state,
               current_uid: payload.uid,
               friends: payload.friends,
               current_user_name: payload.user_name,
            };
         else {
            return { isAuthed: false, theme: state.theme };
         }
      }
      case SET_CHAT_WINDOW: {
         return {
            ...state,
            current_chat_name: payload?.name,
            current_chat_id: payload?.id,
         };
      }
      case UNSET_CHAT_WINDOW: {
         return {
            ...state,
            current_chat_name: "",
            current_chat_id: "",
            current_chat_messages: [],
         };
      }
      default:
         throw new Error();
   }
};
