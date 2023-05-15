import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterWrap>
      <p>
        <Link to="/list">개인정보 처리방침</Link>
        <Link to="/bookmark">이용약관</Link>
      </p>
      <p>All rights reserved &copy; Codestates</p>
    </FooterWrap>
  );
};
const FooterWrap = styled.footer`
  width: 100%;
  height: 3.63rem;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 0.75rem;
    color: #888888;
    line-height: 0.9rem;
    a {
      color: #888888;
    }
  }
`;
export default Footer;
