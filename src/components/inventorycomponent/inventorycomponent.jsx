import {observer} from "mobx-react-lite";
import React from "react";
import useContextStore from "../../context";
import styles from "./inventorycomponent.module.css";
import InventoryItem from "../inventoryitem/inventoryitem";

const InventoryComponent = ({purchase}) => {
  const {
    userStore: {user: {inventory = {}} = {}},
  } = useContextStore();

  const items = Object.keys(inventory).map((key) => ({
    ...inventory[key],
    name: key,
  })).filter(({value}) => value > 0).map((item) => {
    
    if (item.value > 1) {
      return Array.from({length: item.value}, () => item) 
    }

    return item;
  }).flat(Infinity);

  if (!items.length) return <div>Empty Inventory</div>;

  const handlePurchase = (
    price,
    image,
    viewname,
    entityName,
    rarity,
    purchasable
  ) => {
    purchase(price, image, viewname, entityName, rarity, purchasable);
  };

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, size + index));
      index += size;
    }

    return chunkedArr;
  };

  const rows = chunkArray(items, 8);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.inventoryRow}>
          {row.map((item, itemIndex) => (
            <InventoryItem
              key={itemIndex}
              image={item.image}
              rarity={item.rarity}
              purchasable={item.purchasable}
              price={"$" + item.price.toFixed(2)}
              click={() => {
                handlePurchase(
                  item.price,
                  item.image,
                  item.viewname,
                  item.entname,
                  item.rarity,
                  item.purchasable
                );
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default observer(InventoryComponent);