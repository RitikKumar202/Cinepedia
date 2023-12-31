import React from "react";
import "./footer.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="copyright">
          <div>© 2023 Cinepedia. All rights reserved.</div>
          <div className="footer-links">
            <Link
              to="https://github.com/RitikKumar202/Cinepedia"
              target="blank"
            >
              <BsGithub />
            </Link>
            <Link to="https://linkedin.com/in/RitikKumar202" target="blank">
              <FaLinkedin />
            </Link>
            <Link to="/" target="blank">
              <BsInstagram />
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
