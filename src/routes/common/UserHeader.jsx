import React, { useEffect, useState } from "react";
import styles from "./UserHeader.module.css";
import UserJoin from "../member/UserJoin";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = ({ loginInfo, setLoginInfo }) => {
  //로그인 정보를 저장할 state변수
  // const [loginInfo, setLoginInfo] = useState(null)
  const nav = useNavigate();

  return (
    <div className={styles.headder_container}>
      <div className={styles.login_div}>
        {loginInfo == null ? (
          <>
            <span>
              <Link to={"/login"}>LOGIN</Link>
            </span>
            <span>
              <Link to={"/user"}>JOIN</Link>
            </span>
          </>
        ) : (
          <>
            <span>{loginInfo.userId}</span>
            <span
              onClick={() => {
                sessionStorage.removeItem("loginInfo");
                setLoginInfo(null);
                nav("/");
              }}
            >
              Logout
            </span>
          </>
        )}
      </div>
      <div className={styles.banner_div}>
        <img src="/book_banner.PNG" />
        <p>BOOK SHOP</p>
      </div>
      <div className={styles.menu_div}>
        <ul className={styles.menu_ul}>
          <li>전체</li>
          <li>IT/인터넷</li>
          <li>소설</li>
          <li>자기계발</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHeader;
