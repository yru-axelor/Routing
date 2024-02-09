import React, { useState } from "react";
import styles from "./Login.module.css";
import { Input } from "../Input/Input";
export const Login = ({ setIsLogin }) => {
  const [credentials, setCredentials] = useState({ Username: "", Password: "" });
  const handleSubmit = (e) => {
    console.log(credentials.Username);
    e.preventDefault();
    if (credentials.Username === "admin" && credentials.Password === "admin") {
      console.log("entered");
      setIsLogin(true);
    }
  };
  return (
    <>
      <div className={styles.container}>
        
        <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.h3}>
          Login <span className={styles.span}> to proceed further</span>
        </h3>
          <div className={styles.items}>
            <Input
            className={styles.input} 
            type="text" 
            label={"Username"} 
            name={"Username"} 
            id={"Username"} 
            onChange={(e) => setCredentials({ ...credentials, "Username": e.target.value })} 
            />

          </div>
          <div className={styles.items}>
            <Input
            className={styles.input}
              type="password"
              label={"Password"}
              name={"Password"}
              id={"Password"}
              onChange={(e) => setCredentials({ ...credentials, "Password": e.target.value })}
            />
          </div>
          <div className={styles.btnContainer}>
          <button>submit</button>
          <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
};
