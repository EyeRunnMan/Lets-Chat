import React from "react";
import { BrowserRouter } from "react-router-dom";

import LayoutProvider from "./contextProvider/LayoutProvider";

import "./stylesheets/app.scss";

const App = () => {
   return (
      <BrowserRouter>
         <LayoutProvider />
      </BrowserRouter>
   );
};

export default App;
