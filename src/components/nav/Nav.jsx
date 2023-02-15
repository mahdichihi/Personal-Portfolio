import React from "react";
import "./Nav.css";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineAutoAwesome } from "react-icons/md";

import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  // =============================================

  const handleScroll = () => {
    const position = window.scrollY + 100;
    const navElements = document.querySelectorAll("nav a");

    navElements.forEach((element) => {
      const target = document.querySelector(element.hash);

      const targetTop = target.getBoundingClientRect().top + window.scrollY;

      const targetBottom = targetTop + target.offsetHeight;

      if (position >= targetTop && position < targetBottom) {
        setActiveNav(element.hash);
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight
      ) {
        setActiveNav("#contact");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // this return statement is used to remove the event listener when the component is unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ====================================

  return (
    <nav>
      <a
        href="#header"
        title="HOME"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="ABOUT "
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        title="EXPERIENCE"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        title="SERVICES"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        title="PORTFOLIO"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineWallet />
      </a>

      <a
        href="#testimonials"
        title="TESTIMONIALS"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <MdOutlineAutoAwesome />
      </a>
      <a
        href="#contact"
        title="CONTACT"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
