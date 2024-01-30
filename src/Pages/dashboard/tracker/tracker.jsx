import styles from "./tracker.module.css"

import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import React from 'react';
export default function Tracker() {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <Header title="Item Tracker"> </Header>
          <div className={styles.titleSubtext}>
            Track the growth of any item present on the market.
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.buttonContainerMain}>
              <div className={styles.buttonContainerLeft}>
                <div className={styles.gradientButtonAdd}>+ Add Item</div>
              </div>
              <div className={styles.buttonContainerRight}>
                <OutlineButton title="Set" />
                <OutlineButton title="Add SCR" />
                <OutlineButton title="Search" />
                <OutlineButton title="Sort" />
              </div>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.mainTable}>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Buy Orders</th>
                  <td>Price</td>
                  <td>% Change</td>
                  <td>Actions</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img src="/dnn.png" className={styles.itemIcon} alt=''></img>{" "}
                      Dreams &amp; Nightmares Case{" "}
                    </div>
                  </td>
                  <td>145,288</td>
                  <td>4,545,889</td>
                  <td>£1.12 </td>
                  <td>
                    <span className={styles.priceLoss}> ↓ 3.2 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        src="/brokenfang.png"
                        className={styles.itemIcon}
                        alt=''
                      ></img>{" "}
                      Broken Fang Case
                    </div>
                  </td>
                  <td>10,452</td>
                  <td>588,995</td>
                  <td>£3.45 </td>
                  <td>
                    <span className={styles.priceGain}> ↑ 1.5 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        src="/breakout.png"
                        alt=''
                        className={styles.itemIcon}
                      ></img>{" "}
                      Stockholm Contenders 2021 Capsule
                    </div>
                  </td>
                  <td>2551</td>
                  <td>209,343</td>
                  <td>£2.73 </td>
                  <td>
                    <span className={styles.priceGain}> ↑ 2.5 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        alt=''
                        src="/forzeholo.png"
                        className={styles.itemIcon}
                      ></img>{" "}
                      forZe eSports (Holo)
                    </div>
                  </td>
                  <td>68</td>
                  <td>88,026</td>
                  <td>£2.53 </td>
                  <td>
                    <span className={styles.priceLoss}> ↓ 1.8 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        alt=''
                        src="/clutchcase.png"
                        className={styles.itemIcon}
                      ></img>{" "}
                      Clutch Case (Holo)
                    </div>
                  </td>
                  <td>227558</td>
                  <td>4,623,026</td>
                  <td>£0.67 </td>
                  <td>
                    <span className={styles.priceGain}> ↑ 3.7 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

