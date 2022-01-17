import React, { useContext } from "react";
import { SIGN_IN } from "../../context/MainContext/Main.actions.types";
import { MainContext } from "../../context/MainContext/MainContext";
import "./about-page.scss";
import FirebaseLogo from "../../assets/svgs/FirebaseLogo.svg";
import ReactLogo from "../../assets/svgs/ReactLogo.svg";
import DicebearLogo from "../../assets/svgs/DicebearLogo.svg";
import CryptoWebApiLogo from "../../assets/svgs/WebCryptoApiLogo.svg";
import SassLogo from "../../assets/svgs/SassLogo.svg";

function AboutPage({ theme = "dark" }) {
   return (
      <div className={`about-div ${theme}-app-bg`}>
         <div className={`about-div__desc-box`}>
            <p className={`about-div__desc-para`}>
               <span className={`${theme}-header-1`}>{`Lets`}</span>
               <span className={`${theme}-header-2`}>{`=>Chat;`}</span> is and
               end to end Encrypted , hacker/programmer themed chat web
               application!!
            </p>
         </div>

         <div className={`about-div__stack-box`}>
            <span className={`about-div__section-heading`}>
               Tech Stack and Apis
            </span>
            <ul className={`about-div__stack-list`}>
               <li>
                  <img alt="firebase" src={ReactLogo} />
                  <span>React</span>
               </li>
               <li>
                  <img alt="firebase" src={FirebaseLogo} />
                  <span>Firebase</span>
               </li>
               <li>
                  <img alt="firebase" src={SassLogo} />
                  <span>Sass</span>
               </li>
               <li>
                  <img alt="firebase" src={DicebearLogo} />
                  <span>DiceBear</span>
               </li>

               <li>
                  <img alt="firebase" src={CryptoWebApiLogo} />
                  <span>Crypto Web Api</span>
               </li>
            </ul>
         </div>
         <div className={`about-div__feature-box`}>
            <span className={`about-div__section-heading`}>Features</span>
            <ul className={`about-div__feature-list`}>
               <li>
                  <span className={`${theme}-header-1`}>0x0 </span>
                  <p>Send and recieve messages</p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x1 </span>
                  <p>End to End Encryption</p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x2 </span>
                  <p>Signin With Google</p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x4 </span>
                  <p>Private/Decryption key never leaves the client's device</p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x5 </span>
                  <p>Download/Save keys in txt file</p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x6 </span>
                  <p>
                     Upload keys to decrypt files *[NOTE: if keys lost messages
                     can't be decrypted]
                  </p>
               </li>
               <li>
                  <span className={`${theme}-header-1`}>0x7 </span>
                  <p>
                     Profile photo generated from users name(seed) *[using
                     Dicebear]
                  </p>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default AboutPage;
