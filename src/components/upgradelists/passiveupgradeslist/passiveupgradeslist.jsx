import styles from "./passiveupgradeslist.module.css";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import Axios from "../../../api/agent";

const PassiveUpgradesList = (
  {
  multiplierFunction,
  frontendArray,
  moneyFunction,
  balance,
  props,
}) => {
  const {userStore: {user, setBalance, setPassiveUpgrade}} = useContextStore()

  useEffect(() => {
    const interval = setInterval(async () => {
      // var newBalanceVariable = user.balance + 5
      // setBalance(newBalanceVariable)
      // const query = await Axios("/api/user/setbalance", "POST", {balance:newBalanceVariable})
    }, 500); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []); 

  const clickCheck = async (e, price, isBought, ID) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (balance >= price && isBought == 0) {
      setBalance(balance);
      moneyFunction(price); 
      setPassiveUpgrade(ID, 1)
      const query = await Axios("/api/user/setpassiveupgrade", "POST", {passiveUpgradeID: ID})
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
    { ID: 1, title: "Passive 1", price: 0.25, multiplier: 2, isBought: user.passiveUpgrade1 },
    { ID: 2, title: "Passive 2", price: 0.5, multiplier: 4, isBought: user.passiveUpgrade2 },
    { ID: 3, title: "Passive 3", price: 0.65, multiplier: 4, isBought: user.passiveUpgrade3 },
    { ID: 4, title: "Passive 4", price: 1.15, multiplier: 4, isBought: user.passiveUpgrade4 },
  ];
  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = balance >= keyname.price ? "#15e815" : "red";
      
      if (keyname.isBought) {
        return null;
      }
      
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
            clickCheck(event, keyname.price, keyname.multiplier, keyname.isBought, keyname.ID)
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