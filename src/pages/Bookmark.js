import { useSelector } from "react-redux";
import Item from "../components/global/Item";
import { useEffect, useState } from "react";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import { FaStar } from "react-icons/fa";
const Bookmark = ({ category, setCategory }) => {
  const [filteredList, setFilteredList] = useState([]);
  const { bookmarkList } = useSelector((state) => state);
  useEffect(() => {
    if (category === "All") {
      setFilteredList(bookmarkList);
    } else {
      setFilteredList(bookmarkList.filter((item) => item.type === category));
    }
  }, [category]);
  return (
    <Inner>
      {bookmarkList.length > 0 ? (
        <>
          <Filter category={category} setCategory={setCategory} />
          <ItemList>
            {filteredList.map((ele) => {
              return <Item item={ele} />;
            })}
          </ItemList>
        </>
      ) : (
        <p className="noBookmark">
          <FaStar />
          <span>찜한 상품이 없습니다.</span>
        </p>
      )}
    </Inner>
  );
};
export default Bookmark;
