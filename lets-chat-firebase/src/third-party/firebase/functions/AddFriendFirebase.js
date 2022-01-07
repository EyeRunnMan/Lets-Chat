import getUserIdFromName from "./helper/getUserIdFromName";

const AddFriendFirebase = (name = "") => {
   const user_id = getUserIdFromName(name);

   //add userid to current user document
   return "";
};

export default AddFriendFirebase;
