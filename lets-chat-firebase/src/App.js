import React from "react";
import { BrowserRouter } from "react-router-dom";

import LayoutProvider, {
   ACCOUNT_SETTINGS,
   CHAT_WINDOW,
   SELECT_CHAT,
} from "./contextProvider/LayoutProvider";
import AppRouter from "./router/AppRouter";

import "./stylesheets/app.scss";

const App = () => {
   return (
      <BrowserRouter>
         <LayoutProvider />
      </BrowserRouter>
   );
};

export default App;
