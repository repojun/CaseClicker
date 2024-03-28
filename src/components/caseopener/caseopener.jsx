import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import { React } from "react";
import styles from "./caseopener.module.css";

const CaseOpener = () => {
    const {
        userStore: { user },
    } = useContextStore();

    const selectRandomItems = (caseName) => {

        const getRarity = () => {
            let selectedRarity;

            const randomChoice = Math.random();

            switch (true) {
                case (randomChoice <= 0.75):
                    selectedRarity = 'Common';
                    break;
                case (randomChoice <= 0.945):
                    selectedRarity = 'Uncommon';
                    break;
                case (randomChoice <= 0.97):
                    selectedRarity = 'Rare';
                    break;
                case (randomChoice <= 0.995):
                    selectedRarity = 'Ultra Rare';
                    break;
                default:
                    selectedRarity = 'Contraband';
            }

            return selectedRarity;
        }

        if (caseName == "brokenfang") {
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

            const selectedRarity = getRarity();

            // Filter items based on the selected rarity
            const selectedItems = case1.filter(entname => {
                const item = user.inventory && user.inventory[entname];
                return item && item.purchasable === 0 && item.rarity === selectedRarity;
            });

            const randomIndex = Math.floor(Math.random() * selectedItems.length);
            const randomValue = selectedItems[randomIndex];

            console.log("Selected Rarity:", selectedRarity);
            console.log("Selected Items:", randomValue);
        }

        if (caseName == "dream") {
            const case2 = [
                'karambit_fade', // Contraband
                'awp_fade', // Ultra Rare
                'usp_printstream', // Ultra Rare
                'ak_icecoaled', // Rare
                'deagle_kumicho', // Rare
                'ak_firstclass', // Uncommon
                'ak_redlaminate', // Uncommon
                'usp_guardian', // Common
                'ak_safarimesh', // Common
                'glock_reach', // Common
                'deagle_mudder', // Common
            ]

            const selectedRarity = getRarity();

            const selectedItems = case2.filter(entname => {
                const item = user.inventory && user.inventory[entname];
                return item && item.purchasable === 0 && item.rarity === selectedRarity;
            });

            const randomIndex = Math.floor(Math.random() * selectedItems.length);
            const randomValue = selectedItems[randomIndex];

            console.log("Selected Rarity:", selectedRarity);
            console.log("Selected Items:", randomValue);
        }
    };

    return (
        <div>
            <button onClick={() => selectRandomItems("brokenfang")}>Select Random Items</button>
        </div>
    );
};

export default observer(CaseOpener);