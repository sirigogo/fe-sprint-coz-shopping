import Router from "./components/Router";
import "./styles/reset.scss";
import "./styles/global.scss";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  padding-top: 80px;
`;
export default App;
