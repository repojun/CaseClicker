import OutlineButton from "../../components/outlinebutton/outlinebutton";
import styles from "./login.module.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


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
        {/* <form action="/api/signin" method="POST"> */}
        <form>
          <div className={styles.inputContainer}>
            <div className={styles.headerContainer}>User Login</div>
            <input
              className={styles.inputBox}
              value={username}
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
            <OutlineButton
              title="Login"
              type="submit"
            ></OutlineButton>
            <OutlineButton title="Sign Up"></OutlineButton>
          </div>
          <div className={styles.textButton}>Forgot your password?</div>
        </form>
      </div>
    </div>
  );
}
