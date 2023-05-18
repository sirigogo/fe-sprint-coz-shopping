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
  const [itemData, setItemData] = useState([]);
  const { bookmarkList, product } = useSelector((state) => state);

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

  useEffect(() => {}, [product]);
  useEffect(() => {
    getCozDate();
  }, []);
  useEffect(() => {
    console.log(bookmarkList);
  }, [bookmarkList]);

  return (
    <>
      <Inner>
        <section className="itemList">
          <MainTitle>상품 리스트</MainTitle>
          <ItemList>
            {itemData.map((item, idx) => {
              return <Item item={item} key={item.id} />;
            })}
          </ItemList>
        </section>

        {bookmarkList.length > 0 && (
          <section className="itemList">
            <MainTitle>북마크 리스트</MainTitle>
            <ItemList>
              {bookmarkList.map((item, idx) => {
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
