import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import { setProduct } from "../store";
import { current } from "@reduxjs/toolkit";

const List = ({ category, setCategory }) => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);
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
    console.log(category);
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
  return (
    <Inner>
      <Filter category={category} setCategory={setCategory} />
      <ItemList>
        {filteredList.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
    </Inner>
  );
};

export default List;
