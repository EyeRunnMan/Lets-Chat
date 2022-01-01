import React, { useCallback } from "react";

import "./app-router.scss";

import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ChatPage from "../pages/ChatPage/ChatPage";
import { CHATS_PATH, SETTINGS_PATH, CHAT_WINDOW_PATH } from "./Routes.consts";

function AppRouter() {
   const location = useLocation();
   const fullClass = location.pathname === "/about" ? "full" : "";
   return (
      <div className={`app-page ${"dark"}-app-bg  ${fullClass}`}>
         <Header />
         <Routes>
            <Route path={CHATS_PATH} element={<ChatPage />} />
            <Route path={CHAT_WINDOW_PATH} element={<ChatPage />} />
            <Route path={SETTINGS_PATH} element={<ChatPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default AppRouter;
