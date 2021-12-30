import React from "react";
import "./footer.scss";

const Footer = () => {
   return (
      <div className="footer">
         <span className="footer__txt">
            Made By{" "}
            <a className="footer__link" href="/#">
               @c19h3r
            </a>
         </span>
      </div>
   );
};

export default Footer;
