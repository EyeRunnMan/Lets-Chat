import { v4 } from "uuid";
import { auth } from "../../third-party/firebase/FirebaseApp";
import AddFriendFirebase from "../../third-party/firebase/functions/AddFriendFirebase";
import { getCurrentTimeUTC } from "../../third-party/firebase/functions/helper/getCurrentTimeUTC";
import SendMessageToUser from "../../third-party/firebase/functions/SendMessageToUser";
import SignupFirebase from "../../third-party/firebase/functions/SignupFirebase";
import VerifyUserInDb from "../../third-party/firebase/functions/VerifyUserInDb";
import {
   ADD_FRIEND,
   MESSAGES_UPDATED_USER,
   MESSAGES_UPDATED_OTHER,
   SET_CHAT_WINDOW,
   SIGN_IN,
   SIGN_IN_THE_USER,
   UNSET_CHAT_WINDOW,
   UPDATE_DETAILS,
   SEND_MESSAGES,
   TOGGLE_ENCRYPTION,
} from "./Main.actions.types";

export const initialState = {
   current_user_name: auth.currentUser
      ? auth.currentUser.displayName
      : "loading...",
   friends: [],
   current_chat_messages: [],
   current_chat_id: "",
   isAuthed: false,
   isEncrypted: true,
};

export const MainReducer = (state, action = {}) => {
   const { type, payload } = action;
   console.log(type);
   console.log(state);
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
         return {
            ...state,
            current_uid: payload.uid,
            friends: payload.friends,
            current_user_name: payload.user_name,
         };
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
      case MESSAGES_UPDATED_USER: {
         const mappedMessagesDecrypted = payload.decrypted.map((item) => {
            if (!item) {
               return "";
            }
            return {
               sender: false,
               text: item.text,
               timestamp: item.timestamp,
            };
         });
         const mappedMessagesEncrypted = payload.encrypted.map((item) => {
            if (!item) {
               return "";
            }
            return {
               sender: false,
               text: item.text,
               timestamp: item.timestamp,
            };
         });
         if (state.isEncrypted) {
            return { ...state, current_chat_messages: mappedMessagesEncrypted };
         }
         return {
            ...state,
            current_chat_messages: mappedMessagesDecrypted,
         };
      }
      case MESSAGES_UPDATED_OTHER: {
         const encryptedOther = payload.encrypted.map((item) => {
            return { ...item, isOther: true };
         });
         const decryptedOther = payload.decrypted.map((item) => {
            return { ...item, isOther: true };
         });
         const newMessages = state.isEncrypted
            ? encryptedOther
            : decryptedOther;

         const updatedMessaages = [
            ...newMessages,
            ...state.current_chat_messages,
         ];
         const sortedMessages = updatedMessaages.sort(function (a, b) {
            return b.timestamp - a.timestamp || 0;
         });
         const mappedMessages = sortedMessages.map((item) => {
            if (!item) {
               return "";
            }
            const isOther = item.isOther ? state.current_chat_name : false;
            return {
               sender: isOther,
               text: item.text,
               timestamp: item.timestamp,
            };
         });
         return { ...state, current_chat_messages: mappedMessages };
      }
      case SEND_MESSAGES: {
         const newMsg = {
            sender: false,
            text: payload,
            timestamp: getCurrentTimeUTC(),
         };
         const msg_id = v4();
         console.log(msg_id);
         const updatedMessages = [newMsg, ...state.current_chat_messages];
         SendMessageToUser(
            payload,
            state.current_uid,
            state.current_chat_id,
            msg_id
         );
         return { ...state, current_chat_messages: updatedMessages };
      }
      case TOGGLE_ENCRYPTION: {
         return { ...state, isEncrypted: !state.isEncrypted };
      }
      default:
         throw new Error();
   }
};
