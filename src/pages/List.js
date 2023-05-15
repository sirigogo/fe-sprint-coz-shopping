import React from "react";
import { useParams } from "react-router-dom";
const List = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <div>List</div>
    </>
  );
};
export default List;
