import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import styled from "styled-components";
import { setProduct } from "../store";
import { useInView } from "react-intersection-observer";

const EndMsg = styled.p`
  padding: 20px 0;
  text-align: center;
  font-weight: 600;
`;

const List = ({ category, setCategory }) => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const [boxRef, inView] = useInView();
  const [endPoint, setEndPoint] = useState(10);

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
  useEffect(() => {
    if (category === "All") {
      setFilteredList(product);
    } else {
      setFilteredList(product.filter((x) => x.type === category));
    }
  }, [product, category]);
  useEffect(() => {
    if (product.length !== 100) {
      getCozDate();
    }
    return () => {
      setCategory("All");
    };
  }, []);
  useEffect(() => {
    if (inView || product.length > endPoint) {
      setEndPoint((prev) => prev + 10);
    }
  }, [inView]);
  useEffect(() => {
    setEndPoint(10);
  }, [category]);
  // useEffect(() => {
  //   console.log("inView", inView);
  // }, [inView]);
  return (
    <Inner>
      <Filter category={category} setCategory={setCategory} />
      <ItemList>
        {filteredList.slice(0, endPoint).map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
      {product.length <= endPoint && (
        <EndMsg>더 이상 표시할 목록이 없습니다.</EndMsg>
      )}
      <div ref={boxRef}></div>
    </Inner>
  );
};

export default List;
