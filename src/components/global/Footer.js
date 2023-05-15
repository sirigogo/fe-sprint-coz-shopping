import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>
        <Link to="/list">개인정보 처리방침</Link>
        <Link to="/bookmark">이용약관</Link>
      </p>
      <p>All rights reserved &copy; Codestates</p>
    </footer>
  );
};
export default Footer;
