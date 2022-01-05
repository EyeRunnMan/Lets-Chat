import { UPDATE_SIGN_IN_DETAILS } from "./Main.actions.types";

export const initialState = {
   user_name: "",
};

export const MainReducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
      case UPDATE_SIGN_IN_DETAILS: {
         console.log(payload.displayName);
         return { ...state, user_name: payload.displayName };
      }

      default:
         throw new Error();
   }
};
