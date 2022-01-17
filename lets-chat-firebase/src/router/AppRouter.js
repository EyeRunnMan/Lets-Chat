import React from "react";

import "./app-router.scss";

import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ChatPage from "../pages/ChatPage/ChatPage";
import {
   CHATS_PATH,
   SETTINGS_PATH,
   CHAT_WINDOW_PATH,
   ABOUT_PATH,
} from "./Routes.consts";
import AboutPage from "../pages/AboutPage/AboutPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
            <Route path={ABOUT_PATH} element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default AppRouter;
