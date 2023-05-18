import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import axios from "axios";
import { setProduct } from "../store";

const List = () => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  const [itemData, setItemData] = useState([]);
  const [category, setCategory] = useState("All");
  const getCozDate = async () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      try {
        const result = await axios.get(
          "http://cozshopping.codestates-seb.link/api/v1/products?count=10"
        );
        arr = [...result.data, ...arr];
      } catch (err) {
        console.log(err);
        break;
      }
    }
    setItemData(arr);
  };
  useEffect(() => {
    getCozDate();
  }, []);
  return (
    <Inner>
      <Filter />
      <ItemList>
        {itemData.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
    </Inner>
  );
};
export default List;
