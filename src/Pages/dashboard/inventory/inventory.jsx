import styles from "./inventory.module.css";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { FaMoneyCheck } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import InventoryComponent from "../../../components/inventorycomponent/inventorycomponent";
import InventoryModal from "../../../components/inventorymodal/inventorymodal";
import Axios from "../../../api/agent";
import useContextStore from "../../../context";

function Inventory() {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [entityName, setEntityName] = useState("");
  const [rarity, setRarity] = useState("");
  const [purchasable, setPurchasable] = useState("");
  const [networthFinal, setNetworthFinal] = useState(0);

  const {
    userStore: {
      user: { balance = 0 },
      setBalance,
      setItemAdd,
      getNetworth,
    },
  } = useContextStore();

  const networthHello = getNetworth();

  const toggleModal = async (image, itemName, price, entityName, rarity, purchasable, sell, consume) => {
    if (!sell) {
      setModal(!modal);
    }

    setImage(image);
    setItemName(itemName);
    setPrice(price);
    setEntityName(entityName);
    setRarity(rarity);
    setPurchasable(purchasable);

    if (consume == true) {
      const audio = new Audio("/sfx/caseOpen.wav");
      audio.play();
    } else {
      const audio = new Audio("/sfx/clickButton.wav");
      audio.play();
    }

    if (consume === true) {
      await Axios("/api/user/setitem", "POST", {
        item: entityName,
        add: false,
      });
      setItemAdd(entityName, false);
    }
    if (sell === true) {
      setItemAdd(entityName, false);

      var newBalanceVariable = balance + price;
      setBalance(newBalanceVariable);

      await Axios("/api/user/setbalance", "POST", {
        balance: newBalanceVariable,
      });

      await Axios("/api/user/setitem", "POST", {
        item: entityName,
        add: false,
      });
    }
  };

  const purchase = (price, image, itemName, entityName, rarity, purchasable) => {
    toggleModal(image, itemName, price, entityName, rarity, purchasable);
  };

  const finalPurchase = () => {
    console.log("placeholder");
  };

  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title="Inventory"> </Header>
          <div className={styles.titleSubtext}> View and search through your inventory effortlessly.</div>
          <div className={styles.mainContainer}>
            <div className={styles.buttonContainerMain}>
              <div className={styles.buttonContainerLeft}>
                <div className={styles.priceText}>
                  <FaMoneyCheck />
                  Total Price: <span className={styles.priceTag}> ${networthHello?.toFixed(2)} </span>{" "}
                </div>
              </div>
              <div className={styles.buttonContainerRight}>
                <OutlineButton
                  title="Refresh"
                  click={() => {
                    window.location.reload();
                  }}
                />
                <OutlineButton
                  title="Add SCR"
                  click={() => {
                    toggleModal();
                  }}
                />
                <OutlineButton title="Filter" />
                <input type="text" className={styles.searchBar} placeholder="Search.."></input>
              </div>
            </div>
            <div className={styles.inventoryContainer}>
              <div className={styles.inventoryBox}>
                <div className={styles.inventoryColumn}>
                  <InventoryComponent purchase={purchase} />
                </div>
              </div>
            </div>
          </div>
          <InventoryModal modal={modal} toggleModal={toggleModal} finalPurchase={finalPurchase} image={image} itemName={itemName} price={price} entityName={entityName} rarity={rarity} purchasable={purchasable} />
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Inventory);
