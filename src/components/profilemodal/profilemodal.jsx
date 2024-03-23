import styles from "./profilemodal.module.css";
import { React, useState } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const ProfileModal = ({ modal, toggleModal, image, itemName, finalPurchase, entityName }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Profile Settings</div>
            <img className={styles.itemCardImage} src={image} alt="" />
            <div>Profile Picture Link:</div>
            <input type="text" className={styles.searchBar} placeholder="Search.."></input>
            <div className={styles.buttonContainer}>
              <div onClick={() => finalPurchase(entityName)}>
                <OutlineButton title="Confirm" minWidth={"80px"} />
              </div>
              <div onClick={toggleModal}>
                <OutlineButton title="Cancel" minWidth={"80px"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(ProfileModal);
