import React, { useContext } from "react";

import "./chat-page.scss";

import ChatPageLayout from "../../layouts/ChatPageLayout/ChatPageLayout";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";

function ChatPage() {
   return (
      <div className={`chat-page ${"dark"}-app-bg`}>
         <Header />
         <ChatPageLayout />
         <Footer />
      </div>
   );
}

export default ChatPage;
