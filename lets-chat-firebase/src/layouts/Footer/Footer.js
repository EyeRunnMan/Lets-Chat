import React from "react";
import "./footer.scss";

const Footer = ({ theme = "dark" }) => {
   return (
      <div className={`footer ${theme}-footer-1 ${theme}-app-bg`}>
         <span className="footer__txt">
            Made By{" "}
            <a className={`footer__link ${theme}-footer-2`} href="/#">
               @c19h3r
            </a>
         </span>
      </div>
   );
};

export default Footer;
