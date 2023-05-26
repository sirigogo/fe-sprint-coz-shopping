import { useDispatch, useSelector } from "react-redux";
import { setBookmarkList } from "../store/bookmarkList";
import { Button } from "../stories/bookbutton/Button";

const LikeButton = ({ item, setCurrentStatus }) => {
  const dispatch = useDispatch();
  const { bookmarkList } = useSelector((state) => state);
  const wishAdd = (e) => {
    e.stopPropagation();
    let copy = [...bookmarkList];
    if (copy.some((ele) => ele.id === item.id)) {
      // 이미 있다면?
      copy = copy.filter((ele) => ele.id !== item.id);
      setCurrentStatus("minus");
    } else {
      // 없다면?
      copy.push(item);
      setCurrentStatus("plus");
    }
    dispatch(setBookmarkList(copy));
  };
  return (
    <Button
      onClick={wishAdd}
      className={
        bookmarkList.some((ele) => ele.id === item.id)
          ? "storybook-button--primary"
          : "storybook-button--secondary"
      }
    />
  );
};
export default LikeButton;
