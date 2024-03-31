import styles from "./inventorymodal.module.css";
import { React, useState, useEffect } from "react";
import OutlineButton from "../outlinebutton/outlinebutton";
import Axios from "../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import CaseItem from "../caseitem/caseitem";
import Inventory from "../../Pages/dashboard/inventory/inventory";

const InventoryModal = ({ modal, toggleModal, price, image, itemName, rarity, purchasable, entityName }) => {
  const {
    userStore: { user },
  } = useContextStore();
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [itemOpenDetails, setItemOpenDetails] = useState(null);

  const handleModalsFinal = (price, entityName, sell, consume) => {
    toggleModal(null, null, price, entityName, null, null, sell, consume);
  };

  const recoil = [
    "flipknife", // Contraband
    "ak_asiimov", // Ultra Rare
    "usp_printstream", // Ultra Rare
    "usp_neonoir", // Rare
    "glock_neonoir", // Rare
    "awp_suninleo", // Uncommon
    "deagle_cobalt", // Uncommon
    "glock_sanddune", // Common
    "deagle_mudder", // Common
    "usp_labrynth", // Common
    "usp_desert", // Common
  ];

  const brokenfang = [
    "bayonet", // Contraband
    "glock_fade", // Ultra Rare
    "mp7_fade", // Ultra Rare
    "mp7_bloodsport", // Rare
    "scar20_emerald", // Rare
    "usp_stainless", // Uncommon
    "awp_redline", // Uncommon
    "deagle_mudder", // Common
    "glock_candyapple", // Common
    "mp7_gunsmoke", // Common
    "awp_safarimesh", // Common
  ];

  const dream = [
    "karambit_fade", // Contraband
    "awp_fade", // Ultra Rare
    "ump_fade", // Ultra Rare
    "ak_icecoaled", // Rare
    "deagle_kumicho", // Rare
    "awp_aetheris", // Uncommon
    "ak_redlaminate", // Uncommon
    "scar20_carbon", // Common
    "ak_safarimesh", // Common
    "awp_safarimesh", // Common
    "deagle_conspiracy", // Common
  ];

  useEffect(() => {
    populateRows(entityName);
  }, [entityName]); // Call selectRandomItems whenever entityName changes

  const populateRows = (caseName) => {
    let images = [];

    if (caseName == "brokenfang") {
      images = brokenfang
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);
    }

    if (caseName == "dream") {
      images = dream
        .map((entname) => {
          const item = user.inventory && user.inventory[entname];
          return item ? { image: item.image, rarity: item.rarity } : null;
        })
        .filter((item) => item !== null);
    }

    if (caseName == "recoil") {
      images = recoil
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

  const selectRandomItems = async (caseName, price) => {
    console.log("CASE NAME: " + caseName);
    handleModalsFinal(price, caseName, false, true);
    const getRarity = () => {
      let selectedRarity;

      const randomChoice = Math.random();

      switch (true) {
        case randomChoice <= 0.4:
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

      selectedItems = brokenfang.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = brokenfang
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

      selectedItems = dream.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = dream
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

    if (caseName === "recoil") {
      const selectedRarity = getRarity();

      selectedItems = recoil.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = recoil
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
      add: true,
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
              Market Value: <span className={styles.moneyFinal}>{"$" + itemOpenDetails.price?.toFixed(2)}</span>
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
              Market Value: <span className={styles.money}>{"$" + price?.toFixed(2)}</span>
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
              {purchasable == 1 && (
                <div onClick={toggleModal}>
                  <OutlineButton title="Open" minWidth={"60px"} click={() => selectRandomItems(entityName, price)} />
                </div>
              )}
              <div onClick={toggleModal}>
                <OutlineButton title="Sell" minWidth={"60px"} click={() => handleModalsFinal(price, entityName, true, false)} />
              </div>
              <div>
                <OutlineButton title="Close" minWidth={"60px"} click={toggleModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(InventoryModal);
