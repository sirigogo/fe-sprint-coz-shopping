import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/user";
const Kakao = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { code } = queryString.parse(search);
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const KAKAO_LINK = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&code=${code}`;
  const getToken = async () => {
    try {
      const result = await axios.post(KAKAO_LINK, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
      const accessToken = result.data.access_token;
      const result2 = await axios.post(
        "https://kapi.kakao.com/v2/user/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      );
      dispatch(
        setUser({
          isLoggedIn: true,
          userInfo: result2.data.kakao_account.profile,
        })
      );
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          isLoggedIn: true,
          userInfo: result2.data.kakao_account.profile,
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <div>asdfasdasdf</div>
    </>
  );
};
export default Kakao;
