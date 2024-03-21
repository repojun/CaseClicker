import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import React from "react";
import styles from "./storecomponent.module.css";
import ShopItem from "../shopitem/shopitem";

const StoreComponent = ({ purchase }) => { 
  const {
    userStore: { user },
  } = useContextStore();

  if (!user || !user.inventory) {
    return null;
  }

  const handlePurchase = (price, image, viewname, entityName) => {
    purchase(price, image, viewname, entityName);
  };

  const items = [];

  for (const key in user.inventory) {
    const item = user.inventory[key];

    if (item.purchasable > 0) {
      for (let i = 0; i < item.purchasable; i++) {
        console.log("hello " + item.viewname)
        items.push({
          title: item.viewname,
          price: item.price,
          image: item.image,
          entityName: key
        });
        
      }
    }
  }

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, size + index));
      index += size;
    }
    console.log("CHUNKY ARRAY: " + chunkedArr);
    return chunkedArr;
  };
  
  const rows = chunkArray(items, 3);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.itemContainer}>
          {row.map((item, itemIndex) => (
            <ShopItem
              key={itemIndex}
              price={"$" + item.price.toFixed(2)}
              title={item.title}
              image={item.image}
              click={() => handlePurchase(item.price, item.image, item.viewname, item.entityName)} 
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default observer(StoreComponent);