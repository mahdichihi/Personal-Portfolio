import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5dc7imy",
        "template_j6ndug6",
        form.current,
        "YW1jFNtsYPignp5Iq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // to whipe typed informations after submitting the form
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsWhatsapp className=".contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+216 22 058 086</h5>
            <a
              href="https://api.whatsapp.com/send?phone=21622058086"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className=".contact__option-icon" />
            <h4>Email</h4>
            <h5>mahdichihi95@gmail.com</h5>
            <a
              href="mailto:mahdichihi95@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Send message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className=".contact__option-icon" />
            <h4>Messenger</h4>
            <h5>mahdichihi95</h5>
            <a
              href="https://m.me/mahdichihi95"
              target={"_blank"}
              rel="noreferrer"
            >
              Send message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
