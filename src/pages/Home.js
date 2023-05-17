import React from "react";
import Item from "../components/global/Item";
import { List } from "../styles/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store";

const Home = () => {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState([]);
  const { product } = useSelector((state) => state);
  const getCozDate = async () => {
    try {
      const result = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
      );
      setItemData(result.data);
      dispatch(setProduct(result.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("product", product);
  }, [product]);
  useEffect(() => {
    getCozDate();
  }, []);
  return (
    <>
      <div className="inner">
        <section className="itemList">
          <MainTitle>상품 리스트</MainTitle>
          <List>
            {itemData.map((item, idx) => {
              return <Item item={item} key={item.id} />;
            })}
          </List>
        </section>
        <section className="itemList">
          <MainTitle>북마크 리스트</MainTitle>
          <List>
            {itemData.map((item, idx) => {
              return <Item item={item} key={item.id} />;
            })}
          </List>
        </section>
      </div>
    </>
  );
};
const MainTitle = styled.h3`
  font-size: 24px;
  margin: 24px 0 12px;
`;
export default Home;
