import { useCallback } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
`;
const BtnKakao = () => {
  const onClickBtn = useCallback(() => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`;
    window.location = url;
  }, []);
  return <Button onClick={onClickBtn}>카카오로 로그인하기</Button>;
};
export default BtnKakao;
