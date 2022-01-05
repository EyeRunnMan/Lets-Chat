import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainProvider from "./contextProvider/MainProvider";

import "./stylesheets/app.scss";

const App = () => {
   return (
      <BrowserRouter>
         <MainProvider />
      </BrowserRouter>
   );
};

export default App;
