import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

type Props = {};

const HeaderSocials = (props: Props) => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mouhib-sahloul-249842199/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/sahloulmouhib"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      {/* <a href="https.//dribble.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
