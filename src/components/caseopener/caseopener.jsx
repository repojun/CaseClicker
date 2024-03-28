import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import { React, useEffect, useState } from "react";
import styles from "./caseopener.module.css";

const CaseOpener = () => {
    const {
        userStore: { user },
    } = useContextStore();

    const selectRandomItems = () => {

        const items = [];

        const case1 = [
            'karambit_fade',       // Contraband
            'glock_fade',          // Ultra Rare
            'deagle_codered',      // Ultra Rare
            'mp7_bloodsport',      // Rare
            'scar20_emerald',      // Rare
            'usp_stainless',       // Uncommon
            'awp_suninleo',        // Uncommon
            'deagle_mudder',       // Common
            'glock_candyapple',    // Common
            'mp7_gunsmoke',        // Common
            'glock_sanddune'       // Common
        ];

        let selectedRarity;

        // Selecting rarity based on random number
        const randomChoice = Math.random();
        console.log("RANDOM NUMBER: " + randomChoice)
        switch (true) {
            case (randomChoice <= 0.75):
                selectedRarity = 'Common';
                break;
            case (randomChoice <= 0.945):
                selectedRarity = 'Uncommon';
                break;
            case (randomChoice <= 0.9675):
                selectedRarity = 'Rare';
                break;
            case (randomChoice <= 0.9745):
                selectedRarity = 'Ultra Rare';
                break;
            default:
                selectedRarity = 'Contraband';
        }

        // Filter items based on the selected rarity
        const selectedItems = case1.filter(entname => {
            const item = user.inventory && user.inventory[entname];
            return item && item.purchasable === 0 && item.rarity === selectedRarity;
        });

        // Log the selected rarity and items
        const randomIndex = Math.floor(Math.random() * selectedItems.length);
        const randomValue = selectedItems[randomIndex];
        console.log("Selected Rarity:", selectedRarity);
        console.log("Selected Items:", randomValue);
    };

    return (
        <div>
            <button onClick={() => selectRandomItems()}>Select Random Items</button>
        </div>
    );
};

export default observer(CaseOpener);