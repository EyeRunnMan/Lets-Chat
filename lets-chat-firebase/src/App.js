import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

import MainProvider from "./contextProvider/MainProvider";

import "./stylesheets/app.scss";

const App = () => {
   return (
      <HashRouter>
         <MainProvider />
      </HashRouter>
   );
};

export default App;
