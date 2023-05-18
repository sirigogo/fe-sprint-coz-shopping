import Router from "./components/Router";
import "./styles/reset.scss";
import "./styles/global.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 80px;
`;

const App = () => {
  return (
    <>
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
};

export default App;
