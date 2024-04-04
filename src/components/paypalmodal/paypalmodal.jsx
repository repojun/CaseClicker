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

  let packageValue = 0;
  switch (price) {
    case 5.99:
      packageValue = 1000
      break;
    case 25.99:
      packageValue = 10000
      break;
    case 49.99:
      packageValue = 100000
      break;
  }

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Purchase Money Package</div>
            <div>
              {" "}
              You are purchasing the <span className={styles.money}>${packageValue.toFixed(2)}</span> Money Package.
            </div>
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
