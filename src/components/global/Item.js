import React from "react";
import styled from "styled-components";

const Item = () => {
  return (
    <>
      <ItemBox>
        <div className="itemImg"></div>
        <div className="itmeTxt"></div>
      </ItemBox>
    </>
  );
};
const ItemBox = styled.div`
  width: calc((100% - 72px) / 4);
  height: 210px;
  .itemImg {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
`;
export default Item;
