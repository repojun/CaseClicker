"use client";
import styles from "./maincontainer.module.css";
import { AiOutlineStock, AiOutlineSlack, AiOutlineSliders, AiOutlineSetting, AiOutlineDeploymentUnit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import SettingsModal from "../settingsmodal/settingsmodal";
import { GoTrophy } from "react-icons/go";

const MainContainer = ({ children, className = " ", ...props }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const {
    userStore: { user },
  } = useContextStore();

  const [modal, setModal] = useState(false);

  const selectTab = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <SettingsModal modal={modal} toggleModal={toggleModal} />
      <div className={styles.left}>
        <div className={styles.welcomebox}>
          <img
            data-testid="cypress-main-profile"
            src={`${user.profilePicture}`}
            alt=" "
            className={styles.avatar}
            onClick={() => {
              navigate("/profile/" + user.username);
            }}
          ></img>
          <div>{user.username}</div>
        </div>
        <hr className={styles.divider}></hr>
        <div>
          <div
            data-testid="cypress-main-mainpage"
            className={`${styles.navbutton} ${selectedTab === 1 ? styles.selected : ""}`}
            onClick={() => {
              selectTab(1);
              navigate("/dashboard/mainpage");
            }}
          >
            {" "}
            <AiOutlineSliders /> Play Game
          </div>
          <div
            data-testid="cypress-main-dashboard"
            className={`${styles.navbutton} ${selectedTab === 2 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/");
              selectTab(2);
            }}
          >
            {" "}
            <AiOutlineDeploymentUnit /> Dashboard{" "}
          </div>
          <div
            data-testid="cypress-main-investments"
            className={`${styles.navbutton} ${selectedTab === 3 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/investments");
              selectTab(3);
            }}
          >
            {" "}
            <AiOutlineStock /> Investments
          </div>
          <div
            data-testid="cypress-main-inventory"
            className={`${styles.navbutton} ${selectedTab === 4 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/inventory");
              selectTab(4);
            }}
          >
            {" "}
            <AiOutlineSlack /> Inventory
          </div>

          <div
            data-testid="cypress-main-leaderboard"
            className={`${styles.navbutton} ${selectedTab === 5 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/leaderboard");
              selectTab(5);
            }}
          >
            {" "}
            <GoTrophy /> Leaderboard
          </div>

          {/* <GoTrophy /> */}
        </div>
        <hr className={styles.divider}></hr>

        <div>
          <div
            data-testid="cypress-main-store"
            className={`${styles.navbutton} ${selectedTab === 6 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/store");
              selectTab(6);
            }}
          >
            {" "}
            <AiOutlineSetting /> Store
          </div>
          <div
            data-testid="cypress-main-premiumstore"
            className={`${styles.navbutton} ${selectedTab === 7 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/premiumstore");
              selectTab(7);
            }}
          >
            {" "}
            <AiOutlineSetting /> Premium Store
          </div>
          <div className={styles.navbutton} onClick={() => toggleModal()}>
            <AiOutlineSetting /> Settings
          </div>
          <div
            data-testid="cypress-main-messageboard"
            className={`${styles.navbutton} ${selectedTab === 6 ? styles.selected : ""}`}
            onClick={() => {
              navigate("/dashboard/messageboard");
              selectTab(6);
            }}
          >
            {" "}
            <AiOutlineSetting /> Message Board
          </div>
        </div>
        <hr className={styles.divider}></hr>
      </div>
      <div className={styles.right}>
        {/* <img className={styles.bgtest} src="/BG1.png" /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default observer(MainContainer);
