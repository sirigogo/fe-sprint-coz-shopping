import React from "react";
import styled from "styled-components";
import Button from "../Button";
const Header = () => {
  const clickEvent = () => {
    console.log("AAA");
  };
  return (
    <HeaderWrap>
      <div className="inner">
        {/* <Button onClick={clickEvent}>여기에 들어오는 것들</Button> */}
        <h1>로고</h1>
        <div>햄버거</div>
      </div>
    </HeaderWrap>
  );
};
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .inner {
    display: flex;
    justify-content: space-between;
  }
`;
export default Header;
