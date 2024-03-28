import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import React from "react";
import styles from "./inventorycomponent.module.css";
import InventoryItem from "../inventoryitem/inventoryitem";
import InventoryModal from "../inventorymodal/inventorymodal";

const InventoryComponent = ({purchase}) => {
  const {
    userStore: { user },
  } = useContextStore();

  if (!user || !user.inventory) {
    return null;
  }

  const handlePurchase = (price, image, viewname, entityName) => {
    console.log(price);
    console.log(image);
    console.log(viewname);
    console.log(entityName);
    purchase(price, image, viewname, entityName);
  };

  const items = [];

  for (const key in user.inventory) {
    const item = user.inventory[key];

    if (item.value > 0) {
      for (let i = 0; i < item.value; i++) {
        items.push({
          name: key,
          value: item.value,
          price: item.price,
          image: item.image,
          viewname: item.viewname,
          entity: item.entname
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

    return chunkedArr;
  };

  console.log(items)

  const rows = chunkArray(items, 8);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div>
          <div key={rowIndex} className={styles.inventoryRow}>
            {row.map((item, itemIndex) => (
              <InventoryItem
                key={itemIndex}
                image={item.image}
                price={"$" + item.price.toFixed(2)}
                click={() => {handlePurchase(item.price, item.image, item.viewname, item.entity)}}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default observer(InventoryComponent);
