import styles from "./passiveupgradeslist.module.css";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useContextStore from "../../../context";
import Axios from "../../../api/agent";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const PassiveUpgradesList = ({ frontendArray, moneyFunction, props }) => {
  const {
    userStore: { user, setBalance, setPassiveUpgrade, setPassiveUpgradeLevel },
  } = useContextStore();

  // const [passiveIncome1, setPassiveIncome1] = useState(0);
  // const [passiveIncome2, setPassiveIncome2] = useState(0);
  // const [passiveIncome3, setPassiveIncome3] = useState(0);
  // const [passiveIncome4, setPassiveIncome4] = useState(0);
  // const [totalPassive, setTotalPassive] = useState(0);

  // useEffect(() => {
  //   if (user && user.passiveUpgrades) {
  //     const income1 = (0.01 + user.passiveUpgrades.passiveUpgrade1.level * 0.005) * Math.pow(1.01, user.passiveUpgrades.passiveUpgrade1.level);
  //     const income2 = (0.04 + user.passiveUpgrades.passiveUpgrade2.level * 0.01) * Math.pow(1.03, user.passiveUpgrades.passiveUpgrade2.level);
  //     const income3 = (0.08 + user.passiveUpgrades.passiveUpgrade3.level * 0.02) * Math.pow(1.04, user.passiveUpgrades.passiveUpgrade3.level);
  //     const income4 = (0.16 + user.passiveUpgrades.passiveUpgrade4.level * 0.04) * Math.pow(1.05, user.passiveUpgrades.passiveUpgrade4.level);

  //     setPassiveIncome1(() => income1);
  //     setPassiveIncome2(() => income2);
  //     setPassiveIncome3(() => income3);
  //     setPassiveIncome4(() => income4);

  //     const newTotalPassive = income1 + income2 + income3 + income4;
  //     setTotalPassive(() => newTotalPassive);
  //     console.log(newTotalPassive);
  //   }
  // }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade1?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + (0.01 + user.passiveUpgrades?.passiveUpgrade1?.level * 0.005) * Math.pow(1.01, user.passiveUpgrades?.passiveUpgrade1?.level);
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade2?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + (0.04 + user.passiveUpgrades?.passiveUpgrade2?.level * 0.01) * Math.pow(1.03, user.passiveUpgrades?.passiveUpgrade2?.level);
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade3?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + (0.08 + user.passiveUpgrades?.passiveUpgrade3?.level * 0.02) * Math.pow(1.04, user.passiveUpgrades?.passiveUpgrade3?.level);
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (user && typeof user.balance !== "undefined" && user.passiveUpgrades?.passiveUpgrade4?.value == 1) {
      const interval = setInterval(async () => {
        var newBalanceVariable = user.balance + (0.16 + user.passiveUpgrades?.passiveUpgrade4?.level * 0.04) * Math.pow(1.05, user.passiveUpgrades?.passiveUpgrade4?.level);
        setBalance(newBalanceVariable);
        const query = await Axios("/api/user/setbalance", "POST", {
          balance: newBalanceVariable,
        });
      }, 1000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval);
    }
  }, [user]);

  const clickCheck = async (e, price, isBought, ID) => {
    console.log(totalPassive);
    var Xlocation = e.clientX;
    var Ylocation = e.clientY;
    if (user.balance >= price) {
      const audio = new Audio("/sfx/clickButton.wav");
      audio.play();
      setBalance(user.balance);
      moneyFunction(price);
      setPassiveUpgrade(ID, 1);
      let newLevel = user.passiveUpgrades[`passiveUpgrade${ID}`].level++ + 1;
      console.log(newLevel);
      setPassiveUpgradeLevel(ID, newLevel);
      const levelQuery = await Axios("/api/user/setpassiveupgradelevel", "POST", { passiveUpgradeID: ID, newLevel: newLevel });
      const upgradeQuery = await Axios("/api/user/setpassiveupgrade", "POST", {
        passiveUpgradeID: ID,
      });
    } else {
      const audio = new Audio("/sfx/error.wav");
      audio.play();
      var newElement = // Stores div in variable to be stored in useStateArray
        (
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
    {
      ID: 1,
      title: "Factory",
      description: "Factories to produce materials!",
      price: (1 + Math.pow(1.1, user.passiveUpgrades?.passiveUpgrade1?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade1?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade1?.value,
    },
    {
      ID: 2,
      title: "Restaurant",
      description: "Provide food and earn money!",
      price: (10 + Math.pow(1.12, user.passiveUpgrades?.passiveUpgrade2?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade2?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade2?.value,
    },
    {
      ID: 3,
      title: "Tech Company",
      description: "Sell computers and earn money!",
      price: (30 + Math.pow(1.13, user.passiveUpgrades?.passiveUpgrade3?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade3?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade3?.value,
    },
    {
      ID: 4,
      title: "Building",
      description: "Buildings to earn money!",
      price: (50 + Math.pow(1.14, user.passiveUpgrades?.passiveUpgrade4?.level - 1)).toFixed(2),
      level: user.passiveUpgrades?.passiveUpgrade4?.level,
      isBought: user.passiveUpgrades?.passiveUpgrade4?.value,
    },
  ];
  const upgradeList = [
    upgradeBoxes.map((keyname) => {
      var priceChecker = user.balance >= keyname.price ? "#15e815" : "red";

      return (
        <Tippy content={keyname.description + " | " + "Price: $" + keyname.price}>
          <div
            style={{
              color: priceChecker,
              border: "2px solid " + priceChecker,
              "--backgroundColor": priceChecker,
              "--backgroundColorGlow": priceChecker,
            }}
            className={styles.upgradeButton}
            onClick={(event) => clickCheck(event, keyname.price, keyname.isBought, keyname.ID)}
          >
            {keyname.title} <br></br> Cost: ${keyname.price} <br></br> Level: {keyname.level}
          </div>
        </Tippy>
      );
    }),
  ];
  return <>
  <div style={{ fontSize: "20px" }}>
                  Passive Power <span class={styles.priceTagNoBold}>$numbergoeshere</span>
                </div>
  {upgradeList}</>;
};

export default observer(PassiveUpgradesList);
