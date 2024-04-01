import styles from "./settingsmodal.module.css";
import React, { useState, useEffect } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import CheckBox from "../checkbox/checkbox";

const SettingsModal = ({ modal, toggleModal }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  const [disableSound, setDisableSound] = useState(false);

  // Effect to mute all sounds when disableSound changes
  useEffect(() => {
    const allAudioElements = document.querySelectorAll("audio");
    allAudioElements.forEach((audio) => {
      audio.volume = disableSound ? 0 : 1;
    });
  }, [disableSound]);

  const handleDisableSound = () => {
    setDisableSound(!disableSound);
  };

  const handlePlayThemeSong = () => {
    setPlayThemeSong(!playThemeSong);
  };

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Settings</div>

            <CheckBox
              id={1}
              title="Disable Sound"
              description="Disable all sound effects."
              checked={disableSound}
              onChange={handleDisableSound}
            />
            <CheckBox
              id={2}
              title="Enable Theme Song"
              description="Play the theme song."
            />

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