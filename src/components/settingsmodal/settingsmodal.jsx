import styles from "./settingsmodal.module.css";
import { React } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import CheckBox from "../checkbox/checkbox";

const SettingsModal = ({ modal, toggleModal }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Settings</div>

            <CheckBox id={1} title="Enable FX" />
            <CheckBox id={2} title="Hello" />
            <CheckBox id={3} title="Hello" />
            <CheckBox id={4} title="Hello" />

            <div className={styles.buttonContainer}>
              <div onClick={toggleModal}>
                <OutlineButton title="Close" minWidth={"80px"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(SettingsModal);
