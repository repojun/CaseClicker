import styles from "./inventorymodal.module.css";
import { React, useState } from 'react';
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const InventoryModal = ({ modal, toggleModal, price, image, itemName, finalPurchase, entityName }) => {
    const {
        userStore: { user },
    } = useContextStore();

    return (
        <>
            {modal && (
                <div className={styles.overlay} onClick={toggleModal}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalTitle}>
                            {itemName}
                        </div>
                        <img
                            className={styles.itemCardImage}
                            src={image}
                            alt=''
                        />
                        <div>
                            Market Value: <span className={styles.money}>{"$" + price.toFixed(2)}</span></div>
                        <div>
                            <span style={{ fontWeight: "bold" }}>Actions: </span>
                        </div>
                        <div className={styles.buttonContainer}>
                            <div onClick={toggleModal}>
                                <OutlineButton title="Open" minWidth={"60px"} />
                            </div>
                            <div onClick={toggleModal}>
                                <OutlineButton title="Sell" minWidth={"60px"} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default observer(InventoryModal)