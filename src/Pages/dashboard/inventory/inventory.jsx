import styles from "./inventory.module.css"
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { BsSteam } from "react-icons/bs";
import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import InventoryComponent from "../../../components/inventorycomponent/inventorycomponent";

function Inventory() {
  

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