import styles from "./inventorymodal.module.css";
import { React, useState, useEffect } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import CaseItem from "../caseitem/caseitem";
import Inventory from "../../Pages/dashboard/inventory/inventory";

const InventoryModal = ({ modal, toggleModal, price, image, itemName, rarity, entityName }) => {
  const {
    userStore: { user },
  } = useContextStore();
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [itemOpenDetails, setItemOpenDetails] = useState(null);

  const handleModalsFinal = () => {
    setItemOpenDetails(null);
    setOpenModal(false);
  };

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

  const handleItems = async (firstRow, secondRow, item) => {
    setFirstRow(firstRow);
    setSecondRow(secondRow);
    setFirstRow(firstRow);
    setSecondRow(secondRow);
    updateInventory(item);
    setOpenModal(true);
    setItemOpenDetails(item);
    const query = await Axios("/api/user/getitem", "POST", {
      item: item,
    });
    setItemOpenDetails(query);
  };

  const selectRandomItems = async (caseName) => {
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

      console.log("SELECTED: " + selectedItems);

      const images = case1
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);

      const firstRow = images.slice(0, 5);
      const secondRow = images.slice(5);
      const lastIndex = selectedItems.length - 1;
      const lastSelectedItem = selectedItems[Math.floor(Math.random() * (lastIndex + 1))];

      handleItems(firstRow, secondRow, lastSelectedItem);
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
      const lastIndex = selectedItems.length - 1;
      const lastSelectedItem = selectedItems[Math.floor(Math.random() * (lastIndex + 1))];

      handleItems(firstRow, secondRow, lastSelectedItem);
    }
  };

  const updateInventory = async (item) => {
    const query = await Axios("/api/user/setitem", "POST", {
      item: item,
    });
  };

  return (
    <>
      {openModal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>YOU HAVE UNBOXED:</div>
            <div className={`${styles.titleFinal} ${styles[`titleFinal${(itemOpenDetails.rarity || "").replace(/\s/g, "")}`]}`}>
              {itemOpenDetails.viewname} ({itemOpenDetails.rarity})
            </div>
            <img className={styles.itemCardImage} src={itemOpenDetails.image} alt="" />
            <div className={styles.spanFinal}>
              Market Value: <span className={styles.moneyFinal}>{"$" + itemOpenDetails.price}</span>
            </div>
            <div className={styles.buttonContainer}>
              <div>
                <OutlineButton
                  title="Keep"
                  minWidth={"60px"}
                  click={() => {
                    setOpenModal(false);
                  }}
                />
              </div>
              <div>
                <OutlineButton
                  title="Sell"
                  minWidth={"60px"}
                  click={() => {
                    setOpenModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <div className={styles.overlay}>
          <div className={styles.modalContent}>
            <div className={`${styles.titleFinal} ${rarity ? styles[`titleFinal${rarity.replace(/\s/g, "")}`] : styles.modalTitle}`}>
              {itemName} ({rarity ? rarity : "Regular"})
            </div>
            <img className={styles.itemCardImage} src={image} alt="" />
            <div>
              Market Value: <span className={styles.money}>{"$" + price}</span>
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
