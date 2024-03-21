import styles from "./settingsmodal.module.css";
import { React } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const SettingsModal = ({ modal, toggleModal }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  return (
    <>
      {modal && (
        <div className={styles.overlay} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Purchase Confirmation</div>
            <div>
              Are you sure you would like to purchase
              <span style={{ fontWeight: "bold" }}>hello</span>?
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Current Balance: </span>
              <span className={styles.money}>hello</span>
            </div>
            <div className={styles.buttonContainer}>
              <div
                onClick={() => {
                  console.log("hey");
                }}
              >
                <OutlineButton title="Yes" minWidth={"50px"} />
              </div>
              <div onClick={toggleModal}>
                <OutlineButton title="No" minWidth={"50px"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(SettingsModal);
