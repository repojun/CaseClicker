import OutlineButton from "../../components/outlinebutton/outlinebutton";
import styles from "./login.module.css";
import React, { useState } from "react";
import Axios from "../../api/agent";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const query = await Axios("/api/login", "POST", { username, password });
      navigate("/profile/" + username)
    } catch (error) {
      const errorCode = error.response.status;
      const errorMessage = error.response.data;

      if (errorCode) {
        toast.error(errorMessage, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <div className={styles.loginContainer}>
        {/* <form action="/api/signin" method="POST"> */}
        <form>
          <div className={styles.inputContainer}>
            <div className={styles.headerContainer}>User Login</div>
            <input
              data-testid="cypress-login-username"
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
              data-testid="cypress-login-password"
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
            <div data-testid="cypress-login-button">
              <OutlineButton title="Login" type="submit" click={handleLogin}></OutlineButton>
            </div>
          </div>
          <div className={styles.textButton} onClick={() => navigate("/register")}>Not registered? Create an account</div>

        </form>
      </div>
    </div>
  );
}
