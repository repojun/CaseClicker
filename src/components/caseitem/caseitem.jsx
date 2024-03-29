import styles from "./caseitem.module.css";
import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";

const CaseItem = ({ image, price, click, rarity }) => {
    // useEffect(() => {
    //     setColourByRarity(rarity);
    // }, [rarity]);

    // const setColourByRarity = (rarity) => {
    //     let colour;
    //     switch (rarity) {
    //         case "Contraband":
    //             colour = "#FFD700"; // Golden colour
    //             break;
    //         case "Ultra Rare":
    //             colour = "#FF0000"; // Red colour
    //             break;
    //         case "Rare":
    //             colour = "#FFC0CB"; // Pink colour
    //             break;
    //         case "Uncommon":
    //             colour = "#800080"; // Purple colour
    //             break;
    //         case "Common":
    //             colour = "#0000FF"; // Blue colour
    //             break;
    //         default:
    //             colour = "#FFD816"; // Default colour
    //             break;
    //     }
    //     // Set background color for the specific item
    //     const itemElement = document.getElementById(`case-item-${rarity}`);
    //     if (itemElement) {
    //         itemElement.style.backgroundColor = colour;
    //     }
    // };

    return (
        // <div className={`${styles.inventoryItemCard} rarity-${rarity}`} onClick={click} id={`case-item-${rarity}`}>
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

export default observer(CaseItem);