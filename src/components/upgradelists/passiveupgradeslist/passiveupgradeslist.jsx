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
    props,
  }) => {
  const { userStore: { user, setBalance, setPassiveUpgrade } } = useContextStore()

  useEffect(() => {
    if (user && typeof user.balance !== 'undefined' && user.passiveUpgrade1 == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.01;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", { balance: newBalanceVariable });
      }, 5000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }

  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== 'undefined' && user.passiveUpgrade2 == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.02;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", { balance: newBalanceVariable });
      }, 4000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
    
  }, [user]);

  
  useEffect(() => {
    if (user && typeof user.balance !== 'undefined' && user.passiveUpgrade3 == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.04;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", { balance: newBalanceVariable });
      }, 2000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
    
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== 'undefined' && user.passiveUpgrade3 == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + 0.08;
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", { balance: newBalanceVariable });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
    
  }, [user]);

  const clickCheck = async (e, price, isBought, ID) => {
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    console.log(user.balance);
    console.log(isBought);
    if (user.balance >= price && isBought == 0) {
      setBalance(user.balance);
      moneyFunction(price);
      setPassiveUpgrade(ID, 1)
      const query = await Axios("/api/user/setpassiveupgrade", "POST", { passiveUpgradeID: ID })
    } else {
      console.log(user.balance);
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
      var priceChecker = user.balance >= keyname.price ? "#15e815" : "red";

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
            clickCheck(event, keyname.price, keyname.isBought, keyname.ID)
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