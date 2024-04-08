"use client";
import styles from "./maincontainer.module.css";
import { AiOutlineStock, AiOutlineSlack, AiOutlineSliders, AiOutlineSetting, AiOutlineDeploymentUnit, AiOutlineDashboard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import SettingsModal from "../settingsmodal/settingsmodal";
import { GoTrophy } from "react-icons/go";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineBackpack } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

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
    const audio = new Audio("/sfx/clickButton.wav");
    audio.play();
    setModal(!modal);
  };

  const navigate = useNavigate();

  const navigateFunction = (page) => {
    navigate(page);
    const audio = new Audio("/sfx/clickButton.wav");
    audio.play();
  };
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
              navigateFunction("/profile/" + user.username);
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
              navigateFunction("/dashboard/mainpage");
            }}
          >
            <IoGameControllerOutline /> Play Game
          </div>
          <div
            data-testid="cypress-main-investments"
            className={`${styles.navbutton} ${selectedTab === 3 ? styles.selected : ""}`}
            onClick={() => {
              navigateFunction("/dashboard/investments");
              selectTab(3);
            }}
          >
            <AiOutlineStock /> Investments
          </div>
          <div
            data-testid="cypress-main-inventory"
            className={`${styles.navbutton} ${selectedTab === 4 ? styles.selected : ""}`}
            onClick={() => {
              navigateFunction("/dashboard/inventory");
              selectTab(4);
            }}
          >
            {" "}
            <MdOutlineBackpack /> Inventory
          </div>

          <div
            data-testid="cypress-main-leaderboard"
            className={`${styles.navbutton} ${selectedTab === 5 ? styles.selected : ""}`}
            onClick={() => {
              navigateFunction("/dashboard/leaderboard");
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
              navigateFunction("/dashboard/store");
              selectTab(6);
            }}
          >
            {" "}
            <AiOutlineShop /> Store
          </div>
          <div
            data-testid="cypress-main-premiumstore"
            className={`${styles.navbutton} ${selectedTab === 7 ? styles.selected : ""}`}
            onClick={() => {
              navigateFunction("/dashboard/premiumstore");
              selectTab(7);
            }}
          >
            <IoDiamondOutline /> Profile Store
          </div>
          <div
            data-testid="cypress-main-messageboard"
            className={`${styles.navbutton} ${selectedTab === 6 ? styles.selected : ""}`}
            onClick={() => {
              navigateFunction("/dashboard/messageboard");
              selectTab(6);
            }}
          >
            <MdOutlineMessage /> Message Board
          </div>
          <div className={styles.navbutton} onClick={() => toggleModal()}>
            <AiOutlineSetting /> Settings
          </div>
        </div>
        <hr className={styles.divider}></hr>
        <div
          data-testid="cypress-main-messageboard"
          className={`${styles.navbuttonLogout} ${selectedTab === 6 ? styles.selected : ""}`}
          onClick={() => {
            navigateFunction("/dashboard/messageboard");
            selectTab(6);
          }}
        >
          <RiLogoutBoxRLine /> Log Out
        </div>
      </div>
      <div className={styles.right}>
        {/* <img className={styles.bgtest} src="/BG1.png" /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default observer(MainContainer);
