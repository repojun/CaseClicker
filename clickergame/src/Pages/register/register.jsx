import OutlineButton from "../../components/outlinebutton/outlinebutton";
import styles from "./register.module.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.mainContainer}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.loginContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.headerContainer}>Register</div>
          <input
            value={email}
            className={styles.inputBox}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          
          <input
            value={username}
            className={styles.inputBox}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            value={password}
            className={styles.inputBox}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <OutlineButton title="Register" type="submit"></OutlineButton>
        </div>
      </div>
    </div>
  );
}
