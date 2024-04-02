import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import useContextStore from "../../context";
import styles from "./inventorycomponent.module.css";
import InventoryItem from "../inventoryitem/inventoryitem";
import Axios from "../../api/agent";

const InventoryComponent = ({ purchase }) => {
  const {
    userStore: { user: { inventory = {} } = {}, setNetWorth },
  } = useContextStore();

  const items = Object.keys(inventory)
    .map((key) => ({
      ...inventory[key],
      name: key,
    }))
    .filter(({ value }) => value > 0)
    .map((item) => {
      if (item.value > 1) {
        return Array.from({ length: item.value }, () => item);
      }
      return item;
    })
    .flat(Infinity)
    .sort((a, b) => b.price - a.price);

  useEffect(() => {
    let totalPrice = 0;

    if (items.length > 0) {
      totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    }

    console.log(totalPrice);

    // const updateNetworth = async () => {
    //   await Axios("/api/user/setnetworth", "POST", {
    //     networth: totalPrice,
    //   });
    // };

    // updateNetworth();
    setNetWorth(totalPrice);
  }, [inventory]);

  if (!items.length) return <div>Empty Inventory</div>;

  const handlePurchase = (price, image, viewname, entityName, rarity, purchasable) => {
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
                handlePurchase(item.price, item.image, item.viewname, item.entname, item.rarity, item.purchasable);
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default observer(InventoryComponent);
