import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { SlPresent } from "react-icons/sl";
const Header = () => {
  const el = useRef();
  const [isShowing, setIsShowing] = useState(false);
  const clickEvent = (e) => {
    if (isShowing && (!el.current || !el.current.contains(e.target)))
      console.log("aa");
    setIsShowing(false);
  };
  useEffect(() => {
    window.addEventListener("click", clickEvent);
    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, []);
  return (
    <HeaderWrap>
      <div className="inner">
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
        <div className="hm" onClick={clickEvent}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isShowing && (
          <div className="headPop" ref={el}>
            <ul>
              <li>
                <Link to="">OOO님, 안녕하세요!</Link>
              </li>
              <li>
                <Link to="">
                  <SlPresent size="18" />
                  <span>상품리스트 페이지</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsStar size="18" />
                  <span>북마크 페이지</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </HeaderWrap>
  );
};
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
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
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
      &:after {
        content: " ";
        position: absolute;
        top: -10px;
        right: 40px;
        bottom: bottom: calc(100% - 1px);
        height: 0;
        z-index: -1;
        border-bottom: 10px solid;
        border-left: 10px solid rgba(0, 0, 0, 0);
        border-right: 10px solid rgba(0, 0, 0, 0);
        color: #000;
        transform: rotate(0deg);
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

export default Header;
