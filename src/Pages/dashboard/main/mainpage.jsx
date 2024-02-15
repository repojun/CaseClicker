import styles from "./mainpage.module.css";
import React, { useState, useEffect } from "react";
import MainContainer from "../../../components/maincontainer/maincontainer";
import SubContainer from "../../../components/subcontainer/subcontainer";
import ClickUpgradesList from "../../../components/upgradelists/clickupgrades/clickupgradeslist";
import PassiveUpgradesList from "../../../components/upgradelists/passiveupgradeslist/passiveupgradeslist";
import Axios from "../../../api/agent";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";

var baseClick = 0.01;
var multiplier = 1;

function MainPage() {
  // const testvariable = getCookieReact(request.cookies, "user_cookie", false)
  // console.log("COOKIE TEST!!!!!: " + testvariable.name)
  const {userStore: {user:{balance=0}, setBalance}} = useContextStore()
  // const [balance, setBalance] = useState(0);
  const [moneyArray, setMoneyArray] = useState([]);

  const handleMultiplierChange = (newMultiplier) => {
    multiplier = multiplier * newMultiplier;
  };

  const handleBalanceChange = (newBalance) => {
    setBalance(balance - newBalance);
  };

  const handleMoneyArrayChange = (newElement) => {
    setMoneyArray([...moneyArray, newElement]);
  };

  const handleClick = async (e) => {
    const newBalance = balance + baseClick * multiplier;
    setBalance(newBalance);
    const query = await Axios("/api/user/setbalance", "POST", {balance:newBalance})
    var Xlocation = e.clientX; // Get client's X and Y coordinates on click
    var Ylocation = e.clientY;
    var newElement = ( // Stores div in variable to be stored in useStateArray
      <div className={styles.money} style={{ top: Ylocation, left: Xlocation }}>
        ${multiplier * baseClick}
      </div>
      // Top is Y axis, left is X axis
    );
    setMoneyArray([...moneyArray, newElement]); // adds the div to the moneyArray
  };

  return (
    <>
      <div style={{ top: 0, left: 0, position: "absolute" }}>{moneyArray}</div>
      <MainContainer>
        <SubContainer>
          <div style={{ display: "flex", columnGap: "8px", fontSize: "40px" }}>
            <div style={{ fontWeight: "bold" }}>Balance:</div>
            <span class={styles.priceTag}>
              ${Math.round(balance * 100) / 100}{" "}
            </span>
          </div>
          <div class={styles.maincontainer}>
            <div class={styles.circle} onClick={handleClick}>
              Click to earn money!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
              <div class={styles.upgradeContainer}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Click Upgrade Station:
                </span>
                <div className={styles.grid}>
                  <ClickUpgradesList
                    multiplierFunction={handleMultiplierChange}
                    frontendArray={handleMoneyArrayChange}
                    moneyFunction={handleBalanceChange}
                    balance={balance}
                  />
                </div>
              </div>
              <div class={styles.upgradeContainer}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    columnGap: "20px",
                  }}
                ></div>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Building Upgrade Station:
                </span>
                <PassiveUpgradesList
                  multiplierFunction={handleMultiplierChange}
                  frontendArray={handleMoneyArrayChange}
                  moneyFunction={handleBalanceChange}
                  balance={balance}
                />
              </div>
            </div>
          </div>
        </SubContainer>
      </MainContainer>
    </>
  );
}

export default observer(MainPage);