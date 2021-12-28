import React from "react";
import "./navbar.scss";

const NavIcon = ({ active, link, theme, type }) => {
   return (
      <a href="/#">
         <i
            className={`navbar__icon-${type} ${
               active ? theme + "-active" : null
            } ${theme}-nav-icons`}
         ></i>
      </a>
   );
};

const NavBar = ({ links, theme = "dark", page }) => {
   return (
      <nav>
         <div className="navbar">
            <a href="/#">
               <h1 className={`navbar__heading dark-header-1`}>
                  <span className="dark-header-2">Lets</span>
                  =&gt;Chat;
               </h1>
            </a>
            <div className="navbar__nav-icons">
               <NavIcon active={page === "about"} theme={theme} type="info" />
               <NavIcon active={page === "chat"} theme={theme} type="chat" />
               <NavIcon
                  active={page === "account"}
                  theme={theme}
                  type="account"
               />
            </div>
            <a href="/#">
               <div className={`navbar__icon-theme ${theme}-theme-icon`}></div>
            </a>
         </div>
         <div className="navbar__nav-icons-alt">
            <NavIcon active={page === "about"} theme={theme} type="info" />
            <NavIcon active={page === "chat"} theme={theme} type="chat" />
            <NavIcon active={page === "account"} theme={theme} type="account" />
         </div>
      </nav>
   );
};

export default NavBar;
