"use client";
import styles from "./maincontainer.module.css";
import { AiOutlineStock, AiOutlineSlack, AiOutlineSliders, AiOutlineSetting, AiOutlineDeploymentUnit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import React  from 'react';

const MainContainer = ({ children, className = " ", ...props }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.welcomebox}>
          <img src="/circlepfp.png" alt=' ' className={styles.avatar}></img>
          <div>Bahpu</div>
        </div>
        <hr className={styles.divider}></hr>
        <div>
        <div className={styles.navbutton} onClick={() => navigate('/dashboard/mainpage')}> <AiOutlineSliders /> Tracker</div>
        <div className={styles.navbutton} onClick={() => navigate('/dashboard')}>  <AiOutlineDeploymentUnit /> Dashboard </div>
        <div className={styles.navbutton} onClick={() => navigate('/dashboard/investments')}>  <AiOutlineStock /> Investments</div>
        <div className={styles.navbutton} onClick={() => navigate('/dashboard/inventory')}> <AiOutlineSlack /> Inventory</div>
        <div className={styles.navbutton} onClick={() => navigate('/dashboard/tracker')}> <AiOutlineSliders /> Tracker</div>
        <div className={styles.navbutton}> <AiOutlineSetting /> Settings</div>
        </div>
        <hr className={styles.divider}></hr>
        <div>
          <div className={styles.navbutton}>Later Use</div>
          <div className={styles.navbutton}>Graph</div>
          <div className={styles.navbutton}>Kutta</div>
          <div className={styles.navbutton}>Misc #2</div>
        </div>
        <hr className={styles.divider}></hr>
      </div>
      <div className={styles.right}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
