import { React, useState } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import styles from "./profilemodal.module.css";

const BioModal = ({ modal, toggleModal }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  const [bio, setBio] = useState("");

  const handleInputChange = (event) => {
    setBio(event.target.value);
  };

  const handleConfirm = async () => {
    const query = await Axios("/api/user/setbio", "POST", {
      bio: bio,
    });

    user.bio = bio;

    toggleModal();
    setBio("");
  };

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Profile Settings</div>
            <div>Write your bio:</div>
            <input data-testid="cypress-profile-bio-input" type="text" className={styles.searchBar} placeholder="Enter bio..." value={bio} onChange={handleInputChange} />
            <div className={styles.buttonContainer}>
              <div data-testid="cypress-profile-bio-confirm" onClick={() => handleConfirm()}>
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

export default observer(BioModal);
