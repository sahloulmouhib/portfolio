import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import ME2 from "../../assets/go-team.png";
import ME3 from "../../assets/suit.png";
import HeaderSocials from "./HeaderSocials";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mouhib Sahloul</h1>
        <h5 className="text-align">Software Engineer/ReactNative Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME3} alt="me" className="img__me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
