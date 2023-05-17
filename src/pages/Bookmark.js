import { useSelector } from "react-redux";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
import { FaStar } from "react-icons/fa";
const Bookmark = () => {
  const { bookmarkList } = useSelector((state) => state);

  return (
    <Inner>
      {bookmarkList.length > 0 ? (
        <>
          <Filter />
          <ItemList>
            {bookmarkList.map((v) => {
              return <Item item={v} />;
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
