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
    userStore: { user, setItemAdd },
  } = useContextStore();
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [itemOpenDetails, setItemOpenDetails] = useState(null);

  const handleModalsFinal = (price, entityName, sell, consume, keep) => {
    toggleModal(null, null, price, entityName, null, null, sell, consume, keep);
  };

  const handleClose = () => {
    toggleModal();
    setFirstRow(null);
    setSecondRow(null);
  };

  const lunchbox = [
    "strangeliquid", // Contraband
    "robosandwich", // Ultra Rare
    "festivesandwich", // Rare
    "fishcake", // Rare
    "steak", // Uncommon
    "sandwich", // Uncommon
    "purple_soda", // Common
    "yellow_soda", // Common
    "milk", // Common
    "banana", // Common
  ];

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
    "ak_redline", // Uncommon
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

  const electron = [
    "karambit_gold", // Contraband
    "awp_gungir", // Ultra Rare
    "ak_gold", // Ultra Rare
    "m4a1_goldencoil", // Rare
    "usp_killconfirmed", // Rare
    "m4a1_icarusfell", // Uncommon
    "deagle_sunset", // Uncommon
    "awp_wormgod", // Common
    "sg_pulse", // Common
    "awp_boom", // Common
    "deagle_mudder", // Common
  ];

  useEffect(() => {
    populateRows(entityName);
  }, [entityName]); // Call selectRandomItems whenever entityName changes

  const populateRows = (caseName) => {
    let images = [];

    switch (caseName) {
      case "brokenfang":
        images = brokenfang;
        break;
      case "dream":
        images = dream;
        break;
      case "recoil":
        images = recoil;
        break;
      case "lunchbox":
        images = lunchbox;
        break;
      case "electron":
        images = electron;
        break;
      default:
        images = null;
        console.log("Invalid case name");
        return;
    }

    images = images
      .map((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item ? { image: item.image, rarity: item.rarity } : null;
      })
      .filter((item) => item !== null);

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
        case randomChoice <= 0.6:
          selectedRarity = "Common";
          break;
        case randomChoice <= 0.95:
          selectedRarity = "Uncommon";
          break;
        case randomChoice <= 0.9875:
          selectedRarity = "Rare";
          break;
        case randomChoice <= 0.9975:
          selectedRarity = "Ultra Rare";
          break;
        default:
          selectedRarity = "Contraband";
      }

      return selectedRarity;
    };

    const handleCase = (caseItems) => {
      const selectedRarity = getRarity();

      let selectedItems = caseItems.filter((entname) => {
        const item = user.inventory && user.inventory[entname];
        return item && item.purchasable === 0 && item.rarity === selectedRarity;
      });

      const images = caseItems
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
    };

    switch (caseName) {
      case "brokenfang":
        handleCase(brokenfang);
        break;
      case "dream":
        handleCase(dream);
        break;
      case "recoil":
        handleCase(recoil);
        break;
      case "lunchbox":
        handleCase(lunchbox);
        break;
      case "electron":
        handleCase(electron);
        break;
      default:
        console.log("Invalid case name");
    }
  };

  const updateInventory = async (item) => {
    setItemAdd(item, true);
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
                    setOpenModal(!openModal);
                  }}
                />
              </div>
              <div>
                <OutlineButton
                  title="Sell"
                  minWidth={"60px"}
                  click={() => {
                    setOpenModal(!openModal);
                    handleModalsFinal(itemOpenDetails.price, itemOpenDetails.entname, true, false);
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
              {firstRow && firstRow.length > 0 && (
                <div className={styles.modalCaseItems}>
                  {firstRow.map((item, index) => (
                    <CaseItem key={index} image={item.image} rarity={item.rarity} />
                  ))}
                </div>
              )}

              {secondRow && secondRow !== null && secondRow.length > 0 && (
                <div className={styles.modalCaseItems}>
                  {secondRow.map((item, index) => (
                    <CaseItem key={index + 5} image={item.image} rarity={item.rarity} />
                  ))}
                </div>
              )}
            </div>
            <div className={styles.buttonContainer}>
              {purchasable == 1 && (
                <div onClick={toggleModal}>
                  <OutlineButton
                    title="Open"
                    minWidth={"60px"}
                    click={() => {
                      selectRandomItems(entityName, price);
                      setFirstRow(null);
                      setSecondRow(null);
                    }}
                  />
                </div>
              )}
              <div onClick={toggleModal}>
                <OutlineButton
                  title="Sell"
                  minWidth={"60px"}
                  click={() => {
                    handleModalsFinal(price, entityName, true, false);
                    setFirstRow(null);
                    setSecondRow(null);
                  }}
                />
              </div>
              <div>
                <OutlineButton
                  title="Close"
                  minWidth={"60px"}
                  click={() => {
                    handleClose();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(InventoryModal);
