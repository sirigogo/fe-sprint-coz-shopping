import React from "react";
import styled from "styled-components";

const Item = ({ item }) => {
  //[Product, Category,Exhibition, Brand]
  console.log(item);
  return (
    <ItemBox>
      {/* {item.type === "Brand" ? (
        <div
          className="itemImg"
          style={{ backgroundImage: `url(${item.brand_image_url})` }}
        ></div>
      ) : (
        <div
          className="itemImg"
          style={{ backgroundImage: `url(${item.image_url})` }}
        ></div>
      )} */}
      <div
        className="itemImg"
        style={{
          backgroundImage:
            item.type === "Brand"
              ? `url(${item.brand_image_url})`
              : `url(${item.image_url})`,
        }}
      ></div>
      <div className="itmeTxt">
        {item.type === "Product" && (
          <div className="product_area">
            <p className="title">{item.title}</p>
            <p className="priceBox">
              <span className="discount">{item.discountPercentage}</span>
              <span className="price">{item.price}</span>
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
              <span className="follower">{item.follower}</span>
            </p>
          </div>
        )}
      </div>
    </ItemBox>
  );
};
const ItemBox = styled.div`
  width: calc((100% - 72px) / 4);
  .itemImg {
    width: 100%;
    height: 210px;
    border-radius: 10px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }
`;
export default Item;
