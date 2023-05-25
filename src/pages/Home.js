import Item from "../components/global/Item";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store";

const MainTitle = styled.h3`
  font-size: 24px;
  margin: 24px 0 12px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { bookmarkList, product, user } = useSelector((state) => state);
  const itemShowCount = 4;
  const getCozDate = async () => {
    let arr = [];
    try {
      const result = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );
      arr = [...result.data, ...arr];
    } catch (err) {
      console.log(err);
    }
    dispatch(setProduct(arr));
  };

  useEffect(() => {}, [product]);
  useEffect(() => {
    if (product.length !== 100) {
      getCozDate();
    }
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Inner>
        <section className="itemList">
          <MainTitle>상품 리스트</MainTitle>
          <ItemList>
            {product.slice(0, itemShowCount).map((item, idx) => {
              return <Item item={item} key={item.id} />;
            })}
          </ItemList>
        </section>

        {bookmarkList.length > 0 && (
          <section className="itemList">
            <MainTitle>북마크 리스트</MainTitle>
            <ItemList>
              {bookmarkList.slice(0, itemShowCount).map((item, idx) => {
                return <Item item={item} key={item.id} />;
              })}
            </ItemList>
          </section>
        )}
      </Inner>
    </>
  );
};

export default Home;
