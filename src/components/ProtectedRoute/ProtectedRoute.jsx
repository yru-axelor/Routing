import React from "react";
import img from "./../../assets/protected.png"
import styles from './ProtectedRoute.module.css'
export const ProtectedRoute = ({ isLogin }) => {
  return <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.left}><img src={img} alt="" /> </div>
      <div className={styles.right}>
        <h2>Protect Your <br />
          Important Data </h2>
      </div>
    </div></div>;
};
