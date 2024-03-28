import styles from "./inventoryitem.module.css";
import React from 'react';
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
const InventoryItem = ({ image, price, click, title, children, className = " ", ...props }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  return (
    <div className={styles.inventoryItemCard} onClick={click}>
      <div className={styles.inventoryItemCardContent}>
        <div className={styles.inventoryItemCardTop}>
          <img
            src={image}
            className={styles.inventoryItemCardImage}
            alt=''
          ></img>
        </div>
        <div className={styles.inventoryItemCardBottom}>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(InventoryItem);
