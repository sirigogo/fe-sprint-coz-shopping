import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import { setProduct } from "../store";
import { current } from "@reduxjs/toolkit";

const List = () => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  const [itemData, setItemData] = useState([]);

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
    setItemData(arr);
    console.log(setItemData(arr));
  };
  useEffect(() => {
    console.log(itemData);
    if (category === "All") {
      setFilteredList(itemData);
    } else {
      setFilteredList(itemData.filter((x) => x.type === category));
    }
    getCozDate();
  }, [category]);
  return (
    <Inner>
      <Filter setCategory={setCategory} />
      <ItemList>
        {filteredList.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
    </Inner>
  );
};
export default List;
