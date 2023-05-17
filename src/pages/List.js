import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
const List = () => {
  const param = useParams();
  const { product } = useSelector((state) => state);
  return (
    <Inner>
      <Filter />
      <ItemList>
        {product.map((v, idx) => {
          return <Item item={v} key={idx} />;
        })}
      </ItemList>
    </Inner>
  );
};
export default List;
