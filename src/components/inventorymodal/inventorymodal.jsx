import styles from "./inventorymodal.module.css";
import { React, useState, useEffect } from "react";
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
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);

  const case1 = [
    "karambit_fade", // Contraband
    "glock_fade", // Ultra Rare
    "deagle_codered", // Ultra Rare
    "mp7_bloodsport", // Rare
    "scar20_emerald", // Rare
    "usp_stainless", // Uncommon
    "awp_suninleo", // Uncommon
    "deagle_mudder", // Common
    "glock_candyapple", // Common
    "mp7_gunsmoke", // Common
    "glock_sanddune", // Common
  ];

  const case2 = [
    "karambit_fade", // Contraband
    "awp_fade", // Ultra Rare
    "usp_printstream", // Ultra Rare
    "ak_icecoaled", // Rare
    "deagle_kumicho", // Rare
    "ak_firstclass", // Uncommon
    "ak_redlaminate", // Uncommon
    "usp_guardian", // Common
    "ak_safarimesh", // Common
    "glock_reach", // Common
    "deagle_mudder", // Common
  ];

  useEffect(() => {
    populateRows(entityName);
  }, [entityName]); // Call selectRandomItems whenever entityName changes

  const populateRows = (caseName) => {
    let images = [];

    if (caseName == "brokenfang") {
      images = case1
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);
    }

    if (caseName == "dream") {
      images = case2
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);
    }

    const firstRow = images.slice(0, 5);
    const secondRow = images.slice(5);
    setFirstRow(firstRow);
    setSecondRow(secondRow);
  };

  const selectRandomItems = (caseName) => {
    const getRarity = () => {
      let selectedRarity;

      const randomChoice = Math.random();

      switch (true) {
        case randomChoice <= 0.75:
          selectedRarity = "Common";
          break;
        case randomChoice <= 0.945:
          selectedRarity = "Uncommon";
          break;
        case randomChoice <= 0.97:
          selectedRarity = "Rare";
          break;
        case randomChoice <= 0.995:
          selectedRarity = "Ultra Rare";
          break;
        default:
          selectedRarity = "Contraband";
      }

      return selectedRarity;
    };

    let selectedItems = [];
    if (caseName === "brokenfang") {
      const selectedRarity = getRarity();

      selectedItems = case1.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = case1
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);

      const firstRow = images.slice(0, 5);
      const secondRow = images.slice(5);
      setFirstRow(firstRow);
      setSecondRow(secondRow);

      console.log("rarity: " + selectedRarity);
      console.log("items " + selectedItems);

      const lastIndex = selectedItems.length - 1;
      const lastSelectedItem = selectedItems[Math.floor(Math.random() * (lastIndex + 1))];
      console.log("Last selected item: ", lastSelectedItem);
      updateInventory(lastSelectedItem);
    }

    if (caseName === "dream") {
      const selectedRarity = getRarity();

      selectedItems = case2.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = case2
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);

      const firstRow = images.slice(0, 5);
      const secondRow = images.slice(5);
      setFirstRow(firstRow);
      setSecondRow(secondRow);

      console.log("rarity: " + selectedRarity);
      console.log("items " + selectedItems);

      const lastIndex = selectedItems.length - 1;
      const lastSelectedItem = selectedItems[Math.floor(Math.random() * (lastIndex + 1))];
      console.log("Last selected item: ", lastSelectedItem);
      updateInventory(lastSelectedItem);
    }
  };

  const updateInventory = async (item) => {
    const query = await Axios("/api/user/setitem", "POST", {
      item: item,
    });
  }

  return (
    <>
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>{itemName}</div>
            <img className={styles.itemCardImage} src={image} alt="" />
            <div>
              Market Value: <span className={styles.money}>{"$" + price.toFixed(2)}</span>
            </div>
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

export default observer(InventoryModal);
