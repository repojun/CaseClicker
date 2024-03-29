import styles from "./inventorymodal.module.css";
import { React, useState } from 'react';
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import CaseItem from "../caseitem/caseitem";
import Inventory from "../../Pages/dashboard/inventory/inventory";

const InventoryModal = ({ modal, toggleModal, price, image, itemName, finalPurchase, entityName }) => {
    const {
        userStore: { user },
    } = useContextStore();
    const [selectedImages, setSelectedImages] = useState([]);
    const [firstRow, setFirstRow] = useState([]);
    const [secondRow, setSecondRow] = useState([]);


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

            const images = case2.map(entname => {
                const item = user.inventory && user.inventory[entname];
                return item ? { image: item.image, rarity: item.rarity } : null;
            }).filter(item => item !== null);


            const firstRow = images.slice(0, 5);
            const secondRow = images.slice(5);
            setSelectedImages(images);
            setFirstRow(firstRow);
            setSecondRow(secondRow);



            console.log("IMG " + selectedImages[0]);
            const randomIndex = Math.floor(Math.random() * selectedItems.length);
            const randomValue = selectedItems[randomIndex];

            console.log("Selected Rarity:", selectedRarity);
            console.log("Selected Items:", randomValue);
        }
    };

    return (
        <>
            {modal && (
                <div className={styles.overlay} >
                    <div className={styles.modalContent}>
                        <div className={styles.modalTitle}>
                            {itemName}
                        </div>
                        <img
                            className={styles.itemCardImage}
                            src={image}
                            alt=''
                        />
                        <div>
                            Market Value: <span className={styles.money}>{"$" + price.toFixed(2)}</span></div>
                        <div>
                            <div className={styles.modalCaseItems}>
                                {firstRow.map((item, index) => (
                                    <CaseItem key={index} image={item.image} rarity={item.rarity} />
                                ))}
                            </div>
                            <div className={styles.modalCaseItems}>
                                {secondRow.map((item, index) => (
                                    <CaseItem key={index + 5} image={item.image} rarity={item.rarity} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <div onClick={toggleModal}>
                                <OutlineButton title="Open" minWidth={"60px"} click={() => selectRandomItems(entityName)} />
                            </div>
                            <div onClick={toggleModal}>
                                <OutlineButton title="Sell" minWidth={"60px"} click={toggleModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default observer(InventoryModal)