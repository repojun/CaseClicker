import styles from "./investments.module.css";
import Axios from "../../../api/agent";
import MainContainer from "../../../components/maincontainer/maincontainer";
import Header from "../../../components/mainheader/header";
import SubContainer from "../../../components/subcontainer/subcontainer";
import OutlineButton from "../../../components/outlinebutton/outlinebutton";
import React, { useState } from "react";

var money = 0;
var multiplier = 1;
export default function Investments() {

  const handleCaseUpdate = async (skin) => {
    const query = await Axios("/api/user/setskin", "POST", {
      skin: skin,
    });
  }

  const [moneyArray, setMoneyArray] = useState([]);
  const clickTest = () => {
    const items = ['skin_test', 'skin_test2', 'skin_test3'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    console.log(randomItem);
    handleCaseUpdate(randomItem)

  }

  const handleClick = (e) => {
    money = money + 1 * multiplier;
    console.log(money);
    var Xlocation = e.clientX; // Get client's X and Y coordinates on click
    var Ylocation = e.clientY;
    console.log(Ylocation);

    var newElement = ( // Stores div in variable to be stored in useStateArray
      <div className={styles.money} style={{ top: Ylocation, left: Xlocation }}>
        ${multiplier}
      </div>
      // Top is Y axis, left is X axis
    );
    setMoneyArray([...moneyArray, newElement]); // adds the div to the moneyArray
  };

  const upgradeClick = (e) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (money >= 25) {
      money = money - 25;
      multiplier = multiplier * 2;
      console.log(money);
    } else {
      var newElement = ( // Stores div in variable to be stored in useStateArray
        <div
          className={styles.priceLossAnimation}
          style={{ top: Ylocation, left: Xlocation }}
        >
          Broke
        </div>
      );
      setMoneyArray([...moneyArray, newElement]);
      setTimeout(() => {
        // REMOVE ARRAY ITEMS HERE
      }, 3000);
    }
  };

  return (
    <>
      <div style={{ top: 0, left: 0, position: "absolute" }}>{moneyArray}</div>
      {/* displaying moneyArray (shows divs that are currently stored on the array) */}
      <MainContainer>
        <SubContainer>
          <Header title="Investment Tracker"> </Header>
          <div className={styles.titleSubtext}>
            Track the growth of any investments you have made.
          </div>
          <div className={styles.mainContainer}>
            <div className={styles.buttonContainerMain}>
              <div className={styles.buttonContainerLeft}>
                <div className={styles.gradientButtonAdd} onClick={handleClick}>
                  + Add Item
                </div>
                <div
                  className={styles.gradientButtonAdd}
                  onClick={upgradeClick}
                >
                  {" "}
                  Upgrade
                </div>
                <div style={{ fontWeight: "bold" }}>Balance:</div>
                <span className={styles.priceTag}>${money} </span>
              </div>
              <div className={styles.buttonContainerRight}>
                <OutlineButton click={handleClick} title="Set" />
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
                  <th>Total Buy Price</th>
                  <td>Current Price</td>
                  <td>% Change</td>
                  <td>Actions</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        src="/dnn.png"
                        className={styles.itemIcon}
                        alt=""
                      ></img>{" "}
                      Dreams &amp; Nightmares Case{" "}
                    </div>
                  </td>
                  <td>4</td>
                  <td>£8</td>
                  <td>£1.12 </td>
                  <td>
                    <span className={styles.priceLoss}> ↓ 50.3 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton} onClick={() => clickTest()}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        src="/brokenfang.png"
                        className={styles.itemIcon}
                        alt=""
                      ></img>{" "}
                      Broken Fang Case
                    </div>
                  </td>
                  <td>8</td>
                  <td>£8.00</td>
                  <td>£10.48 </td>
                  <td>
                    <span className={styles.priceGain}> ↑ 1.5 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}> Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        src="/breakout.png"
                        className={styles.itemIcon}
                        alt=""
                      ></img>{" "}
                      Stockholm Contenders 2021 Capsule
                    </div>
                  </td>
                  <td>38</td>
                  <td>£73.48</td>
                  <td>£193.38 </td>
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
                        src="/forzeholo.png"
                        className={styles.itemIcon}
                        alt=""
                      ></img>{" "}
                      forZe eSports (Holo)
                    </div>
                  </td>
                  <td>298</td>
                  <td>£300</td>
                  <td>£759 </td>
                  <td>
                    <span className={styles.priceGain}> ↑ 1.3 %</span>
                  </td>
                  <td>
                    <div className={styles.editButton}>Edit</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.flexy}>
                      <img
                        alt=""
                        src="/clutchcase.png"
                        className={styles.itemIcon}
                      ></img>{" "}
                      Clutch Case (Holo)
                    </div>
                  </td>
                  <td>130</td>
                  <td>£40.00</td>
                  <td>£95.49 </td>
                  <td>
                    <span className={styles.priceLoss}> ↓ 5.3 %</span>
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
