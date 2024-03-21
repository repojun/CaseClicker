import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import React from "react";
import styles from "./inventorycomponent.module.css";
import InventoryItem from "../inventoryitem/inventoryitem";


const InventoryComponent = () => {
    const {
        userStore: { user },
    } = useContextStore();

    if (!user || !user.inventory) {
        return null;
    }

    const items = [];

    for (const key in user.inventory) {
        const item = user.inventory[key];

        if (item.value > 0) {
            for (let i = 0; i < item.value; i++) {
                items.push({
                    name: key,
                    value: item.value,
                    price: "£" + item.price.toFixed(2),
                    image: item.image
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
        console.log("CHUNKY ARRAY: " + chunkedArr)
        return chunkedArr;
    };

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
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}


export default observer(InventoryComponent)



