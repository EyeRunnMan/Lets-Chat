import React from "react";
import MessageInputBar from "./components/MessageInputBar/MessageInputBar";

import NavBar from "./components/Navbar/NavBar";
import SelectChatBar from "./components/SelectChatBar/SelectChatBar";
import "./stylesheets/app.scss";

const App = () => {
   return (
      <div style={{ minHeight: "100vh" }} class="dark-app-bg">
         <NavBar />
         {/* <SelectChatBar name="asdasdff" message="123" variant />
         <SelectChatBar name="asasdfasdfasd" message="123" />
         <SelectChatBar name="asdfasdfasdf" message="123" active /> */}
         <MessageInputBar />
      </div>
   );
};

export default App;
