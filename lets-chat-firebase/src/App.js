import React from "react";
import AddFriendInputBar from "./components/AddFriendInputBar/AddFriendInputBar";
import ChatingArea from "./components/ChatingArea/ChatingArea";
import ChatWindowHeader from "./components/ChatWindowHeader/ChatWindowHeader";
import MessageInputBar from "./components/MessageInputBar/MessageInputBar";

import NavBar from "./components/Navbar/NavBar";
import AccountInfo from "./containers/AccountInfo/AccountInfo";
import ChatSelection from "./containers/ChatSelection/ChatSelection";
import ChatSettings from "./containers/ChatSettings/ChatSettings";
import ChatWindow from "./containers/ChatWindow/ChatWindow";
import AccountSettings from "./layouts/AccountSettings/AccountSettings";
import Footer from "./layouts/Footer/Footer";
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
         <AccountSettings />
         <Footer />
      </div>
   );
};

export default App;
