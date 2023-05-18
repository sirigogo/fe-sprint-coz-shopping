import styled from "styled-components";

const Filter = ({ category, setCategory }) => {
  const FilterBtns = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;
    li {
      margin: 0 18px;
      cursor: pointer;
      text-align: center;
      &.on {
        p {
          font-weight: 700;
          color: #412dd4;
          border-bottom: 3px solid #412dd4;
          display: inline-block;
        }
      }
      button {
        display: block;
      }
      img {
        display: block;
      }
      p {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        line-height: 20px;
        margin-top: 7px;
      }
    }
  `;

  //[Product, Category,Exhibition, Brand]
  const onClickValue = (e) => {
    setCategory(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  return (
    <FilterBtns>
      <li className={category === "All" ? "on" : null}>
        <button value={"All"} onClick={onClickValue}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/filterAll.png"}
            alt="전체"
          />
          <p>전체</p>
        </button>
      </li>
      <li className={category === "Product" ? "on" : null}>
        <button value={"Product"} onClick={onClickValue}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/filterProduct.png"}
            alt="상품"
          />
          <p>상품</p>
        </button>
      </li>
      <li className={category === "Category" ? "on" : null}>
        <button value={"Category"} onClick={onClickValue}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/filterCategory.png"}
            alt="카테고리"
          />
          <p>카테고리</p>
        </button>
      </li>
      <li className={category === "Exhibition" ? "on" : null}>
        <button value={"Exhibition"} onClick={onClickValue}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/filterExhibition.png"}
            alt="기획전"
          />
          <p>기획전</p>
        </button>
      </li>
      <li className={category === "Brand" ? "on" : null}>
        <button value={"Brand"} onClick={onClickValue}>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/filterBrand.png"}
            alt="브랜드"
          />
          <p>브랜드</p>
        </button>
      </li>
    </FilterBtns>
  );
};
export default Filter;
