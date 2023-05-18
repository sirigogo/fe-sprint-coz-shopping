import styled from "styled-components";
const Btn = styled.button`
  padding: 4px 8px;
  background: blue;
  color: #fff;
  font-size: 12px;
  border: none;
`;

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
export default Button;
