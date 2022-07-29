import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mouhib Sahloul
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
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
          <BsGithub />
        </a>

        <a
          href="https://www.facebook.com/mouhib.m.sahloul/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/sahloulmouhib/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mouhib Sahloul Potfolio. All rights reserved 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
