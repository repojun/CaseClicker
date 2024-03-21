import styles from "./inventory.module.css"
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import InventoryItem from "../../../components/inventoryitem/inventoryitem";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { BsSteam } from "react-icons/bs";
import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import Axios from "../../../api/agent";
import { useState } from "react";
import InventoryComponent from "../../../components/inventorycomponent/inventorycomponent";

function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([]);

  const {
    userStore: { user, setBalance, setItem },
  } = useContextStore();

  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    // Increment the refresh key to trigger a re-render
    setRefreshKey(prevKey => prevKey + 1);
  };

  // const inventoryItems = [
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/glockfade.png", price: "£ 1,800" },
  //   { image: "/dreamnightmaresnew.png", price: "£ 1.24" },
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/recoilcasenew.png", price: "£ 0.65" },
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/brokenfangnew.png", price: "£ 3.52" },
  //   { image: "/stockholmdust.png", price: "£ 0.65" },
  //   { image: "/overpassparis.png", price: "£ 2.32" },
  //   { image: "/dreamnightmaresnew.png", price: "£ 1.24" },
  //   { image: "/glockfade.png", price: "£ 1,800" },
  //   { image: "/stockholmdust.png", price: "£ 3.52" },
  //   { image: "/overpassparis.png", price: "£ 2.32" },
  //   { image: "/recoilcasenew.png", price: "£ 0.65" },
  //   { image: "/overpassparis.png", price: "£ 2.32" },
  //   { image: "/recoilcasenew.png", price: "£ 0.65" },
  //   { image: "/dreamnightmaresnew.png", price: "£ 1.24" },
  //   { image: "/negev.png", price: "£ 1.26" },
  //   { image: "/dreamnightmaresnew.png", price: "£ 1.24" },
  //   { image: "/recoilcasenew.png", price: "£ 0.65" },
  //   { image: "/overpassparis.png", price: "£ 2.32" }
  // ];



  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title="Inventory"> </Header>
          <div className={styles.titleSubtext} onClick={() => test()}>
            {" "}
            View and search through your inventory effortlessly.
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.buttonContainerMain}>
              <div className={styles.buttonContainerLeft}>
                <div className={styles.priceText}>
                  {" "}
                  <BsSteam /> Total Price:{" "}
                  <span className={styles.priceTag}> £2837.39 </span>{" "}
                </div>
              </div>
              <div className={styles.buttonContainerRight}>
                <OutlineButton title="Refresh" click={() => {window.location.reload();}}/>
                <OutlineButton title="Add SCR" />
                <OutlineButton title="Filter" />
                <input type="text" className={styles.searchBar} placeholder="Search.."></input>
              </div>
            </div>
            <div className={styles.inventoryContainer}>
              <div className={styles.inventoryBox}>
                <div className={styles.inventoryColumn}>
                <InventoryComponent />
                </div>
              </div>
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(Inventory)