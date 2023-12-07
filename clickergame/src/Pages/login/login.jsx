import OutlineButton from "../../components/outlinebutton/outlinebutton";
import styles from "./login.module.css";
import React, { useState } from "react";
import Axios from "../../api/agent";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // regex/.length()
      const query = await Axios("/login", "POST", { username, password });
      navigate("/dashboard/");
    } catch (error) {
      console.log(error);
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
              click={handleLogin}
            ></OutlineButton>
            <OutlineButton title="Sign Up"></OutlineButton>
          </div>
          <div className={styles.textButton}>Forgot your password?</div>
        </form>
      </div>
    </div>
  );
}
