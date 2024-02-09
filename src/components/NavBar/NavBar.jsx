import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
export const NavBar = ({ isLogin }) => {
  return (
    <div className={styles.container}>
    <ul className={styles.ul}>
      <NavLink to={"/"} className={styles.a}>
        Home
      </NavLink>
      <NavLink to={"/protected"} className={styles.a}>
        Protected Page
      </NavLink>
      {!isLogin && <NavLink to={"/login"}>Login</NavLink>}
    </ul></div>
  );
};
