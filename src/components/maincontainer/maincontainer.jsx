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
  const {
    userStore: { user },
  } = useContextStore();

  const [modal, setModal] = useState(false);


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
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/mainpage");
            }}
          >
            <IoGameControllerOutline /> Play Game
          </div>
          <div
            data-testid="cypress-main-investments"
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/investments");
            }}
          >
            <AiOutlineStock /> Investments
          </div>
          <div
            data-testid="cypress-main-inventory"
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/inventory");
            }}
          >
            {" "}
            <MdOutlineBackpack /> Inventory
          </div>

          <div
            data-testid="cypress-main-leaderboard"
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/leaderboard");
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
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/store");
            }}
          >
            {" "}
            <AiOutlineShop /> Store
          </div>
          <div
            data-testid="cypress-main-premiumstore"
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/premiumstore");
            }}
          >
            <IoDiamondOutline /> Profile Store
          </div>
          <div
            data-testid="cypress-main-messageboard"
            className={styles.navbutton}
            onClick={() => {
              navigateFunction("/dashboard/messageboard");
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
          className={styles.navbuttonLogout}
          onClick={() => {
            navigateFunction("/dashboard/messageboard");
          }}
        >
          <RiLogoutBoxRLine /> Log Out
        </div>
      </div>
      <div className={styles.right}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default observer(MainContainer);
