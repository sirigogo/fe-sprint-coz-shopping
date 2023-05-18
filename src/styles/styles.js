import styled from "styled-components";

export const ItemList = styled.div`
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  padding: 0 76px;
`;
