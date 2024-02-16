import styles from "./passiveupgradeslist.module.css";
import React from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";

const PassiveUpgradesList = (
  {
  multiplierFunction,
  frontendArray,
  moneyFunction,
  balance,
  props,
}) => {
  const {userStore: {user, setBalance}} = useContextStore()

  const clickCheck = async (e, price, multiplier) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (balance >= price) {
      setBalance(balance);
      moneyFunction(price);
      multiplierFunction(multiplier);
    } else {
      var newElement = ( // Stores div in variable to be stored in useStateArray
        <div
          className={styles.priceLossAnimation}
          style={{
            top: Ylocation,
            left: Xlocation,
            fontSize: "30px",
            whiteSpace: "nowrap",
          }}
        >
          Broke
        </div>
      );
      frontendArray(newElement);
      setTimeout(() => {
        // REMOVE ARRAY ITEMS HERE
      }, 3000);
    }
    
    
  };

  const upgradeBoxes = [
    { title: "Passive 1", price: 0.25, multiplier: 2, isBought: user.passiveUpgrade1 },
    { title: "Passive 2", price: 0.5, multiplier: 4, isBought: user.passiveUpgrade2 },
    { title: "Passive 3", price: 0.65, multiplier: 4, isBought: user.passiveUpgrade3 },
    { title: "Passive 4", price: 1.15, multiplier: 4, isBought: user.passiveUpgrade4 },
  ];
  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = balance >= keyname.price ? "#15e815" : "red";
      return (
        <div
          style={{
            color: priceChecker,
            border: "2px solid " + priceChecker,
            "--backgroundColor": priceChecker,
            "--backgroundColorGlow": priceChecker,
          }}
          className={styles.upgradeButton}
          onClick={(event) =>
            clickCheck(event, keyname.price, keyname.multiplier)
          }
        >
          {keyname.title} <br></br> Cost: {keyname.price}
        </div>
      );
    }),
  ];
  return <>{upgradeList}</>;
};

export default observer(PassiveUpgradesList);
