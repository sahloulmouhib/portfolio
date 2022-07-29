import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Contact = (props: Props) => {
  const form: any = useRef();

  const successMessage = () =>
    toast("Message sent successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "success",
    });

  const errorMessage = () =>
    toast("Something went wrong", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      type: "error",
    });
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_de0r73i",
        "template_bcm19do",
        form.current,
        "vvCPiyZ6nHSfA-XxH"
      )
      .then(
        (result: any) => {
          console.log("sucess");
          successMessage();
          e.target.reset();
        },
        (error: any) => {
          console.log(error.text);
          errorMessage();
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mouhibsahloul@hotmail.com</h5>
            <a
              href="mailto:mouhibsahloul@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Mouhib Sahloul</h5>
            <a
              href="https://m.me/mouhib.m.sahloul/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+216 29 043 712</h5>
            <a
              href="https://api.whatsapp.com/send?phone=21629043712"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End of contact options*/}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={7}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
