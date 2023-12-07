import styles from "./inventoryitem.module.css";
import React  from 'react';
const InventoryItem = ({ image, price, title, children, className = " ", ...props }) => {
  return (
    <div className={styles.inventoryItemCard}>
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

export default InventoryItem;
