import React from "react";
import ChatingArea from "./components/ChatingArea/ChatingArea";
import ChatWindowHeader from "./components/ChatWindowHeader/ChatWindowHeader";
import MessageInputBar from "./components/MessageInputBar/MessageInputBar";

import NavBar from "./components/Navbar/NavBar";
import ChatSelection from "./containers/ChatSelection/ChatSelection";
import "./stylesheets/app.scss";

const App = () => {
   return (
      <div
         style={{
            maxHeight: "100vh",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
         }}
         class="dark-app-bg"
      >
         <NavBar />
         {/* <ChatWindowHeader /> */}
         {/* <ChatingArea /> */}
         <ChatSelection />
         <MessageInputBar />
      </div>
   );
};

export default App;
