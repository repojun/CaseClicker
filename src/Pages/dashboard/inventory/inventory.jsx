import styles from "./inventory.module.css"
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import InventoryItem from "../../../components/inventoryitem/inventoryitem";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import { BsSteam } from "react-icons/bs";
import React  from 'react';
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";

function Inventory() {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title="Inventory"> </Header>
          <div className={styles.titleSubtext}>
            {" "}
            View and search through your CSGO inventory effortlessly.
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
                <OutlineButton title="Set" />
                <OutlineButton title="Add SCR" />
                <OutlineButton title="Filter" />
                <input type="text" className={styles.searchBar} placeholder="Search.."></input>
              </div>
            </div>
            <div className={styles.inventoryContainer}>
              <div className={styles.inventoryBox}>
                <div className={styles.inventoryColumn}>
                  <div className={styles.inventoryRow}>
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/glockfade.png" price="£ 1,800" />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/recoilcasenew.png" price="£ 0.65" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                  </div>
                  <div className={styles.inventoryRow}>
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/stockholmdust.png" price="£ 0.65" />
                    <InventoryItem image="/overpassparis.png" price="£ 2.32" />
                    <InventoryItem  
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem image="/glockfade.png" price="£ 1,800" />
                    <InventoryItem image="/stockholmdust.png" price="£ 3.52" />
                    <InventoryItem image="/overpassparis.png" price="£ 2.32" />
                  </div>
                  <div className={styles.inventoryRow}>
                    <InventoryItem image="/recoilcasenew.png" price="£ 0.65" />
                    <InventoryItem image="/overpassparis.png" price="£ 2.32" />
                    <InventoryItem image="/recoilcasenew.png" price="£ 0.65" />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem image="/negev.png" price="£ 1.26" />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem image="/recoilcasenew.png" price="£ 0.65" />
                    <InventoryItem image="/overpassparis.png" price="£ 2.32" />
                  </div>
                  <div className={styles.inventoryRow}>
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem image="/recoilcasenew.png" price="£ 0.65" />
                    <InventoryItem image="/brokenfangnew.png" price="£ 3.52" />
                    <InventoryItem image="/stockholmdust.png" price="£ 0.65" />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                    <InventoryItem
                      image="/dreamnightmaresnew.png"
                      price="£ 1.24"
                    />
                  </div>
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