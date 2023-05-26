import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { setBookmarkList } from "../../store/bookmarkList";

const ItemBox = styled.div`
  width: calc((100% - 72px) / 4);
  margin-right: 24px;
  float: left;
  margin-bottom: 24px;
  height: 264px;
  &:nth-child(4n) {
    margin-right: 0;
  }
  cursor: pointer;
  .itemImg {
    width: 100%;
    height: 210px;
    border-radius: 10px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    position: relative;
    button {
      position: absolute;
      right: 12px;
      bottom: 12px;
    }
  }
  .itemTxt {
    padding-top: 6px;
    .product_area {
      .discount {
        color: #452cdd;
        font-size: 16px;
        line-height: 19px;
        font-weight: 800;
      }
    }
    .exhibition_area {
      .subTitle {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .brand_area {
      span:not(.follower) {
        font-weight: 700;
      }
    }
    > div:not(.exhibition_area) {
      display: flex;
      justify-content: space-between;
      > p {
        span {
          display: block;
          text-align: right;
          line-height: 20px;
        }
      }
    }
    .title {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      line-height: 19px;
      color: #000;
      font-weight: 800;
    }
  }

  .likePop {
    position: fixed;
    bottom: 12px;
    right: 24px;
    z-index: 10;
    .chooseLike {
      svg {
        color: #ffd361;
      }
    }
    div {
      padding: 18px 23px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.01);
      display: flex;
      margin-top: 10px;
      svg {
        color: #dfdfdf;
      }
      p {
        font: 16px;
        margin-left: 8px;
      }
    }
  }
`;
const ItemPopWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  left: 0;
  top: 0;
  z-index: 10;
  .itemPopImg {
    width: 46.5rem;
    height: 30rem;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background-position: center;
    background-size: cover;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    .closePop {
      cursor: pointer;
      position: absolute;
      right: 25px;
      top: 25px;
      svg {
        path {
          stroke: rgb(255, 255, 255);
        }
      }
    }
    .popNameWrap {
      position: absolute;
      left: 24px;
      bottom: 24px;
      display: flex;
      align-items: center;
      p {
        font-size: 24px;
        color: #fff;
        font-weight: 700;
        padding-left: 7px;
      }
    }
  }
`;
const BtnLike = styled.button`
  border: 0;
  background-color: transparent;
  z-index: 1;
  transition: all 0.2s;
  &.on {
    svg {
      color: #ffd361;
    }
  }
  svg {
    cursor: pointer;
    color: #dfdfdf;
    filter: drop-shadow(rgba(0, 0, 0, 0.2) 3px 4px 3px);
  }
`;

const Item = ({ item }) => {
  //[Product, Category,Exhibition, Brand]
  const dispatch = useDispatch();
  const { bookmarkList } = useSelector((state) => state);
  const [currentStatus, setCurrentStatus] = useState("");
  const [isPop, setIsPop] = useState(false);
  const wishAdd = (e) => {
    e.stopPropagation();
    let copy = [...bookmarkList];
    if (copy.some((x) => x.id === item.id)) {
      // 이미 있다면?
      copy = copy.filter((x) => x.id !== item.id);
      setCurrentStatus("minus");
    } else {
      // 없다면?
      copy.push(item);
      setCurrentStatus("plus");
    }
    dispatch(setBookmarkList(copy));
  };
  const clickPop = () => {
    setIsPop(true);
  };
  const closePop = () => {
    setIsPop(false);
  };
  useEffect(() => {
    if (currentStatus !== "") {
      setTimeout(() => {
        setCurrentStatus("");
      }, 3000);
    }
  }, [currentStatus]);
  return (
    <>
      <ItemBox onClick={clickPop}>
        <div
          className="itemImg"
          style={{
            backgroundImage:
              item.type === "Brand"
                ? `url(${item.brand_image_url})`
                : `url(${item.image_url})`,
          }}
        >
          {/* <BtnLike onClick={wishAdd} className={isWish ? "on" : null}> */}
          <BtnLike
            onClick={wishAdd}
            className={bookmarkList.some((x) => x.id === item.id) ? "on" : null}
          >
            <FaStar size={24} />
          </BtnLike>
        </div>
        <div className="itemTxt">
          {item.type === "Product" && (
            <div className="product_area">
              <p className="title">{item.title}</p>
              <p className="priceBox">
                <span className="discount">{item.discountPercentage}%</span>
                <span className="price">
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </p>
            </div>
          )}
          {item.type === "Category" && (
            <div className="category_area">
              <p className="title"># {item.title}</p>
            </div>
          )}
          {item.type === "Exhibition" && (
            <div className="exhibition_area">
              <p className="title">{item.title}</p>
              <span className="subTitle">{item.sub_title}</span>
            </div>
          )}
          {item.type === "Brand" && (
            <div className="brand_area">
              <p className="title">{item.brand_name}</p>
              <p className="customerBox">
                <span>관심고객수</span>
                <span className="follower">
                  {item.follower
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="likePop">
          {/* currentStatus가 plus면 위에꺼, minus면 아래꺼, ""이면 아무것도 안함 */}
          {currentStatus === "plus" && (
            <div className="chooseLike">
              <FaStar size={16} />
              <p>상품이 북마크에 추가되었습니다.</p>
            </div>
          )}
          {currentStatus === "minus" && (
            <div className="unChooseLike">
              <FaStar size={16} />
              <p>상품이 북마크에서 제거되었습니다.</p>
            </div>
          )}
        </div>
      </ItemBox>
      {isPop && (
        <ItemPopWrap onClick={closePop}>
          <div
            onClick={(event) => event.stopPropagation()}
            className="itemPopImg"
            style={{
              backgroundImage:
                item.type === "Brand"
                  ? `url(${item.brand_image_url})`
                  : `url(${item.image_url})`,
            }}
          >
            <button className="closePop" onClick={closePop}>
              <GrClose size={24} />
            </button>
            <div className="popNameWrap">
              <BtnLike
                onClick={wishAdd}
                className={
                  bookmarkList.some((x) => x.id === item.id) ? "on" : null
                }
              >
                <FaStar size={24} />
              </BtnLike>
              <p>{item.title}</p>
            </div>
          </div>
        </ItemPopWrap>
      )}
    </>
  );
};

export default Item;
