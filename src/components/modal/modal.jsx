import styles from "./modal.module.css";
import { React, useState } from 'react';
import OutlineButton from "../outlinebutton/outlinebutton";


const Modal = ({ modal, toggleModal }) => {
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
                            src={"/brokenfangnew.png"}
                            alt=''
                        />
                        <div>
                            Are you sure you would like to purchase this item?
                        </div>
                        <div className={styles.buttonContainer}>
                            <div onClick={toggleModal}>
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

export default Modal