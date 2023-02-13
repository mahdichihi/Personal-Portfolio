import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* adding the rel attribute to the a elements with the value of "noreferrer noopener" 
      to avoid the security risk and adding content to the a elements for accessibility purposes */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer ">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer ">
        <FaGithub />
      </a>
      <a href="https://dribbble.com/" target="_blank" rel="noreferrer ">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
