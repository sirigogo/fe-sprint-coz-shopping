import React from "react";
import Item from "../components/global/Item";

const Home = () => {
  return (
    <>
      <div className="inner">
        <section className="itemList">
          <h3>상품 리스트</h3>
          <div>
            <Item />
          </div>
        </section>
        <section className="itemList">
          <h3>북마크 리스트</h3>
          <div>
            <Item />
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
