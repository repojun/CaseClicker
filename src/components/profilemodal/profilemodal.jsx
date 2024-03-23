import styles from "./profilemodal.module.css";
import { React, useState } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const ProfileModal = ({ modal, toggleModal }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Profile Settings</div>
            <div>Profile Picture Link:</div>
            <input type="text" className={styles.searchBar} placeholder="Enter image link..."></input>
            <div className={styles.buttonContainer}>
              <div>
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
