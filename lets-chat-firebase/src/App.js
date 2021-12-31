import React from "react";

import LayoutProvider, {
   ACCOUNT_SETTINGS,
   CHAT_WINDOW,
   SELECT_CHAT,
} from "./contextProvider/LayoutProvider";

import "./stylesheets/app.scss";

const App = () => {
   return <LayoutProvider mode={SELECT_CHAT} />;
};

export default App;
