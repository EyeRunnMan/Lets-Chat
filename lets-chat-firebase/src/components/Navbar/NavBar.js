import React from "react";
import { useLocation, useNavigate } from "react-router";
import {
   ABOUT_PATH,
   CHATS_PATH,
   SETTINGS_PATH,
} from "../../router/Routes.consts";
import "./navbar.scss";

const NavIcon = ({
   active,
   link,
   theme = "dark",
   type,
   OnClick = () => {},
}) => {
   return (
      <button
         style={{ border: 0, backgroundColor: "transparent" }}
         onClick={OnClick}
      >
         <i
            className={`navbar__icon-${type} ${
               active ? theme + "-active" : null
            } ${theme}-nav-icons`}
         ></i>
      </button>
   );
};

const NavBar = ({
   theme = "dark",
   isVisible = true,
   isSignedIn = false,
   OnSignin,
}) => {
   const hiddenClass = isVisible ? "" : "hidden";
   const navigate = useNavigate();
   const { pathname } = useLocation();
   return (
      <nav>
         <div className={`navbar ${hiddenClass} ${"dark"}-app-bg`}>
            <a href="/#">
               <h1 className={`navbar__heading dark-header-1`}>
                  <span className="dark-header-2">Lets</span>
                  =&gt;Chat;
               </h1>
            </a>
            <div className="navbar__nav-icons">
               <NavIcon
                  theme={theme}
                  type="info"
                  OnClick={() => {
                     navigate(ABOUT_PATH);
                  }}
                  active={pathname === ABOUT_PATH}
               />
               {isSignedIn ? (
                  <NavIcon
                     theme={theme}
                     type="chat"
                     OnClick={() => {
                        navigate(CHATS_PATH);
                     }}
                     active={pathname === CHATS_PATH}
                  />
               ) : (
                  <button
                     onClick={OnSignin}
                     className={`navbar__signin-btn ${hiddenClass} ${theme}-nav-icons`}
                  >
                     Signin
                  </button>
               )}
               {/* <NavIcon theme={theme} type="account" /> */}
            </div>
            <a href="/#">
               <div className={`navbar__icon-theme ${"dark"}-theme-icon`}></div>
            </a>
         </div>
         <div
            className={`navbar__nav-icons-alt ${hiddenClass} ${"dark"}-app-bg`}
         >
            <NavIcon
               theme={theme}
               type="info"
               OnClick={() => {
                  navigate(ABOUT_PATH);
               }}
               active={pathname === ABOUT_PATH}
            />
            {isSignedIn ? (
               <>
                  <NavIcon
                     theme={theme}
                     type="chat"
                     OnClick={() => {
                        navigate(CHATS_PATH);
                     }}
                     active={pathname === CHATS_PATH}
                  />
                  <NavIcon
                     theme={theme}
                     type="account"
                     OnClick={() => {
                        navigate(SETTINGS_PATH);
                     }}
                     active={pathname === SETTINGS_PATH}
                  />
               </>
            ) : (
               <button
                  onClick={OnSignin}
                  className={`navbar__signin-btn ${hiddenClass} ${theme}-nav-icons`}
               >
                  Signin
               </button>
            )}
         </div>
      </nav>
   );
};

export default NavBar;
