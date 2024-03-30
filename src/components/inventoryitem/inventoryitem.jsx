import styles from "./inventoryitem.module.css";
import React from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const InventoryItem = ({ image, price, click, rarity, title, children, className = " ", ...props }) => {
  const {
    userStore: { user, setBalance },
  } = useContextStore();

  // Determine the CSS class based on the rarity
  let rarityClass = styles.inventoryItemCard; // Default to base class
  if (rarity === "Contraband") {
    rarityClass = styles.Contraband;
  } else if (rarity === "Ultra Rare") {
    rarityClass = styles.UltraRare;
  } else if (rarity === "Rare") {
    rarityClass = styles.Rare;
  } else if (rarity === "Uncommon") {
    rarityClass = styles.Uncommon;
  } else if (rarity === "Common") {
    rarityClass = styles.Common;
  }

  return (
    <div className={`${styles.inventoryItemCard} ${rarityClass}`} onClick={click}>
      <div className={styles.inventoryItemCardContent}>
        <div className={styles.inventoryItemCardTop}>
          <img src={image} className={styles.inventoryItemCardImage} alt=""></img>
        </div>
        <div className={styles.inventoryItemCardBottom}>
          <div>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default observer(InventoryItem);
