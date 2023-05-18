import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import { setProduct } from "../store";
import { current } from "@reduxjs/toolkit";
import { useInView } from "react-intersection-observer";

const List = ({ category, setCategory }) => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
  const [boxRef, inView] = useInView();

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
    dispatch(setProduct(arr.slice(0, 10)));
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
    if (!inView) {
      return;
    }
    getCozDate();
  }, [inView]);
  return (
    <Inner>
      <Filter category={category} setCategory={setCategory} />
      <ItemList>
        {filteredList.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
      <div ref={boxRef}></div>
    </Inner>
  );
};

export default List;
