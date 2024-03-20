import styles from "./storemodal.module.css";
import { React, useState } from 'react';
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const StoreModal = ({ modal, toggleModal, image, itemName, finalPurchase }) => {
    const {
        userStore: { user, setBalance },
    } = useContextStore();

    return (
        <>
            {modal && (
                <div className={styles.overlay} onClick={toggleModal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalTitle}>
                            Purchase Confirmation
                        </div>
                        <img
                            className={styles.itemCardImage}
                            src={image}
                            alt=''
                        />
                        <div>
                            Are you sure you would like to purchase <span style={{ fontWeight: "bold" }}> "{itemName}"</span>?</div>
                        <div>
                        <span style={{ fontWeight: "bold" }}>Current Balance: </span> <span className={styles.money}>${user.balance.toFixed(2)} </span>
                        </div>
                        <div className={styles.buttonContainer}>
                            <div onClick={finalPurchase}>
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

export default observer(StoreModal)