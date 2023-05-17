import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
const List = () => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  return (
    <>
      <div>List</div>
      <div>
        {product.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </div>
    </>
  );
};
export default List;
