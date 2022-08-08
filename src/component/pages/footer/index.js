import React from "react";

import FooterOptions from "../../molecules/fotterOptions";
import { fotterLink } from "../../../utils";
import "./footer.css";

const Footer = () => {
  return (
    <div className="fotterWrapper">
      <div className="fotterLeftDesc">
        <div>
          Our mission is to provide a free, world-class education to anyone,
          anywhere.
        </div>
        <div className="fotterLeftDescpara2">
          Vibgyor Classes is a 501(c)(3) nonprofit organization. Donate or
          volunteer today!
        </div>
      </div>
      <div className="fotterOptionList">
        {fotterLink.map((item) => (
          <FooterOptions title={item.title} links={item.links} />
        ))}
      </div>
    </div>
  );
};
export default Footer;
