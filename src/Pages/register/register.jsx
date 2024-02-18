import OutlineButton from "../../components/outlinebutton/outlinebutton";
import styles from "./register.module.css";
import React, { useState, useEffect } from "react";
import Axios from "../../api/agent";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      console.log("Hello im here")
      // regex/.length()
      const query = await Axios("/api/register", "POST", { // creates axios query, goes to agent.js
        email,
        username,
        password,
      });
      navigate("/dashboard/");
    } catch (error) {
      const errorCode = error.response.status;
      const errorMessage = error.response.data;

      if (errorCode === 400) {
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
          <OutlineButton
            title="Register"
            type="submit"
            click={handleRegister}
          ></OutlineButton>
          <OutlineButton
            title="Sign In"
            click={() => navigate("/login")}
          ></OutlineButton>
        </div>
      </div>
    </div>
  );
}
