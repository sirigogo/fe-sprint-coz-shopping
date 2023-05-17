import { useSelector } from "react-redux";
import Item from "../components/global/Item";
import Filter from "../components/global/Filter";
import { Inner, ItemList } from "../styles/styles";
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
        <p>북마크가 없습니다.</p>
      )}
    </Inner>
  );
};
export default Bookmark;
