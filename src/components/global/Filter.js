import styled from "styled-components";

const Filter = () => {
  const FilterBtn = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 24px 0;
    li {
      margin: 0 18px;
      cursor: pointer;
      text-align: center;
      p {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        line-height: 20px;
        margin-top: 7px;
      }
    }
  `;
  return (
    <FilterBtn>
      <li>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/filterAll.png"}
          alt="전체"
        />
        <p>전체</p>
      </li>
      <li>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/filterProduct.png"}
          alt="상품"
        />
        <p>상품</p>
      </li>
      <li>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/filterCategory.png"}
          alt="카테고리"
        />
        <p>카테고리</p>
      </li>
      <li>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/filterExhibition.png"}
          alt="기획전"
        />
        <p>기획전</p>
      </li>
      <li>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/filterBrand.png"}
          alt="브랜드"
        />
        <p>브랜드</p>
      </li>
    </FilterBtn>
  );
};
export default Filter;
