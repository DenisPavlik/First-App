import style from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/social-network-97-1040773.png"
        alt="logo"
      />
      <div className={style.login_block}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
