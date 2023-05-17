import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
import { Inner } from "../../styles/styles";
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 2;
  .inner {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    h1 {
      display: flex;
      align-items: center;
      span {
        margin-left: 12px;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 88.02%;
        color: #000;
      }
    }
    .hm {
      width: 34px;
      height: 24px;
      position: relative;
      cursor: pointer;
      span {
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #000;
        border-radius: 10px;
        left: 0;
        &:first-child {
          top: 0;
        }
        &:nth-child(2n) {
          top: 50%;
          transform: translateY(-50%);
        }
        &:last-child {
          top: 100%;
        }
      }
    }
    .headPop {
      width: 200px;
      position: fixed;
      right: 32px;
      top: 80px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.1);
      z-index: 11;
      .popCursor {
        position: absolute;
        right: 50px;
        top: -17px;
        filter: drop-shadow(rgba(0, 0, 0, 0.1) -1px -2px 2px);
      }
      ul {
        li {
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
          &:first-child {
            padding-left: 10px;
          }
          &:last-child {
            border-bottom: 0px;
          }
        }
        a {
          display: flex;
          align-items: center;
          color: #000;
          padding-left: 25px;
          font-size: 16px;
          svg {
            margin-right: 8px;
          }
        }
      }
    }
  }
`;
const Header = () => {
  const userMenu = useRef();
  const [isShowing, setIsShowing] = useState(false);
  const clickHm = () => {
    setIsShowing(!isShowing);
  };
  const clickBody = (e) => {
    if (isShowing && !userMenu.current.contains(e.target)) setIsShowing();
  };
  useEffect(() => {
    window.addEventListener("mousedown", clickBody);
    return () => {
      window.removeEventListener("mousedown", clickBody);
    };
  }, [isShowing]);
  return (
    <HeaderWrap>
      <Inner className="inner">
        {/* <Button onClick={clickEvent}>여기에 들어오는 것들</Button> */}
        <h1>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
              alt="로고"
            />
            <span>COZ Shopping</span>
          </Link>
        </h1>
        <div className="hm" onClick={clickHm}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isShowing && (
          <div className="headPop" ref={userMenu}>
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icoPolygon.png"}
              alt="삼각형"
              className="popCursor"
            />
            <ul>
              <li>
                <Link to="/">OOO님, 안녕하세요!</Link>
              </li>
              <li>
                <Link to="/list">
                  <SlPresent size="18" />
                  <span>상품리스트 페이지</span>
                </Link>
              </li>
              <li>
                <Link to="/bookmark">
                  <BsStar size="18" />
                  <span>북마크 페이지</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Inner>
    </HeaderWrap>
  );
};

export default Header;
