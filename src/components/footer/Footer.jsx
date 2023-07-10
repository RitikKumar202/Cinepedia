import React from "react";
import "./footer.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="copyright">© 2023 Cinepediia. All rights reserved.</div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
