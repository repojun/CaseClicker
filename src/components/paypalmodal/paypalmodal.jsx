import { React, useState } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import styles from "./paypalmodal.module.css";
import PayPal from "../paypal/paypal";

const PaypalModal = ({ toggleModal, price, modal }) => {
  const {
    userStore: { user },
  } = useContextStore();

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>buy yo shit here</div>
            <PayPal total={price} userId={user.id}></PayPal>
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

export default PaypalModal;
